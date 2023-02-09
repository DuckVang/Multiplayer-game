import { Application, Container, DisplayObject, Graphics } from "pixi.js";
import BODIES from "../../../Engine/src/components/Models/Bodies";
import WORLD from "../World/GlobalWorld";
import { UI } from "./UIClass";
export class EnergyBar extends UI {


    current: number
    barWidth: number
    bar: Graphics

    constructor() {
        super()
        this.x = 10
        this.y = 20

        this.barWidth = 120
        //Create the black background rectangle
        const innerBar = new Graphics();
        innerBar.beginFill(0xEEEEE, 0.25);
        innerBar.drawRect(0, 0, this.barWidth, 8);
        innerBar.endFill();
        this.addChild(innerBar);

        //Create the front red rectangle
        const outerBar = new Graphics();
        outerBar.beginFill(0xEEEEE);
        outerBar.drawRect(0, 0, this.barWidth, 8);
        outerBar.endFill();
        this.addChild(outerBar);

        this.bar = outerBar

    }
    update() {

        const player = WORLD.player
        this.bar.width = player.energy / player.maxEnergy * this.barWidth



    }
}
