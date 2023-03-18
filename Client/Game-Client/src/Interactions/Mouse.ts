import { Graphics, Sprite } from "pixi.js";
import { emit } from "process";
import Vector from "../../../../Engine/src/Math/Vector";
import { Constants } from "../../../Constants";
import CLIENT from "../../../Networking/socket";
import instance from "../World/GlobalWorld"

export function WatchMouse() {

    document.addEventListener("click", HandleClick);


};

export function HandleClick() {

    document.removeEventListener("click", HandleClick)

    let mouse = instance.app.renderer.plugins.interaction.mouse.global;
    let mousePos = new Vector(mouse.x - instance.app.renderer.width / 2, mouse.y - instance.app.renderer.height / 2)
    let direction = mousePos.unit()

    if (instance.player.alive !== false)
        instance.player.CastSpell(direction)


    emitClick(direction)
}
function emitClick(direction: Vector) {

    CLIENT.socket.emit(Constants.INTERACTIONS.MOUSE_CLICK, direction);
}

// function GetDirection(x: number, y: number) {

//     let mousePos = new Vector(x, y)
//     let direction = mousePos.subtr(WORLD.player.pos)
//     return mousePos

// }