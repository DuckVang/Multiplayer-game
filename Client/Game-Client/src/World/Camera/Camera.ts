import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import Player from "../../Player";
import instance from "../GlobalWorld";


export function SetCameraTo(player: Player) {

    instance.spectate = player

}
export function FollowPlayer() {

    instance.VIEWPORT.moveCenter(instance.spectate.pos.x, instance.spectate.pos.y)
}