import { WatchMouse } from "../../Interactions/Mouse";
import { Follow } from "../Camera/Camera";


import GAME_CLIENT from "../../../../Networking/Client";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";

import World from "../GlobalWorld";
import { EFFECT_TYPES } from "../../../../../Shared/Constants";
import { ShakeScreen } from "../Camera/ShakeScreen";
import { Shake } from "pixi-game-camera";
import { UpdateLoop } from "./UpdateLoop";

export function MainLoop(instance: World) {
  // FollowPlayer()
  // UILoop()
  // MapLoop()
  // WatchMouse()

  // setInterval(() => {
  //   if (GAME_CLIENT.gameUpdate) {
  //     const update = GAME_CLIENT.gameUpdate;
  //     if (Object.keys(update.players).length !== 0) {
  //       const MAIN_PLAYER = instance.MAIN_PLAYER;
  //       Object.assign(MAIN_PLAYER, update.players[GAME_CLIENT.socket.id].comp);

  //     }

  //     RenderLoop(instance);
  //   }
  // }, 0);

  UpdateLoop(GAME_CLIENT, instance);
  // RenderLoop(instance);
  
}
