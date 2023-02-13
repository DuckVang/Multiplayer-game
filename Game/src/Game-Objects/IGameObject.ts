import { Graphics } from "pixi.js"

export interface IGameObject {

    motionTrail: boolean,
    graphics: Graphics
    render: () => void
}