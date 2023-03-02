import { Viewport } from "pixi-viewport";

import Vector from "../../../../Engine/src/Math/Vector";
import { Application, Container, Filter, filters, Graphics, Sprite } from "pixi.js";
import { UI } from "../Game-UI/UIClass";

import { AddControl } from "../Interactions/Movement";
import { SetCameraTo } from "./Camera/Camera";

import { MainLoop } from "./Loops/MainLoop";
import { MapObject } from "../Map-Object/MapObjClass";
import { Camera } from "pixi-game-camera"
import { AddSelection } from "../Interactions/Selection";


import { Zone } from "../Map-Object/Zone";
import { Timer } from "../Game-UI/Timer";
import { Minimap } from "../Game-UI/Minimap";
import { HealthBar } from "../Game-UI/HealthBar";
import { EnergyBar } from "../Game-UI/EnergyBar";
import Player from "../Player";
import { Socket } from "socket.io-client";
import client from "../../../Networking/socket";



let instance: World

export class World {

    OBJECTS: any[]

    app: Application

    CAMERA: Camera
    VIEWPORT: Viewport

    GAME_CONT: Container
    UI_CONT: Container
    MAP_CONT: Container

    UI_OBJECTS: UI[]
    MAP_OBJECTS: MapObject[]


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



    constructor() {
        
        if (instance)
        throw new Error("New instance cannot be created!!");
        
        instance = new World()

    }
    init(width: number, height: number) {


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
        if (!this.player)
            this.player = new Player()
        SetCameraTo(this.player)
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



export default instance