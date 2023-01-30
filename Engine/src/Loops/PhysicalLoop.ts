import COLLISIONS from "../components/Models/Collisions";
import BODIES from "../components/Models/Bodies";
import { CollisionData } from "../components/Collsions/CollisionData";
import { collisionHandlingCondition } from "../components/Collsions/Resolution";
import { checkCol } from "../components/Collsions/Detection";


export function PhysicsLoop(timestamp:number) {
    COLLISIONS.length = 0;
    BODIES.forEach((b) => {
        b.reposition();
    })
    
    BODIES.forEach((b, index) => {
        for(let bodyPair = index+1; bodyPair < BODIES.length; bodyPair++){
            if(collisionHandlingCondition(BODIES[index], BODIES[bodyPair])){               
                let bestSat = checkCol(BODIES[index], BODIES[bodyPair]);
                if(bestSat){
                    COLLISIONS.push(new CollisionData(BODIES[index], BODIES[bodyPair], bestSat.axis, bestSat.pen, bestSat.vertex));
                }           
            }
        }
    });

    COLLISIONS.forEach((c) => {
        c.penRes();
        c.collRes();
    });
}