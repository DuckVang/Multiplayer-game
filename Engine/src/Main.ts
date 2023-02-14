import { CollisionData } from "./components/Collsions/CollisionData"
import { checkColl, collisionHandlingCondition } from "./components/Collsions/Detection"
import { Ball } from "./components/Physical-Body/Ball"
import Body from "./components/Physical-Body/Body"
import { Box } from "./components/Physical-Body/Box"
import { Wall } from "./components/Physical-Body/Wall"
import { PhysicsLoop } from "./Loops/PhysicalLoop"
export default class Engine {

    BODIES: Body[]
    COLLISIONS: CollisionData[]

    constructor() {
        this.BODIES = []
        this.COLLISIONS = []
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
    PushCustom(body: Body){
        this.BODIES.push(body)
    }
    Loop() {
        this.COLLISIONS.length = 0;
        this.BODIES.forEach((b) => {
            b.reposition();
        })

        this.BODIES.forEach((b, index) => {
            for (let bodyPair = index + 1; bodyPair < this.BODIES.length; bodyPair++) {
                if (collisionHandlingCondition(this.BODIES[index], this.BODIES[bodyPair])) {
                    let bestSat = checkColl(this.BODIES[index], this.BODIES[bodyPair]);
                    if (bestSat) {
                        this.COLLISIONS.push(new CollisionData(this.BODIES[index], this.BODIES[bodyPair], bestSat.axis, bestSat.pen, bestSat.vertex));
                    }
                }
            }
        });

        this.COLLISIONS.forEach((c) => {
            c.penRes();
            c.collRes();
        });
    }

}