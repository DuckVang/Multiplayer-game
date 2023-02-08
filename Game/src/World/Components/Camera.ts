import Body from "../../../../Engine/src/components/Physical-Body/Body";
import WORLD from "../World";
import World from "../WorldClass";
export function SetCameraTo(player: Body) {

    WORLD.spectate = player

}
export function FollowPlayer() {

    WORLD.VIEWPORT.moveCenter(WORLD.spectate.pos.x, WORLD.spectate.pos.y)
}