import { Viewport } from "pixi-viewport";
import * as PIXI from "pixi.js"
import { PhysicsLoop } from "../../../Engine/src/Loops/PhysicalLoop";
import { RenderLoop } from "../Loops/RenderLoop";
import { UserInputs } from "../Loops/UserInputs";

export class World {

    app: PIXI.Application
    VIEWPORT: Viewport
    constructor() {

        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);

        this.VIEWPORT = new Viewport({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            worldWidth: 1000,
            worldHeight: 1000,

            interaction: this.app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
        })
        
        this.app.stage.addChild(this.VIEWPORT)
        
        this.VIEWPORT
            .drag()
            .pinch()
            .wheel()
            .decelerate()


    }
    Loop() {
        UserInputs()
        PhysicsLoop(10)
         RenderLoop(this.VIEWPORT)
     

       requestAnimationFrame(() => this.Loop())

    }

}