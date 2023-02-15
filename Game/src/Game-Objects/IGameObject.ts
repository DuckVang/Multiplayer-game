import { Graphics } from "pixi.js"
import Vector from "../../../Engine/src/Math/Vector"

export interface IGameObject {

    motionTrail: boolean,
    motionPos: Vector[]
    graphics: Graphics
    render: () => void
}