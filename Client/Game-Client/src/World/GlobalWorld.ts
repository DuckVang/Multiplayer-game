import { Viewport } from "pixi-viewport";

import Vector from "../../../../Engine/src/Math/Vector";
import { Application, Container, Graphics } from "pixi.js";
import { UI } from "../Game-UI/UIClass";

import { AddControl } from "../Interactions/Movement";

import { MainLoop } from "./Loops/MainLoop";
import { MapObject } from "../Map-Object/MapObjClass";
import { Camera } from "pixi-game-camera";


import { Zone } from "../Map-Object/Zone";
import { Timer } from "../Game-UI/Timer";
import { HealthBar } from "../Game-UI/HealthBar";
import { EnergyBar } from "../Game-UI/EnergyBar";
import { PLAYER, Player } from "../Player";
import CLIENT from "../../../Networking/socket";



let instance: World

export class World {

    OBJECTS: any[]
    PLAYERS: Player[]

    app: Application

    CAMERA: Camera
    VIEWPORT: Viewport

    GAME_CONT: Container
    UI_CONT: Container
    MAP_CONT: Container

    UI_OBJECTS: UI[]
    MAP_OBJECTS: MapObject[]

    BACKGROUND: Graphics

    player: Player

    spectate: Player
    mousePos: any
    mouserDir: Vector


    zone: Zone
    timer: Timer

    interval: number
    timeLeft: number

    width: number
    height: number

    playerID: string

    constructor() {


    }
    init(width: number, height: number) {


        this.playerID = CLIENT.socket.id

        this.PLAYERS = []
        this.OBJECTS = []
        this.UI_OBJECTS = []
        this.MAP_OBJECTS = []

        this.width = width
        this.height = height

        this.app = new Application({
            resizeTo: window,
            backgroundColor: 0xDC980,
            backgroundAlpha: 0.5,



        });






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



        this.VIEWPORT.sortableChildren = true



        this.app.stage.addChild(this.VIEWPORT)
        this.CAMERA = new Camera(this.VIEWPORT)

        this.UI_CONT = new Container()
        this.app.stage.addChild(this.UI_CONT)
        this.UI_CONT.zIndex = 2

        this.GAME_CONT = new Container()
        this.GAME_CONT.zIndex = 0


        this.VIEWPORT.addChild(this.GAME_CONT)

        this.MAP_CONT = new Container()
        this.VIEWPORT.addChild(this.MAP_CONT)
        this.MAP_CONT.zIndex = -1


        this.zone = new Zone(this.width / 2, this.height / 2, 5000)
        this.AddMapObj(this.zone)


        this.BACKGROUND = new Graphics()
        this.VIEWPORT.addChild(this.BACKGROUND)


    }

    Start() {

        MainLoop()
    }

    updateObjects(data: any) {
        this.OBJECTS = data
    }
    updatePlayer(data: any) {
        this.player.comp = data.comp
        this.player.health = data.health
    }
    createPlayer() {

        CLIENT.socket.emit("createPlayer")

        AddControl(PLAYER)


        console.log("player created")
    }

    AddUIObj(obj: UI) {
        this.UI_OBJECTS.push(obj)
        this.UI_CONT.addChild(obj)

    }
    AddMapObj(obj: MapObject) {
        this.MAP_OBJECTS.push(obj)
        this.VIEWPORT.addChild(obj)
    }

    initUI() {

        this.AddUIObj(new HealthBar(this))
        this.AddUIObj(new EnergyBar(this))

        // this.AddUIObj(new Minimap(this))

        this.timer = new Timer(this)
        this.AddUIObj(this.timer)

    }

}

instance = new World()
instance.init(10000, 10000)

export default instance