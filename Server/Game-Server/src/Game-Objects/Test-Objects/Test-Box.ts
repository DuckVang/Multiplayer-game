import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Box } from "../../../../../Engine/src/components/Physical-Body/Box"
import Vector from "../../../../../Engine/src/Math/Vector"
import { MotionTrail } from "../../Render/Effects/MotionTrail"
import { DrawBox } from "../../Render/Shapes"
import WORLD from "../../World/GlobalWorld"
import { IGameBody } from "../IGameBody"
import { IGameObject } from "../IGameObject"


export class TestBox extends Box implements IGameBody {

    motionTrail: MotionTrail

    constructor(x: number, y: number) {
        super(200, 200, 300, 300, 30, 200)
        this.setPosition(x,y)
        this.graphics = new Graphics()
        this.PushTo(WORLD.engine)

    }
    render() {

        this.graphics.clear()
        this.graphics = DrawBox(this.graphics, this)

    }
}
