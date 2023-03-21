import * as Color from "color"
import { DisplayObject, Graphics } from "pixi.js"
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball"
import { Box } from "../../../../../Engine/src/components/Physical-Body/Box"
import Vector from "../../../../../Engine/src/Math/Vector"

import { IGameBody } from "../IGameBody"



export class TestBall extends Ball {

   
    constructor() {
        super(10, 10, 10, 10)
        this.graphics = new Graphics()

    }
   
}
