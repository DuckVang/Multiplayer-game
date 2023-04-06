import instance, { World } from "../GlobalWorld";
import { Shake } from "pixi-game-camera";

export function ShakeScreen(instance:World){
    const intenseShake = new Shake(instance.app.stage,10,400);
 
    instance.CAMERA.effect(intenseShake)
    
}