import { interactiveTarget } from "pixi.js"
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball"
import Vector from "../../../../../Engine/src/Math/Vector"
import { IGameBody } from "../../Game-Objects/IGameBody"
import { IGameObject } from "../../Game-Objects/IGameObject"
import { Timer } from "../../Game-UI/Timer"
import { DrawBall } from "../Shapes"



export class MotionTrail {

    obj: IGameBody
    intervalId: any

    motionPos: Vector[]
    motionTrail: boolean
    motionTrailLength: number



    constructor(obj: IGameBody) {
        this.obj = obj

        this.motionPos = []
        this.motionTrail = true
        this.motionTrailLength = 5

    }
    TurnOn() {
        this.intervalId = setInterval(this.SavePos, 100)
        this.motionTrail = true
    }
    TurnOff() {
        clearInterval(this.intervalId)
        this.motionTrail = false
    }
    Render() {
        if (this.motionTrail) {
            this.motionPos.forEach((pos, i) => {
                let ratio = (i + 1) / this.motionPos.length;
                let tempBall = this.obj
                tempBall.pos = pos
                this.obj.graphics = DrawBall(this.obj.graphics, tempBall, ratio)

            });
        }
    }

    private SavePos = () => {

        this.motionPos.push(new Vector(this.obj.pos.x, this.obj.pos.y))
        if (this.motionPos.length > this.motionTrailLength) this.motionPos.shift()

    }
}