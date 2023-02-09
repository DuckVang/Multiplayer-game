import Body from "../../../../Engine/src/components/Physical-Body/Body";
import WORLD from "../GlobalWorld";
import World from "../GlobalWorld";
export function SetCameraTo(player: Body) {

    WORLD.spectate = player

}
export function FollowPlayer() {

    WORLD.VIEWPORT.moveCenter(WORLD.spectate.pos.x, WORLD.spectate.pos.y)
}