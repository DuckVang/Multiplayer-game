import COLLISIONS from "../components/Models/Collisions";
import BODIES from "../components/Models/Bodies";
import { CollisionData } from "../components/Collsions/CollisionData";
import { checkColl, collisionHandlingCondition } from "../components/Collsions/Detection";


export function PhysicsLoop(timestamp: number) {
    COLLISIONS.length = 0;
    BODIES.forEach((b) => {
        b.reposition();
        b.collided = false
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
        c.body1.collided = true
        c.body2.collided = true
        
        if(c.doPen)c.penRes();
        if(c.doColl)c.collRes();
    });
}