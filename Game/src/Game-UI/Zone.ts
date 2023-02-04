import { Application, Container, Graphics } from "pixi.js";
import BODIES from "../../../Engine/src/components/Models/Bodies";
import WORLD from "../World/World";
import { UI } from "./UIClass";
export class Zone extends UI {


    background: Graphics
    constructor() {
        super()

        this.background = new Graphics()
        this.background.beginFill(0x00005a, 0.55);
        this.background.drawCircle(0, 0, WORLD.zoneRadius);
        this.background.endFill();
        this.addChild(this.background);

        this.x = 0;
        this.y = 0;
        this.pivot.x = 0  ;
        this.pivot.y = 0  ;
    
    }

    update() {
       

        this.background.clear()
        this.background.beginFill(0x00005a, 0.55);
        this.background.drawCircle(0, 0, WORLD.zoneRadius);
       
    }
}
