import instance, { World } from "../GlobalWorld";
import { Shake } from "pixi-game-camera";
let isShaking = false;
let shakeDuration = 3000;
export function ShakeScreen(instance: World) {

  const intenseShake = new Shake(instance.app.stage, 10, 1000);
  isShaking = true;

  instance.CAMERA.effect(intenseShake);


}
