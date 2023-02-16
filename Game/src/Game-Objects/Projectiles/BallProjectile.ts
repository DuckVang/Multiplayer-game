import { Graphics } from "pixi.js"
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball"
import Vector from "../../../../Engine/src/Math/Vector"
import { MotionTrail } from "../../Render/MotionTrail"
import { DrawBall } from "../../Render/Shapes"
import { IGameObject } from "../IGameObject"
import { IProjectile } from "./IProjectile"


export class BallProjectile extends Ball implements IProjectile {



    graphics: Graphics

    projSpeed: number
    gap: number

    motionTrail: MotionTrail

    constructor(dir: Vector, pos: Vector) {
        super(0, 0, 10, 2)

        this.graphics = new Graphics()
        this.projSpeed = 1000
        this.gap = 50


        let p = dir.mult(this.gap).add(pos)
        this.setPosition(p.x, p.y)
        this.motionTrail = new MotionTrail(this)
        this.motionTrail.Start()



    }

    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this, 1)

        this.motionTrail.Render()

    }
}