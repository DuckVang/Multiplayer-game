import { PlatformPath } from "node:path/win32";
import Body from "../../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../../Engine/src/Math/Vector";
import GAME_CLIENT from "../../../Networking/Client";
import { Player } from "../Player";
import instance, { World } from "../World/GlobalWorld";
import { INTERACTIONS_TYPES } from "../../../../Shared/Constants";

let justPressed = false;

export function WatchMouse(player: Player, instance: World) {
  //   document.addEventListener("click", HandleClick, { once: true });
  //   console.count("mouse");

  instance.app.stage.interactive = true;
  instance.app.stage.buttonMode = true;

  instance.app.stage.on("click", function (e) {

    let mouse = e.data.global;
    let mousePos = new Vector(
      mouse.x - instance.app.renderer.width / 2,
      mouse.y - instance.app.renderer.height / 2
    );
    let direction = mousePos.unit();
    if (player.alive === true) emitClick(direction);
  });

  function HandleClick() {
    document.removeEventListener("click", HandleClick);

    let mouse = instance.app.renderer.plugins.interaction.mouse.global;
    let mousePos = new Vector(
      mouse.x - instance.app.renderer.width / 2,
      mouse.y - instance.app.renderer.height / 2
    );
    let direction = mousePos.unit();

    console.log(mouse);

    if (player.alive === true) emitClick(direction);
    // player.CastSpell(direction)
    document.addEventListener("click", HandleClick, { once: true });
  }

  function emitClick(direction: Vector) {
    const command = {
      direction: direction,
      selected: player.selected,
    };

    GAME_CLIENT.emitToLobby(INTERACTIONS_TYPES.MOUSE_CLICK, { mouse: command });
    console.log(command);
  }
}

// function GetDirection(x: number, y: number) {

//     let mousePos = new Vector(x, y)
//     let direction = mousePos.subtr(WORLD.player.pos)
//     return mousePos

// }
