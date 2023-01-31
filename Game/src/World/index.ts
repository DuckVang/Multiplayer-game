import { Viewport } from "pixi-viewport";
import * as PIXI from "pixi.js"

class World {

    app: PIXI.Application
    viewport: Viewport
    constructor() {

        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);

        this.viewport = new Viewport({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            worldWidth: 1000,
            worldHeight: 1000,
        
            interaction: this.app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
        })

        this.app.stage.addChild(this.viewport)



    }

}