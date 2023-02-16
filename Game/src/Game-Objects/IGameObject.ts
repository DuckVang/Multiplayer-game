import { Graphics } from "pixi.js"
import Vector from "../../../Engine/src/Math/Vector"
import { MotionTrail } from "../Render/MotionTrail"

export interface IGameObject {

    motionTrail: MotionTrail
    graphics: Graphics
    render: () => void
}