import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Ball } from "../../../Engine/src/components/Physical-Body/Ball"
import Body from "../../../Engine/src/components/Physical-Body/Body"
import { userMove } from "../Interactions/Movement"
import { DrawBall } from "../Render /Shapes"

export class Player extends Ball {


    constructor() {
        super(200, 200, 30, 2)
        userMove(this)
        this.graphics = new Graphics()
        // this.graphics.position.x = this.pos.x
        // this.graphics.position.y = this.pos.y


    }
    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this)

    }
}
