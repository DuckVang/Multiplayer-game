import { WatchMouse } from "../../Interactions/Mouse";
import { Follow } from "../Camera/Camera";
import { RenderLoop } from "./RenderLoop";

import GAME_CLIENT from "../../../../Networking/Client";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import { PLAYER } from "../../Player";
import World from "../GlobalWorld";

export function MainLoop(instance: World) {
  // FollowPlayer()
  // UILoop()
  // MapLoop()
  // WatchMouse()

  setInterval(() => {
    if (GAME_CLIENT.gameUpdate) {
      const update = GAME_CLIENT.gameUpdate;
      if (Object.keys(update.players).length !== 0) {
        Object.assign(PLAYER, update.players[GAME_CLIENT.socket.id].comp);

        const mainPlayer = update.players[GAME_CLIENT.socket.id].comp;

        Follow({ x: mainPlayer.pos.x, y: mainPlayer.pos.y }, instance);
      }
      console.log(GAME_CLIENT.gameUpdate.players);
      RenderLoop(instance);
    }
  }, 0);
}
