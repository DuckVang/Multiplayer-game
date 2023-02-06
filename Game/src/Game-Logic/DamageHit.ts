import COLLISIONS from "../../../Engine/src/components/Models/Collisions";
import Body from "../../../Engine/src/components/Physical-Body/Body";
import { Player } from "../Game-Objects/Player";
import WORLD from "../World/World";

export function CheckHit() {


    COLLISIONS.forEach((coll) => {

        if (coll.body1 instanceof Player) {

            coll.body1.Damaged(10)
        }
        if (coll.body2 instanceof Player) {

            coll.body2.Damaged(10)
        }
        
    })

}