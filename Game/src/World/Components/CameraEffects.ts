import WORLD from "../GlobalWorld";
import { Shake } from "pixi-game-camera";

export function ShakeScreen(){
    const intenseShake = new Shake(WORLD.VIEWPORT,10,400);
 
    WORLD.CAMERA.effect(intenseShake)
    

}