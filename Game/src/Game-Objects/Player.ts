import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Ball } from "../../../Engine/src/components/Physical-Body/Ball"
import Body from "../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../Engine/src/Math/Vector"
import { ManaBullet } from "../Game-Logic/Spells/ManaBullet"
import { Spell } from "../Game-Logic/Spells/SpellClass"
import { AddMovement } from "../Interactions/Movement"
import { DrawBall } from "../Render /Shapes"
import WORLD from "../World/World"

export class Player extends Ball {


    Spells: Spell[]

    maxHealth: number
    health: number

    maxEnergy: number
    energy: number

    constructor() {
        super(200, 200, 30, 2)

        this.maxHealth = 100
        this.health = 50

        this.graphics = new Graphics()

        // this.graphics.position.x = this.pos.x
        // this.graphics.position.y = this.pos.y


    }
    CastSpell(dir:Vector) {
        let manaBullet = new ManaBullet()
        manaBullet.cast(dir)

    }


    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this)

    }
}
