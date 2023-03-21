import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Box } from "../../../../../Engine/src/components/Physical-Body/Box"
import Vector from "../../../../../Engine/src/Math/Vector"

import WORLD from "../../World/GlobalWorld"
import { IGameBody } from "../IGameBody"



export class TestBox extends Box  {



    constructor(x: number, y: number) {
        super(200, 200, 300, 300, 30, 200)
        this.setPosition(x,y)
    
        this.PushTo(WORLD.engine)

    }
}
