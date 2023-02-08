import { Graphics } from "pixi.js"
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball"
import Vector from "../../../../Engine/src/Math/Vector"
import { DrawBall } from "../../Render/Shapes"


export class Projectile extends Ball implements Projectile{



    graphics: Graphics


    constructor(dir: Vector, pos: Vector) {
        dir = dir.mult(100).add(pos)
        super(dir.x, dir.y, 10, 2)

        this.graphics = new Graphics()

        // this.graphics.position.x = this.pos.x
        // this.graphics.position.y = this.pos.y

    }
    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this)

    }
}