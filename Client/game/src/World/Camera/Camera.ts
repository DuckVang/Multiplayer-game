import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../../../Engine/src/Math/Vector";
import { Player } from "../../Player";
import instance, { World } from "../GlobalWorld";

export function SetCameraTo(player: Player, instance: World) {
  instance.spectate = player;
}
export function Follow(pos: { x: number; y: number }, instance: World) {
  instance.app.stage.pivot.x = pos.x;
  instance.app.stage.pivot.y = pos.y;
  console.log(instance.app.stage.pivot)
}
