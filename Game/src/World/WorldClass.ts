import { Viewport } from "pixi-viewport";
import * as PIXI from "pixi.js"
import Body from "../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../Engine/src/Math/Vector";
import { Container, Graphics, Sprite } from "pixi.js";
import { UI } from "../Game-UI/UIClass";
import { CollisionData } from "../../../Engine/src/components/Collsions/CollisionData";
import { AddControl } from "../Interactions/Movement";
import { SetCameraTo } from "./Components/Camera";
import { Player } from "../Game-Objects/Player";
import { StartGame } from "../Game-Logic/StartGame";
import { MainLoop } from "./Loops/MainLoop";
import { MapObject } from "../Map-Object/MapObjClass";
import { HandleClick, WatchMouse } from "../Interactions/Mouse";
import { extensions, Application, InteractionManager } from 'pixi.js';
import { parseArgs } from "util";
import { Camera } from "pixi-game-camera"

export default class World {

    app: PIXI.Application

    CAMERA: Camera
    VIEWPORT: Viewport

    GAME_CONT: Container
    GUI_CONT: Container
    MAP_CONT: Container

    UIOBJECTS: UI[]
    MAP_OBJECTS: MapObject[]
    BODIES: Body[]
    COLLISIONS: CollisionData[]

    INTERACTION_BG: Sprite

    player: Player

    toFollow: Body
    mousePos: any
    mouserDir: Vector

    zoneRadius: number
    interval: number
    timeLeft: number




    constructor() {

        this.UIOBJECTS = []
        this.MAP_OBJECTS = []

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
        this.CAMERA = new Camera(this.VIEWPORT)

        this.GUI_CONT = new Container()
        this.app.stage.addChild(this.GUI_CONT)

        this.GAME_CONT = new Container()
        this.VIEWPORT.addChild(this.GAME_CONT)

        this.MAP_CONT = new Container()
        this.VIEWPORT.addChild(this.MAP_CONT)



        // this.mousePos = this.app.renderer.plugins.interaction.mouse.global;


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

    AddUIObj(obj: UI) {
        this.UIOBJECTS.push(obj)
        this.GUI_CONT.addChild(obj)

    }
    AddMapObj(obj: MapObject) {
        this.MAP_OBJECTS.push(obj)
        this.VIEWPORT.addChild(obj)

    }

    SetPlayer(player: Player) {

        this.player = player
        AddControl(player)
        SetCameraTo(player)
    }





}