import { Graphics, Sprite } from "pixi.js";
import Vector from "../../../Engine/src/Math/Vector";
import { Projectile } from "../Game-Objects/BallProjectile";
import WORLD from "../World/World"

export function WatchMouse() {

    document.addEventListener("click", HandleClick);


};

export function HandleClick() {

    document.removeEventListener("click", HandleClick)
    console.log("pog")
    let mouse = WORLD.app.renderer.plugins.interaction.mouse.global;
    let mousePos = new Vector(mouse.x - WORLD.app.renderer.width / 2, mouse.y - WORLD.app.renderer.height / 2)
    let direction = mousePos.unit()
    console.log(direction)
    WORLD.player.CastSpell(direction)
}

// function GetDirection(x: number, y: number) {

//     let mousePos = new Vector(x, y)
//     let direction = mousePos.subtr(WORLD.player.pos)
//     return mousePos

// }