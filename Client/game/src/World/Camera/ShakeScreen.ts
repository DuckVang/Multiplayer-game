import instance from "../GlobalWorld";
import { Shake } from "pixi-game-camera";

export function ShakeScreen(){
    const intenseShake = new Shake(instance.VIEWPORT,10,400);
 
    instance.CAMERA.effect(intenseShake)
    

}