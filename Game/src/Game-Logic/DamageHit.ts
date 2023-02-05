import COLLISIONS from "../../../Engine/src/components/Models/Collisions";
import { Player } from "../Game-Objects/Player";
import WORLD from "../World/World";

export function CheckHit(){


    COLLISIONS.forEach((coll) =>{

        if(coll.body1 instanceof Player || coll.body2 instanceof Player){

            WORLD.player.Damaged(10)
        }
    })
}