import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball"
import Body from "../../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../../Engine/src/Math/Vector"
import { ManaBullet } from "../Game-Logic/Spells/ManaBullet"
import { Spell } from "../Game-Logic/Spells/SpellClass"
import WORLD from "../World/GlobalWorld"
import { ManaExplosion } from "../Game-Logic/Spells/ManaExplosion"
import { Dash } from "../Game-Logic/Spells/Dash"
import { IGameBody } from "./IGameBody"
import { MeleeAttack } from "../Game-Logic/Spells/MeleeAttack"
import { Laser } from "../Game-Logic/Spells/Laser"
import { FireBall } from "../Game-Logic/Spells/FireBall"

export class Player extends Ball implements IGameBody {

    private spells: Spell[]

    alive: boolean

    maxHealth: number
    health: number
    maxEnergy: number
    energy: number

    selected: number


    motionTrail: boolean

    savePos: any

    invicibility: boolean
    invicibilityTime: number

    constructor(x: number, y: number) {
        super(x, y, 30, 2)

        this.spells = []
        this.maxHealth = 100
        this.health = this.maxHealth
        this.selected = 1
        this.maxSpeed = 10000
        this.alive = true
        this.graphics = new Graphics()
        this.color = "orange"
        this.spells.push(new ManaBullet(), new ManaExplosion(), new FireBall(), new Dash(), new MeleeAttack(), new Laser())


        this.invicibility = false
        this.invicibilityTime = 5000

        this.PushTo(WORLD.engine)

    }
    CastSpell(dir: Vector) {

        this.spells[this.selected - 1].cast(dir)

    }
    Damaged(amount: number, invicible: boolean = true) {
        if (this.invicibility) return

        if (this.alive) {
            
            
            this.health -= amount
            
           
            if (this.health <= 0) this.Dead()
            
            if(invicible){
                
                this.invicibility = true 
               
                setTimeout(() => {
                    this.invicibility = false
                }, this.invicibilityTime);

            }
            

        } else this.health = 0


    }
    Dead() {
        this.alive = false
        this.remove()

    }


}
