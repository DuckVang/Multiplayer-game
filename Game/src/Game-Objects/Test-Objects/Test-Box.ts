import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Box } from "../../../../Engine/src/components/Physical-Body/Box"
import { DrawBox } from "../../Render /Shapes"


export class TestBox extends Box {


    constructor() {
        super(200, 200, 300, 300, 30, 2)

        this.graphics = new Graphics()
        // this.graphics.position.x = this.pos.x
        // this.graphics.position.y = this.pos.y


    }
    render() {

        this.graphics.clear()
        this.graphics = DrawBox(this.graphics, this)

    }
}
