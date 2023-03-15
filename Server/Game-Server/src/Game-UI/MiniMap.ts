import { Application, Container, Graphics } from "pixi.js";

import { World } from "../World/GlobalWorld";
import { UI } from "./UIClass";
export class Minimap extends UI {


    background: Graphics

    padding: number



    constructor(WORLD: World) {
        super(WORLD)
        this.padding = 10

        this.width = 500
        this.height = 500

        this.background = new Graphics();
        this.background.lineStyle(2, 0x000, 1);
        this.background.beginFill(0x650a5a, 0.55);
        this.background.drawRect(0, 0, this.width, this.height);
        console.log(this.background)
        this.background.endFill();
        this.addChild(this.background);


        this.x = 1000;
        this.y = 0 + this.padding;
        this.pivot.x = this.width + this.padding;
        this.pivot.y = 0;
        
        
        
    }
    
    update() {
        
      
        this.background.removeChildren()

        this.UpdateEntities()
        this.UpdateZone()
    }
    private UpdateEntities() {
        const BODIES = this.WORLD.engine.BODIES

        for (let i = 0; i < BODIES.length; i++) {
            const px = (BODIES[i].pos.x / this.WORLD.width) * this.width
            const py = (BODIES[i].pos.y / this.WORLD.height) * this.height
            const entity = new Graphics();
            entity.lineStyle(2, 0x000, 1);
            entity.beginFill(0xffff00, 0.25);
            entity.drawRect(0, 0, 10, 10);
            entity.endFill();
            entity.x = px;
            entity.y = py;
           
            this.background.addChild(entity);
        }

    }
    private UpdateZone() {

        const zone = new Graphics()
        zone.beginFill(0xffff00, 0.25);
        zone.drawCircle(0, 0, this.WORLD.zone.zoneRadius / this.WORLD.zone.orgZoneRadius * this.width / 2)
        zone.x = this.width / 2
        zone.y = this.height / 2
        zone.endFill
        this.background.addChild(zone)

    }

}
