import { CollisionData } from "./components/Collsions/CollisionData"
import { Grid } from "./components/Collsions/Grid"
import Body from "./components/Physical-Body/Body"

import { checkColl, collisionHandlingCondition } from "./components/Collsions/Detection"
export default class Engine {



    BODIES: Body[]
    COLLISIONS: CollisionData[]

    GRID: Grid


    constructor(cellSize: number, width: number, height: number) {

        this.BODIES = []
        this.COLLISIONS = []
        this.GRID = new Grid(cellSize, width, height)
    }


    Loop() {

        this.GRID.clear()
        this.COLLISIONS.length = 0;
        
        this.BODIES.forEach((b) => {
            b.reposition()
            b.comp.UpdateAABB()
            this.GRID.add(b)
        })
        
    //    this.GRID.grid[0].forEach((element, index) => {
    //     console.log(element, index)
    //    });
console.log(this.GRID.grid[0])
        this.FindCollisionsGrid()
    


    }
    FindCollisionsGrid() {


        for (let x = 0; x < this.GRID.numRows; x++) {

            for (let y = 0; y < this.GRID.numCols; y++) {

                const currentCell = this.GRID.getObjectsFromCell(x, y)


                for (let dx = -1; dx <= 1; dx++) {

                    for (let dy = -1; dy <= 1; dy++) {

                        const otherCell = this.GRID.getObjectsFromCell(x + dx, y + dy)

                        if (currentCell || otherCell)
                            this.CheckCellsColision(currentCell, otherCell)



                    }

                }


            }
        }



    }
    CheckCellsColision(cell1: Body[], cell2: Body[]) {
        let BODIES = cell1.concat(cell2)

        const seen = new Set();
        const filtered = BODIES.filter((obj) => {
            if (obj == null)
                return false

            const key = obj.id;
            const hasSeen = seen.has(key);
            seen.add(key);
            return !hasSeen;
        });




        this.COLLISIONS.length = 0;
        filtered.forEach((b, index) => {
            for (let bodyPair = index + 1; bodyPair < filtered.length; bodyPair++) {
                let bestSat = checkColl(filtered[index], filtered[bodyPair]);
                if (bestSat) {
                    if (collisionHandlingCondition(filtered[index], filtered[bodyPair])) {
                        this.COLLISIONS.push(new CollisionData(filtered[index], filtered[bodyPair], bestSat.axis, bestSat.pen, bestSat.vertex, true, true));
                    }
                    else {
                        this.COLLISIONS.push(new CollisionData(filtered[index], filtered[bodyPair], bestSat.axis, bestSat.pen, bestSat.vertex, false, false));
                    }

                }
            }
        });
        
        this.COLLISIONS.forEach((c) => {

            c.body1.collided(c.body2)
            c.body2.collided(c.body1)


            if (c.testPen) c.penRes();
            if (c.testColl) c.collRes();
        });



        // cell1.forEach(obj1 => {

        //     cell2.forEach(obj2 => {

        //         if (obj1 != obj2) {

        //             let bestSat = checkColl(obj1, obj2);
        //             if (bestSat) {

        //                 if (collisionHandlingCondition(obj1, obj2)) {
        //                     this.COLLISIONS.push(new CollisionData(obj1, obj2, bestSat.axis, bestSat.pen, bestSat.vertex, true, true));
        //                 }
        //                 else {

        //                     this.COLLISIONS.push(new CollisionData(obj1, obj2, bestSat.axis, bestSat.pen, bestSat.vertex, false, false));
        //                 }

        //             }
        //         }
        //     });
        // });
    }

}