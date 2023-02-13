import { Graphics } from "pixi.js"
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball"
import Vector from "../../../../Engine/src/Math/Vector"
import { DrawBall } from "../../Render/Shapes"
import { IGameObject } from "../IGameObject"
import { Projectile } from "./IProjectile"


export class BallProjectile extends Ball implements Projectile {



    graphics: Graphics

    projSpeed: number
    gap: number

    motionTrail: boolean

    constructor(dir: Vector, pos: Vector) {
        super(0, 0, 10, 2)

        this.graphics = new Graphics()
        this.projSpeed = 1000
        this.gap = 50

        this.motionTrail = false

        let p = dir.mult(this.gap).add(pos)
        this.setPosition(p.x, p.y)


    }
    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this)

    }
}