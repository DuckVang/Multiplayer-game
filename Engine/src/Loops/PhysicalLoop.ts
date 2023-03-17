import COLLISIONS from "../components/Models/Collisions";
import BODIES from "../components/Models/Bodies";
import { CollisionData } from "../components/Collsions/CollisionData";
import { checkColl, collisionHandlingCondition } from "../components/Collsions/Detection";


export function PhysicsLoop(dt: number) {
    COLLISIONS.length = 0;
    BODIES.forEach((b) => {
        b.reposition(dt);
        b.collidedObj = []
    })

    BODIES.forEach((b, index) => {
        for (let bodyPair = index + 1; bodyPair < BODIES.length; bodyPair++) {
            let bestSat = checkColl(BODIES[index], BODIES[bodyPair]);
            if (bestSat) {
                if (collisionHandlingCondition(BODIES[index], BODIES[bodyPair])) {
                    COLLISIONS.push(new CollisionData(BODIES[index], BODIES[bodyPair], bestSat.axis, bestSat.pen, bestSat.vertex, true, true));
                }
                else COLLISIONS.push(new CollisionData(BODIES[index], BODIES[bodyPair], bestSat.axis, bestSat.pen, bestSat.vertex, false, false));

            }
        }
    });

    COLLISIONS.forEach((c) => {

        c.body1.collided(c.body2)
        c.body2.collided(c.body1)

    

        if (c.testPen) c.penRes();
        if (c.testColl) c.collRes();
    });
}