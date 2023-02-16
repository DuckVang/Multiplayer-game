import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Box } from "../../../../Engine/src/components/Physical-Body/Box"
import Vector from "../../../../Engine/src/Math/Vector"
import { MotionTrail } from "../../Render/MotionTrail"
import { DrawBox } from "../../Render/Shapes"
import { IGameBody } from "../IGameBody"
import { IGameObject } from "../IGameObject"


export class TestBox extends Box implements IGameBody {

    motionTrail: MotionTrail

    constructor() {
        super(200, 200, 300, 300, 30, 2)
        this.graphics = new Graphics()

    }
    render() {

        this.graphics.clear()
        this.graphics = DrawBox(this.graphics, this)

    }
}
