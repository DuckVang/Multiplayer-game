import { Container, Graphics } from "pixi.js";
import Vector from "../../../../Engine/src/Math/Vector";
import instance from "../World/GlobalWorld";
import { MapObject } from "./MapObjClass";

export class Zone extends MapObject {
  orgZoneRadius: number;
  zoneRadius: number;

  constructor(x: number, y: number, zoneRadius: number) {
    super();

    this.beginFill(0x0000EE, 0.2);
    this.drawCircle(x, y, zoneRadius);
    this.endFill();


    this.zoneRadius = zoneRadius;
    this.orgZoneRadius = this.zoneRadius;

 

  }

  update() {

    
  }
}
