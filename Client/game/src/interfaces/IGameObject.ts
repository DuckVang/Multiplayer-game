import { Graphics } from "pixi.js"
import { MotionTrail } from "../Render/Effects/MotionTrail"

export default interface IGameObject {

    motionTrail: MotionTrail
    graphics: Graphics
    render: () => void
 
   
}