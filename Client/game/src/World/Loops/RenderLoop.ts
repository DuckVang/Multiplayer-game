// import GAME_CLIENT from "../../../../Networking/Client";
// import { MainPlayer } from "../../Player";
// import { DrawBall, DrawBox } from "../../Render/Shapes";
// import { World } from "../GlobalWorld";
// import Body from "../../../../../Engine/src/components/Physical-Body/Body";

// import {
//   IShape,
//   Shape,
// } from "../../../../../Engine/src/components/Shapes/Shape";
// import { Circle } from "../../../../../Engine/src/components/Shapes/Circle";
// import { EFFECT_TYPES, SHAPES_TYPES } from "../../../../../Shared/Constants";
// import { ShakeScreen } from "../Camera/ShakeScreen";
// import { Player } from "../../../../../Game/src/Game-Objects/Player";
// export function RenderLoop(instance: World) {
//   const { MAIN_PLAYER, PLAYERS, OBJECTS } = instance;

//   setInterval(() => {
//     instance.BACKGROUND.clear();

//     instance.BACKGROUND.beginFill(0x000000);
//     instance.BACKGROUND.drawRect(0, 0, instance.width, instance.height);

//     RenderMainPlayer(MAIN_PLAYER, instance);
//     RenderPlayers(PLAYERS, instance);
//     RenderObjects(OBJECTS, instance);

//   }, 200);
// }
// function RenderMainPlayer(player: MainPlayer, instance: World) {
    
//   DrawBall(instance.BACKGROUND, player.comp, player.comp.color);
// }
// function RenderPlayers(players: { [key: string]: Player }, instance: World) {
//   for (const key in players) {
//     DrawBall(instance.BACKGROUND, players[key].comp, players[key].comp.color);
//   }
// }

// function RenderObjects(objects: IShape[], instance: World) {
//   objects.forEach((obj) => {
//     switch (obj.type) {
//       case SHAPES_TYPES.CIRCLE:
//         DrawBall(instance.BACKGROUND, obj);
//         break;

//       case SHAPES_TYPES.RECTANGLE:
//         DrawBox(instance.BACKGROUND, obj);
//         break;
//     }
//   });
// }
