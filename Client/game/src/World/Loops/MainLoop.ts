import { WatchMouse } from "../../Interactions/Mouse";
import { Follow } from "../Camera/Camera";
import { RenderLoop } from "./RenderLoop";

import CLIENT from "../../../../Networking/Client";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import { PLAYER } from "../../Player";

export function MainLoop() {
  // FollowPlayer()
  // UILoop()
  // MapLoop()
  // WatchMouse()

  console.group("main loop");
  setInterval(() => {
    if (CLIENT.gameUpdate) {
      console.log(CLIENT.gameUpdate);
      const update = CLIENT.gameUpdate;
      if (Object.keys(update.players).length !== 0) {
        Object.assign(PLAYER, update.players[CLIENT.socket.id]);

        const mainPlayer = update.players[CLIENT.socket.id];

        Follow({ x: mainPlayer.pos.x, y: mainPlayer.pos.y });
      }

      RenderLoop();
    }
  }, 0);
}
