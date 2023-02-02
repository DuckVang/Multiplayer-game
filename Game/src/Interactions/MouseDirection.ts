import Vector from "../../../Engine/src/Math/Vector";
import Body from "../../../Engine/src/components/Physical-Body/Body";

export function GetMouseDirection(player: Body,x: number, y: number) {

    let mousePos = new Vector(x,y)
    let direction = mousePos.subtr(player.pos)
    return direction

}