import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball"
import { Box } from "../../../../../Engine/src/components/Physical-Body/Box"
import Vector from "../../../../../Engine/src/Math/Vector"
import { MotionTrail } from "../../Render/Effects/MotionTrail"
import { DrawBall, DrawBox } from "../../Render/Shapes"
import { IGameBody } from "../IGameBody"
import { IGameObject } from "../IGameObject"


export class TestBall extends Ball implements IGameBody {

   motionTrail: MotionTrail
    constructor() {
        super(10, 10, 10, 10)
        this.graphics = new Graphics()

    }
    render() {

        this.graphics.clear()
        this.graphics = DrawBall(this.graphics, this, 1)

    }
}
