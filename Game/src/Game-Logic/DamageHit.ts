import BODIES from "../../../Engine/src/components/Models/Bodies";
import COLLISIONS from "../../../Engine/src/components/Models/Collisions";
import Body from "../../../Engine/src/components/Physical-Body/Body";
import { Player } from "../Game-Objects/Player";
import WORLD from "../World/GlobalWorld";

export function CheckHit() {


    BODIES.forEach((body) => {

        if (body instanceof Player && body.collided) {

            body.Damaged(10)
        }
        
    })

}