import { Graphics, Sprite } from "pixi.js";
import Vector from "../../../Engine/src/Math/Vector";
import WORLD from "../World/World"

export function WatchMouse() {

    document.addEventListener("click", () => HandleClick())

};

export function HandleClick() {

    let mousePos = WORLD.app.renderer.plugins.interaction.mouse.global;
    let dir = GetDirection(mousePos.x, mousePos.y)
    console.log(dir)
    WORLD.player.CastSpell()
}

function GetDirection(x: number, y: number) {

    let mousePos = new Vector(x, y)
    let direction = mousePos.subtr(WORLD.player.pos).unit()
    return direction

}