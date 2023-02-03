import { Application, Container, Graphics } from "pixi.js";
import BODIES from "../../../Engine/src/components/Models/Bodies";
import WORLD from "../World/Index";
import World from "../World/WorldClass";
import { UI } from "./UI";
export class Minimap extends UI {


    background: Graphics
    constructor() {
        super()

        this.background = new Graphics();
        this.background.lineStyle(2, 0x000, 1);
        this.background.beginFill(0x650a5a, 0.25);
        this.background.drawRect(0, 0, 200, 200);
        this.background.endFill();
        this.addChild(this.background);

        this.x = WORLD.app.renderer.width ;
        this.y = 0;
        this.pivot.x = this.width + 50 ;
        this.pivot.y = 0 - 50  ;

        WORLD.UIOBJECTS.push(this)
    
     

    }

    update() {
       
        this.removeChildren()
        this.background.lineStyle(2, 0x000, 1);
        this.background.beginFill(0x650a5a, 0.25);
        this.background.drawRect(0, 0, 200, 200);
        this.background.endFill();
        this.addChild(this.background);
        for (let i = 0; i < BODIES.length; i += 1) {
            const px = BODIES[i].pos.x / WORLD.GAMECONT.width * 200 + this.width/2 
                
            
            const py = BODIES[i].pos.y / WORLD.GAMECONT.height * 200 + this.height/2;
            const entity = new Graphics();
            entity.lineStyle(2, 0x000, 1);
            entity.beginFill(0xffff00, 0.25);
            entity.drawRect(0, 0, 10, 10);
            entity.endFill();
            entity.x = px;
            entity.y = py;
            this.addChild(entity);
        }
        console.log(this.children.length);
    }
}
