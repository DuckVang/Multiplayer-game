import { Viewport } from "pixi-viewport";
import * as PIXI from "pixi.js"
import { PhysicsLoop } from "../../../Engine/src/Loops/PhysicalLoop";
import { RenderLoop } from "../Loops/RenderLoop";
import { UserInputs } from "../Loops/UserInputs";
import Body from "../../../Engine/src/components/Physical-Body/Body";
import * as bodyParser from "body-parser";
import { GetMouseDirection } from "../Interactions/MouseDirection";
import Vector from "../../../Engine/src/Math/Vector";
import { Container } from "pixi.js";
export class World {

    app: PIXI.Application
    VIEWPORT: Viewport
    GAMECONT: Container
    GUICONT: Container

    follow: Body
    mousePos: any
    mouserDir: Vector

    constructor() {

        this.app = new PIXI.Application({
            resizeTo: window,
            backgroundColor: 0x2980b9,

        });


        document.body.appendChild(this.app.view);

        this.VIEWPORT = new Viewport({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            worldWidth: 50000,
            worldHeight: 50000,
            ticker: this.app.ticker,

            interaction: this.app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
        })

        this.GAMECONT= new Container()
        this.GUICONT = new Container()

        this.VIEWPORT.addChild(this.GAMECONT)
        this.VIEWPORT.addChild(this.GUICONT)

        this.app.stage.addChild(this.VIEWPORT)

        this.mousePos = this.app.renderer.plugins.interaction.mouse.global;

        this.VIEWPORT
            .drag()
            .pinch()
            .wheel()
            .decelerate()


    }
    Loop() {
        // this.VIEWPORT.follow(this.follow.graphics, {speed:10, })

        this.mouserDir = GetMouseDirection(this.follow, this.mousePos.x, this.mousePos.y).add(this.follow.pos)
        console.log(this.mouserDir)
        this.Follow()

        UserInputs()
        PhysicsLoop(10)
        RenderLoop(this.GAMECONT)
        
        requestAnimationFrame(() => this.Loop())

    }



    SetViewPointTo(body: Body) {
        this.follow = body
    }
    Follow() {
        this.VIEWPORT.moveCenter(this.follow.pos.x, this.follow.pos.y)
    }

}