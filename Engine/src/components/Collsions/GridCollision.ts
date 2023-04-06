import WORLD from "../../../../Game/src/World/GlobalWorld";
import Engine from "../../Main";
import COLLISIONS from "../Models/Collisions";
import { CollisionData } from "./CollisionData";
import { checkColl, collisionHandlingCondition } from "./Detection";
import Body from "../Physical-Body/Body";

const checked: Body[] = [];

export function FindCollisionsGrid() {
  let grid = Engine.prototype.GRID;
  checked.length = 0;

  for (let x = 0; x < grid.width; x++) {
    for (let y = 0; y < grid.height; y++) {
      const currentCell = grid.getObjectsFromCell(x, y);
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const otherCell = grid.getObjectsFromCell(x + dx, y + dy);
          CheckCellsColision(currentCell, otherCell);
        }
      }
    }
  }
}
export function CheckCellsColision(cell1: Body[], cell2: Body[]) {
  cell1.forEach((obj1) => {
    cell2.forEach((obj2) => {
      if (obj1 != obj2) {
        if (checked.includes(obj1) || checked.includes(obj2)) {
          let bestSat = checkColl(obj1, obj2);
          if (bestSat) {
            checked.push(obj1, obj2);
            if (collisionHandlingCondition(obj1, obj2)) {
              Engine.prototype.COLLISIONS.push(
                new CollisionData(
                  obj1,
                  obj2,
                  bestSat.axis,
                  bestSat.pen,
                  bestSat.vertex,
                  true,
                  true
                )
              );
            } else {
              Engine.prototype.COLLISIONS.push(
                new CollisionData(
                  obj1,
                  obj2,
                  bestSat.axis,
                  bestSat.pen,
                  bestSat.vertex,
                  false,
                  false
                )
              );
            }
          }
        }
      }
    });
  });
}
