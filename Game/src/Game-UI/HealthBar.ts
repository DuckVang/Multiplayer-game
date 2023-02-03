import { Application, Container, Graphics } from "pixi.js";
import BODIES from "../../../Engine/src/components/Models/Bodies";
import WORLD from "../World/World";
import { UI } from "./UIClass";
export class HealthBar extends UI {


    background: Graphics
    constructor() {
        super()

        this.background = new Graphics();
        this.background.lineStyle(2, 0x000, 1);
        this.background.beginFill(0x650a5a, 0.55);
        this.background.drawRect(0, 0, 150, 40);
        this.background.endFill();
        this.addChild(this.background);

        this.x = 0;
        this.y = 0;
        this.pivot.x = 0  ;
        this.pivot.y = 0  ;    
     
    }

    update() {
       
        this.background.removeChildren()
     
        
    }
}
