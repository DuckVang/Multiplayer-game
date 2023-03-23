import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../../../Engine/src/Math/Vector";
import { Player } from "../../Player";
import instance from "../GlobalWorld";



export function SetCameraTo(player: Player) {

    instance.spectate = player

}
export function Follow(pos: { x: number, y: number }) {

    instance.VIEWPORT.moveCenter(pos.x, pos.y)
}