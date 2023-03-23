import { Graphics } from "pixi.js";
import Vector from "../../../../Engine/src/Math/Vector";
import instance from "../World/GlobalWorld";
import { MapObject } from "./MapObjClass";

export class Zone extends MapObject {

    pos: Vector

    background: Graphics
    orgZoneRadius: number
    zoneRadius: number
    constructor(x: number, y: number, zoneRadius: number) {
        super()
        this.zoneRadius = zoneRadius
        this.orgZoneRadius = this.zoneRadius

        this.background = new Graphics()
     
        this.addChild(this.background);

        this.pos = new Vector(x, y)
        this.x = this.pos.x;
        this.y = this.pos.y;
        this.pivot.x = 0;
        this.pivot.y = 0;


        this.zIndex = -10
    }

    update() {


        this.background.clear()
        this.background.beginFill(0x00000, 1);
        this.background.drawCircle(0, 0, this.zoneRadius);
        this.zIndex = -10

    }
}

