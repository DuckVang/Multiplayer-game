import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Ball } from "../../../Engine/src/components/Physical-Body/Ball"
import Body from "../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../Engine/src/Math/Vector"
import { ShakeScreen } from "../Effects/ScreenShake"
import { ManaBullet } from "../Game-Logic/Spells/ManaBullet"
import { Spell } from "../Game-Logic/Spells/SpellClass"
import { AddControl } from "../Interactions/Movement"
import { DrawBall } from "../Render/Shapes"
import WORLD from "../World/World"

export class Player extends Ball {

    private spells: Spell[]

    alive: boolean

    maxHealth: number
    health: number
    maxEnergy: number
    energy: number

    constructor(x: number, y: number) {
        super(x, y, 30, 2)

        this.maxHealth = 100
        this.health = this.maxHealth

        this.graphics = new Graphics()

        // this.graphics.position.x = this.pos.x
        // this.graphics.position.y = this.pos.y


    }
    CastSpell(dir: Vector) {
        let manaBullet = new ManaBullet()
        manaBullet.cast(dir)

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


    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this)

    }
}
