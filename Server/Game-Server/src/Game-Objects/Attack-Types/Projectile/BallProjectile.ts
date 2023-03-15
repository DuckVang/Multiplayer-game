import { Graphics } from "pixi.js"
import { Ball } from "../../../../../../Engine/src/components/Physical-Body/Ball"
import Body from "../../../../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../../../../Engine/src/Math/Vector"

import WORLD from "../../../World/GlobalWorld"
import { IProjectile } from "./IProjectile"


export class BallProjectile extends Ball implements IProjectile {


    spell: any

    graphics: Graphics

    projSpeed: number
    gap: number






    constructor(dir: Vector, pos: Vector, spell: any, r:number = 10, gap:number = 50) {
        super(0, 0, r, 2)

        this.spell = spell
        this.graphics = new Graphics()
        this.projSpeed = 1000
        this.gap = gap

        this.color = "red"

        this.layer = 0
        let p = dir.mult(this.gap).add(pos)
        this.setPosition(p.x, p.y)
        // this.motionTrail.Start()

        WORLD.SPELL_PROJ.push(this)

        this.PushTo(WORLD.engine)

    }
    collided(...collidedObj: Body[]): void {
        this.spell.effect(...collidedObj)
    }


}