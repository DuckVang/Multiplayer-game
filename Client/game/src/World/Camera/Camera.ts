import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../../../Engine/src/Math/Vector";
import { Player } from "../../Player";
import instance, { World } from "../GlobalWorld";

export function SetCameraTo(player: Player, instance: World) {
  instance.spectate = player;
}
export function Follow(pos: { x: number; y: number }, instance: World) {
  const stage = instance.app.stage;
  stage.pivot.x = pos.x;
  stage.pivot.y = pos.y;

  const renderer = instance.app.renderer;
  stage.position.x = renderer.width / 2;
  stage.position.y = renderer.height / 2;
}
