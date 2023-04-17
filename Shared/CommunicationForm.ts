import { Circle } from "../Engine/src/components/Shapes/Circle";
import { Shape, IShape } from "../Engine/src/components/Shapes/Shape";

export interface Update {
  players: { [key: string]: { comp: Circle } };
  objects: { [key: string]: { comp: IShape } };
}
export interface NewPlayer {
  socketID: string;
  playerComp: IShape;
}
