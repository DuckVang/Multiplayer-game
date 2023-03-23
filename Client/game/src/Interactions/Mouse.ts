import { PlatformPath } from "node:path/win32";
import Body from "../../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../../Engine/src/Math/Vector";
import { Constants } from "../../../../Shared/Constants";
import CLIENT from "../../Networking/socket";
import { Player } from "../Player";
import instance from "../World/GlobalWorld";

let justPressed = false;


export function WatchMouse(player: Player) {

    document.addEventListener("click", HandleClick, { once: true });
    console.count("mouse")

    function HandleClick() {

        document.removeEventListener("click", HandleClick)

        let mouse = instance.app.renderer.plugins.interaction.mouse.global;
        let mousePos = new Vector(mouse.x - instance.app.renderer.width / 2, mouse.y - instance.app.renderer.height / 2)
        let direction = mousePos.unit()

        if (player.alive === true)
            emitClick(direction)
        // player.CastSpell(direction)
        document.addEventListener("click", HandleClick, { once: true });

    }

    function emitClick(direction: Vector) {

        const command = {

            direction: direction,
            selected: player.selected
        }

        CLIENT.socket.emit(Constants.INTERACTIONS.MOUSE_CLICK, command);
        console.log(command)
    }
};


// function GetDirection(x: number, y: number) {

//     let mousePos = new Vector(x, y)
//     let direction = mousePos.subtr(WORLD.player.pos)
//     return mousePos

// }