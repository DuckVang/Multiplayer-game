import { Application, Container, Graphics } from "pixi.js";
import BODIES from "../../../Engine/src/components/Models/Bodies";
import WORLD from "../World/World";
import World from "../World/WorldClass";
import { UI } from "./UIClass";
export class Minimap extends UI {


    background: Graphics

    

    constructor() {
        super()

        this.background = new Graphics();
        this.background.lineStyle(2, 0x000, 1);
        this.background.beginFill(0x650a5a, 0.55);
        this.background.drawRect(0, 0, 250, 250);
        this.background.endFill();
        this.addChild(this.background);

        this.x = WORLD.app.renderer.width ;
        this.y = 0;
        this.pivot.x = this.width  ;
        this.pivot.y = 0  ;

        
    
    }

    update() {
       
        this.background.removeChildren()
     
        this.UpdateEntities()
        this.UpdateZone()
    }
    private UpdateEntities(){
        for (let i = 0; i < BODIES.length; i += 1) {
            const px = BODIES[i].pos.x / WORLD.GAME_CONT.width * 200 + this.width/2 
            const py = BODIES[i].pos.y / WORLD.GAME_CONT.height * 200 + this.height/2;
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
    private UpdateZone(){

        const zone = new Graphics()
        zone.beginFill(0xffff00, 0.25);
        zone.drawCircle(0,0,WORLD.zoneRadius/WORLD.orgZoneRadius * this.width/2)
        zone.x = this.width/2
        zone.y = this.height/2
        zone.endFill
        this.background.addChild(zone)

    }
    
}
