import { Update } from "../../Shared/CommunicationForm";
import { EFFECT_TYPES, MSG_TYPES } from "../../Shared/Constants";
import { forEach } from "../../webpack.config";
import { ShakeScreen } from "../game/src/World/Camera/ShakeScreen";
import World from "../game/src/World/GlobalWorld";
import GAME_CLIENT, { Client } from "./Client";

export function AddListeners(world: World, client: Client) {
  client.socket.on(EFFECT_TYPES.DAMAGED, () => {
    //add normal player instance for each player, no need for basic objects, enabling dashin, blinking ...
    // MAIN_PLAYER
    // ShakeScreen(client.)
  });
  client.socket.on(MSG_TYPES.GAME_UPDATE, (data: Update) => {
    client.gameUpdate = data;
  });
  client.socket.on(
    MSG_TYPES.NEW_PLAYER_JOINED,
    (data: { socketID: string }) => {
      world.CreatePlayer(data.socketID);
      console.log("new player joined" + data.socketID);
    }
  );
  client.socket.on(MSG_TYPES.PLAYER_LIST, (data: { playersIDs: string[] }) => {
    data.playersIDs.forEach((id) => {
      if (id != world.mainPlayerID) world.CreatePlayer(id);
    });
  });
}
