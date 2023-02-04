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
import { FollowPlayer, SetCameraTo } from "./Components/Camera";
import { Player } from "../Game-Objects/Player";
import { StartGame } from "../Game-Logic/StartGame";
import { MainLoop } from "./Loops/MainLoop";
import { MapObject } from "../Map-Object/MapObjClass";
export default class World {

    app: PIXI.Application

    VIEWPORT: Viewport

    GAMECONT: Container
    GUICONT: Container
    MAPCONT: Container

    UIOBJECTS: UI[]
    MAPOBJECTS: MapObject[]
    BODIES: Body[]
    COLLISIONS: CollisionData[]


    player: Player

    toFollow: Body
    mousePos: any
    mouserDir: Vector

    zoneRadius: number
    interval: number
    timeLeft: number




    constructor() {

        this.UIOBJECTS = []
        this.MAPOBJECTS = []

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

        this.MAPCONT = new Container()
        this.VIEWPORT.addChild(this.MAPCONT)


        this.mousePos = this.app.renderer.plugins.interaction.mouse.global;

        this.VIEWPORT
            .drag()
            .pinch()
            .wheel()
            .decelerate()


        this.zoneRadius = 5000
        this.interval = 10
        this.timeLeft = this.interval


    }
    Start() {
        StartGame()
        MainLoop()


    }
    // Loop() {
    //     // this.VIEWPORT.follow(this.follow.graphics, {speed:10, })

    //     console.time()
    //     console.timeLog()
    //     // this.mouserDir = GetMouseDirection(this.follow, this.mousePos.x, this.mousePos.y).add(this.follow.pos)

    //     FollowPlayer()
    //     UILoop()

    //     UserInputs()
    //     PhysicsLoop(10)
    //     RenderBodiesLoop()

    //     console.timeEnd()

    //     requestAnimationFrame(() => this.Loop())

    // }

    AddUIObj(obj: UI) {
        this.UIOBJECTS.push(obj)
        this.GUICONT.addChild(obj)

    }
    AddMapObj(obj: MapObject) {
        this.MAPOBJECTS.push(obj)
        this.VIEWPORT.addChild(obj)

    }

    SetPlayer(player: Player) {

        this.player = player
        UserMove(player)
        SetCameraTo(player)
    }





}