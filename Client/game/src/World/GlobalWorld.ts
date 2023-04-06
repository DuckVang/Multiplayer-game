import { Viewport } from "pixi-viewport";

import Vector from "../../../../Engine/src/Math/Vector";
import {
  Application,
  Container,
  Graphics,
  InteractionManager,
  Rectangle,
  Renderer,
} from "pixi.js";
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
import GAME_CLIENT from "../../../Networking/Client";
import { WatchMouse } from "../Interactions/Mouse";
import { MSG_TYPES } from "../../../../Shared/Constants";

let instance: World;

export class World {
  OBJECTS: any[];
  PLAYERS: Player[];

  app: Application;
  renderer: Renderer;

  CAMERA: Camera;

  GAME_CONT: Container;
  UI_CONT: Container;
  MAP_CONT: Container;

  UI_OBJECTS: UI[];
  MAP_OBJECTS: MapObject[];

  BACKGROUND: Graphics;

  player: Player;

  spectate: Player;
  mousePos: any;
  mouserDir: Vector;

  zone: Zone;
  timer: Timer;

  interval: number;
  timeLeft: number;

  width: number;
  height: number;

  playerID: string;

  interactionManager: InteractionManager;
  constructor(width: number, height: number) {
    this.app = new Application({
      resizeTo: window,
      backgroundColor: 0xdc980,
      backgroundAlpha: 0.5,
    });
    // this.app.stage.interactive = true;
    // this.app.stage.hitArea = new Rectangle(0, 0, width, height);

    const appNode = document.getElementById("pixi-app");
    appNode.appendChild(this.app.view);

    this.interactionManager = new InteractionManager(this.app.renderer);

    this.PLAYERS = [];
    this.OBJECTS = [];
    this.UI_OBJECTS = [];
    this.MAP_OBJECTS = [];

    this.width = width;
    this.height = height;

    this.app.stage.sortableChildren = true;

    this.CAMERA = new Camera(this.app.stage);

    this.UI_CONT = new Container();
    this.app.stage.addChild(this.UI_CONT);
    this.UI_CONT.zIndex = 2;

    this.GAME_CONT = new Container();
    this.GAME_CONT.zIndex = 0;

    this.app.stage.addChild(this.GAME_CONT);

    this.MAP_CONT = new Container();
    this.app.stage.addChild(this.MAP_CONT);
    this.MAP_CONT.zIndex = -1;

    this.zone = new Zone(this.width / 2, this.height / 2, 5000);
    this.AddMapObj(this.zone);

    this.BACKGROUND = new Graphics();
    this.app.stage.addChild(this.BACKGROUND);
  }

  StartLoop() {
    MainLoop(this);
  }

  updateObjects(data: any) {
    this.OBJECTS = data;
  }
  updatePlayer(data: any) {
    this.player.comp = data.comp;
    this.player.health = data.health;
  }
  createPlayer() {
    this.playerID = GAME_CLIENT.socket.id;
    GAME_CLIENT.emitToLobby(MSG_TYPES.CREATE_PLAYER);

    AddControl(PLAYER);
    WatchMouse(PLAYER, this);

    console.log("player created");
  }

  AddUIObj(obj: UI) {
    this.UI_OBJECTS.push(obj);
    this.UI_CONT.addChild(obj);
  }
  AddMapObj(obj: MapObject) {
    this.MAP_OBJECTS.push(obj);
    this.app.stage.addChild(obj);
  }

  initUI() {
    this.AddUIObj(new HealthBar(this));
    this.AddUIObj(new EnergyBar(this));

    // this.AddUIObj(new Minimap(this))

    this.timer = new Timer(this);
    this.AddUIObj(this.timer);
  }
}

// instance = new World();
// instance.init(10000, 10000);

export default World;
