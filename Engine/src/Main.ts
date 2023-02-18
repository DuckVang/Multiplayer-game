import { CollisionData } from "./components/Collsions/CollisionData"
import { checkColl, collisionHandlingCondition } from "./components/Collsions/Detection"
import { Grid } from "./components/Collsions/Grid"
import { FindCollisionsGrid } from "./components/Collsions/GridCollision"
import { Ball } from "./components/Physical-Body/Ball"
import Body from "./components/Physical-Body/Body"
import { Box } from "./components/Physical-Body/Box"
import { Wall } from "./components/Physical-Body/Wall"
import { PhysicsLoop } from "./Loops/PhysicalLoop"
export default class Engine {

    BODIES: Body[]
    COLLISIONS: CollisionData[]

    GRID: Grid

    constructor(cellSize: number, width: number, height: number) {
        this.BODIES = []
        this.COLLISIONS = []
        this.GRID = new Grid(cellSize, width, height)
    }

    CreateBall(x: number, y: number, r: number, m: number) {
        this.BODIES.push(new Ball(x, y, r, m))
    }
    CreatePyramid() {

    }
    CreateBox(x1: number, y1: number, x2: number, y2: number, w: number, m: number) {
        this.BODIES.push(new Box(x1, y1, x2, y2, w, m))
    }
    CreateWall(x1: number, y1: number, x2: number, y2: number) {
        this.BODIES.push(new Wall(x1, y1, x2, y2))
    }
    PushCustom(body: Body) {
        this.BODIES.push(body)
    }
    Loop() {
        this.GRID.clear();
        this.COLLISIONS.length = 0;

        this.BODIES.forEach((b) => {
            b.reposition();
            this.GRID.add(b)
        })

        
        FindCollisionsGrid()

        this.COLLISIONS.forEach((c) => {


        
        c.body1.collided(c.body2)
        c.body2.collided(c.body1)

    

        if (c.testPen) c.penRes();
        if (c.testColl) c.collRes();
        });
    }

}