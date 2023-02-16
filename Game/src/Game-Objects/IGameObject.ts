import { Graphics } from "pixi.js"
import Vector from "../../../Engine/src/Math/Vector"

export interface IGameObject {

    motionPos: Vector[]
    motionTrail: boolean,
    motionTrailLength: number
    graphics: Graphics
    render: () => void
}