import { Viewport } from "pixi-viewport";
import * as PIXI from "pixi.js"
import { PhysicsLoop } from "../../../Engine/src/Loops/PhysicalLoop";
import { RenderBodiesLoop } from "./Loops/RenderLoop";
import { UserInputs } from "./Loops/UserInputs";
import Body from "../../../Engine/src/components/Physical-Body/Body";
import { GetMouseDirection } from "../Interactions/MouseDirection";
import Vector from "../../../Engine/src/Math/Vector";
import { Container } from "pixi.js";
import { UI } from "../Game-UI/UIClass";
import { CollisionData } from "../../../Engine/src/components/Collsions/CollisionData";
import { UserMove } from "../Interactions/Movement";
import { UILoop } from "./Loops/UpdateUI";
import { Minimap } from "../Game-UI/Minimap";
export default class World {

    app: PIXI.Application
    VIEWPORT: Viewport
    GAMECONT: Container
    GUICONT: Container

    UIOBJECTS: UI[]
    BODIES: Body[]
    COLLISIONS: CollisionData[]


    follow: Body
    mousePos: any
    mouserDir: Vector




    constructor() {

        this.UIOBJECTS = []

        this.app = new PIXI.Application({
            resizeTo: window,
            // backgroundColor: 0x2980b9,

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

        this.app.stage.addChild(this.VIEWPORT)

        this.GUICONT = new Container()
        this.app.stage.addChild(this.GUICONT)

        this.GAMECONT = new Container()
        this.VIEWPORT.addChild(this.GAMECONT)


        this.mousePos = this.app.renderer.plugins.interaction.mouse.global;

        this.VIEWPORT
            .drag()
            .pinch()
            .wheel()
            .decelerate()





    }
    Loop() {
        // this.VIEWPORT.follow(this.follow.graphics, {speed:10, })

        console.time()
        console.timeLog()
        this.mouserDir = GetMouseDirection(this.follow, this.mousePos.x, this.mousePos.y).add(this.follow.pos)

        this.Follow()

        UILoop()

        UserInputs()
        PhysicsLoop(10)
        RenderBodiesLoop()

        console.timeEnd()
        requestAnimationFrame(() => this.Loop())

    }

    AddUIobj(obj: UI){
        this.UIOBJECTS.push(obj)
        this.GUICONT.addChild(obj)

    }

    SetPlayer(body: Body) {

        UserMove(body)
        this.SetViewPointTo(body)
    }

    SetViewPointTo(body: Body) {
        this.follow = body
    }

    private Follow() {
        this.VIEWPORT.moveCenter(this.follow.pos.x, this.follow.pos.y)
    }
  

}