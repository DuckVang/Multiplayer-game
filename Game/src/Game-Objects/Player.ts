import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Ball } from "../../../Engine/src/components/Physical-Body/Ball"
import Body from "../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../Engine/src/Math/Vector"
import { ShakeScreen } from "../World/Components/CameraEffects"
import { ManaBullet } from "../Game-Logic/Spells/ManaBullet"
import { Spell } from "../Game-Logic/Spells/SpellClass"
import { AddControl } from "../Interactions/Movement"
import { DrawBall } from "../Render/Shapes"
import WORLD from "../World/GlobalWorld"
import { ManaExplosion } from "../Game-Logic/Spells/ManaExplosion"
import { Dash } from "../Game-Logic/Spells/Dash"
import { IGameObject } from "./IGameObject"
import { Timer } from "../Game-UI/Timer"
import { IGameBody } from "./IGameBody"

export class Player extends Ball implements IGameBody {

    private spells: Spell[]

    alive: boolean

    maxHealth: number
    health: number
    maxEnergy: number
    energy: number

    selected: number

    motionPos: Vector[]
    motionTrail: boolean
    motionTrailLength: number

    savePos: any

    constructor(x: number, y: number) {
        super(x, y, 30, 2)

        this.spells = []
        this.maxHealth = 100
        this.health = this.maxHealth


        this.graphics = new Graphics()

        this.motionPos = []
        this.motionTrail = true
        this.motionTrailLength = 5

        this.spells.push(new ManaBullet(), new ManaExplosion(), new Dash())


        this.savePos = setInterval(() => {

            this.motionPos.push(new Vector(this.pos.x, this.pos.y))
            //how fuck with refernce 
            if (this.motionPos.length > this.motionTrailLength) this.motionPos.shift()

        }, 100)
    }
    CastSpell(dir: Vector) {

        this.spells[this.selected - 1].cast(dir)

    }
    Damaged(amount: number) {

        this.health -= amount
        ShakeScreen()
        if (this.health <= 0) this.Dead()

    }
    Dead() {
        this.alive = false
        this.remove()

    }
    startSavingPos(array:Vector[]){

    }
    stopSavingPos(array:Vector[]){
        
    }


    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this, 1)
      
        if (this.motionTrail) {
            this.motionPos.forEach((pos, i) => {
                var ratio = (i + 1) / this.motionPos.length;
                console.log(ratio)
                let tempBall = this
                tempBall.pos = pos
                this.graphics = DrawBall(this.graphics, tempBall, ratio)

            });
        }


    }
}
