import { IShape, Sprite } from "pixi.js";
import { Client } from "../../../../Networking/Client";
import { Follow } from "../Camera/Camera";
import World from "../GlobalWorld";
import { forEach } from "../../../../../webpack.config";
import { GameObject } from "../../Game-Object";

export function UpdateLoop(client: Client, world: World) {
  setInterval(() => {
    UpdateState(client, world);
    if (world.MAIN_PLAYER) {
      const { pos } = world.MAIN_PLAYER;
      Follow({ x: pos.x, y: pos.y }, world);
    }
  }, 0);
}
function UpdateState(client: Client, world: World) {
  if (!client.gameUpdate) return;
  const { players, objects } = client.gameUpdate;
  const { MAIN_PLAYER, PLAYERS, OBJECTS } = world;

  if (Object.keys(players).length != 0) {
    if (Object.keys(players).includes(world.mainPlayerID))
      MAIN_PLAYER.Update(players[world.mainPlayerID].comp);

    for (const key in players) {
      if (Object.keys(PLAYERS).includes(key)) {
        if (key != world.mainPlayerID) PLAYERS[key].Update(players[key].comp);
      }
    }
  }

  Object.keys(OBJECTS).forEach((key) => {
    if (!Object.keys(objects).includes(key)) {
      OBJECTS[key].destroy()
      delete OBJECTS[key]
    }
  });

  Object.keys(objects).forEach((key) => {
    if (!OBJECTS[key]) {
      const { comp } = objects[key];
      OBJECTS[key] = new GameObject(world.BACKGROUND, comp.pos, comp);
    } else if (Object.keys(OBJECTS).includes(key)) {
      OBJECTS[key].Update(objects[key].comp);
    }
  });

  console.log(client.gameUpdate)

  //delete not used

  // if (objectsComp.length != 0)
  //   OBJECTS.splice(0, OBJECTS.length, ...objectsComp);
}
