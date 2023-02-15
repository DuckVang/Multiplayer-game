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
    motionPos: any
    motionTrailLength: any

    constructor(dir: Vector, pos: Vector) {
        super(0, 0, 10, 2)

        this.graphics = new Graphics()
        this.projSpeed = 1000
        this.gap = 50

        this.motionPos = []
        this.motionTrail = false
        this.motionTrailLength = 10

        let p = dir.mult(this.gap).add(pos)
        this.setPosition(p.x, p.y)



    }
    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this,1)

        if (this.motionPos.length > this.motionTrailLength) this.motionPos.shift()
        if (this.motionTrail) {
            this.motionPos.forEach((pos: Vector) => {
                let tempBall = this
                tempBall.pos = pos
                this.graphics = DrawBall(this.graphics, tempBall,1)

            });
        }   

    }
}