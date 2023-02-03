import Body from "../../../../Engine/src/components/Physical-Body/Body";
import WORLD from "../World";
import World from "../WorldClass";
export function SetCameraTo(player: Body) {

        WORLD.toFollow = player
    
}
export function FollowPlayer(){

    WORLD.VIEWPORT.moveCenter(WORLD.toFollow.pos.x, WORLD.toFollow.pos.y)
}