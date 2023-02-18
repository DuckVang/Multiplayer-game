import { Viewport } from "pixi-viewport";

import Body from "../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../Engine/src/Math/Vector";
import { Application, Container, Graphics, Sprite } from "pixi.js";
import { UI } from "../Game-UI/UIClass";
import { CollisionData } from "../../../Engine/src/components/Collsions/CollisionData";
import { AddControl } from "../Interactions/Movement";
import { SetCameraTo } from "./Camera/Camera";
import { Player } from "../Game-Objects/Player";
import { StartGame } from "../Game-Logic/StartGame";
import { MainLoop } from "./Loops/MainLoop";
import { MapObject } from "../Map-Object/MapObjClass";
import { Camera } from "pixi-game-camera"
import { AddSelection } from "../Interactions/Selection";
import Engine from "../../../Engine/src/Main";
import { IProjectile } from "../Game-Objects/Attack-Types/Projectile/IProjectile";


let instance: World

class World {

    engine: Engine
    app: Application

    CAMERA: Camera
    VIEWPORT: Viewport

    GAME_CONT: Container
    UI_CONT: Container
    MAP_CONT: Container

    UI_OBJECTS: UI[]
    MAP_OBJECTS: MapObject[]

    SPELL_PROJ: IProjectile[]

    player: Player

    spectate: Player
    mousePos: any
    mouserDir: Vector

    orgZoneRadius: number
    zoneRadius: number

    interval: number
    timeLeft: number

width: number
height: number


    constructor(width: number, height: number) {
        
        console.log("pog")
        if (instance)
            throw new Error("New instance cannot be created!!");

        instance = this;


        this.UI_OBJECTS = []
        this.MAP_OBJECTS = []

        this.width = width
        this.height = height
        this.engine = new Engine(1000, this.width, this.height)
        this.app = new Application({
            resizeTo: window,
             backgroundColor: 0x2980b9,

        });


        this.SPELL_PROJ = []



        document.body.appendChild(this.app.view);

        this.VIEWPORT = new Viewport({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            worldWidth: this.width,
            worldHeight: this.height,
            ticker: this.app.ticker,

            interaction: this.app.renderer.plugins.interaction
        })

        

        this.VIEWPORT
            .drag()
            .pinch()
            .wheel()
            .decelerate()



        this.app.stage.addChild(this.VIEWPORT)
        this.CAMERA = new Camera(this.VIEWPORT)

        this.UI_CONT = new Container()
        this.app.stage.addChild(this.UI_CONT)

        this.GAME_CONT = new Container()
        this.VIEWPORT.addChild(this.GAME_CONT)

        this.MAP_CONT = new Container()
        this.VIEWPORT.addChild(this.MAP_CONT)


        this.zoneRadius = 5000
        this.orgZoneRadius = this.zoneRadius
        this.interval = 10
        this.timeLeft = this.interval
        this.spectate = null


    }
    Start() {
        StartGame()
        MainLoop()
    }

    AddUIObj(obj: UI) {
        this.UI_OBJECTS.push(obj)
        this.UI_CONT.addChild(obj)

    }
    AddMapObj(obj: MapObject) {
        this.MAP_OBJECTS.push(obj)
        this.VIEWPORT.addChild(obj)
    }

    SetPlayer(player: Player) {

        this.player = player
        AddControl(player)
        AddSelection(player)
        SetCameraTo(player)
    }

}

const WORLD = new World(10000,10000)

export default WORLD