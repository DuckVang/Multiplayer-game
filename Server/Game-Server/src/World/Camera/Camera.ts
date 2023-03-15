import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import { Player } from "../../Game-Objects/Player";
import WORLD from "../GlobalWorld";


export function SetCameraTo(player: Player) {

    WORLD.spectate = player

}
export function FollowPlayer() {

    WORLD.VIEWPORT.moveCenter(WORLD.spectate.pos.x, WORLD.spectate.pos.y)
}