import { Graphics } from "pixi.js";
import WORLD from "../World/GlobalWorld";
import { MapObject } from "./MapObjClass";

export class Zone extends MapObject{


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

