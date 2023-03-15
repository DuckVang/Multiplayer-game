
import { DisplayObject, Graphics } from "pixi.js"
import { Box } from "../../../../../Engine/src/components/Physical-Body/Box"
import { Pyramid } from "../../../../../Engine/src/components/Physical-Body/Pyramid"

import { IGameBody } from "../IGameBody"


export class TestPyramid extends Pyramid implements IGameBody {

    motionTrail:boolean

    constructor() {
        super(10, 10, 100, 100, 50, 200, 2)
        this.graphics = new Graphics()
        
    }

    
}
