import { interactiveTarget } from "pixi.js"
import { Ball } from "../../../Engine/src/components/Physical-Body/Ball"
import Vector from "../../../Engine/src/Math/Vector"
import { IGameBody } from "../Game-Objects/IGameBody"
import { IGameObject } from "../Game-Objects/IGameObject"
import { Timer } from "../Game-UI/Timer"
import { DrawBall } from "./Shapes"



class MotionTrail {

    obj: IGameBody
    intervalId: any
    SavePos = () => {

        this.obj.motionPos.push(new Vector(this.obj.pos.x, this.obj.pos.y))
        if (this.obj.motionPos.length > this.obj.motionTrailLength) this.obj.motionPos.shift()

    }



    constructor(obj: IGameBody) {
        this.obj = obj
    }
    StartInterval() {
        this.intervalId = setInterval(this.SavePos, 100)
    }
    StopInterval() {
        clearInterval(this.intervalId)
    }
    RenderMotion(){
        if (this.obj.motionTrail) {
            this.obj.motionPos.forEach((pos, i) => {
                var ratio = (i + 1) / this.obj.motionPos.length;
                console.log(ratio)
                let tempBall = this.obj
                tempBall.pos = pos
                this.obj.graphics = DrawBall(this.obj.graphics, tempBall, ratio)

            });
        }
    }

}