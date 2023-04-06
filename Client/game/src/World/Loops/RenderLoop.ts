import GAME_CLIENT from "../../../../Networking/Client";
import { Player } from "../../Player";
import { DrawBall, DrawBox } from "../../Render/Shapes";
import { World } from "../GlobalWorld";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";

import {
  IShape,
  Shape,
} from "../../../../../Engine/src/components/Shapes/Shape";
import { Circle } from "../../../../../Engine/src/components/Shapes/Circle";
import { SHAPES_TYPES } from "../../../../../Shared/Constants";
export function RenderLoop(instance: World) {
  if (!GAME_CLIENT.gameUpdate) return;
  instance.BACKGROUND.clear();

  // CLIENT.gameUpdate.players((player: any) => {

  //     DrawBall(instance.BACKGROUND, player.comp)

  // });
  // console.log(CLIENT.gameUpdate.players)
  instance.BACKGROUND.beginFill(0x000000);
  instance.BACKGROUND.drawRect(0, 0, instance.width, instance.height);

  // for (const key in CLIENT.gameUpdate.players) {
  //     DrawBall(instance.BACKGROUND, CLIENT.gameUpdate.players[key])
  // }

  RenderPlayers(GAME_CLIENT.gameUpdate.players, instance);
  RenderObjects(GAME_CLIENT.gameUpdate.objects, instance);
}

function RenderPlayers(players: { [key: string]: Circle }, instance: World) {
  for (const key in players) {
    DrawBall(instance.BACKGROUND, players[key]);
  }
}

function RenderObjects(objects: IShape[], instance: World) {
  objects.forEach((obj) => {
    switch (obj.type) {
      case SHAPES_TYPES.CIRCLE:
        DrawBall(instance.BACKGROUND, obj);
        break;

      case SHAPES_TYPES.RECTANGLE:
        DrawBox(instance.BACKGROUND, obj);
        break;
    }
  });
}
