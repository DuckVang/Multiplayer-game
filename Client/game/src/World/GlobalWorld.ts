import { Viewport } from "pixi-viewport";

import Vector, { IVector } from "../../../../Engine/src/Math/Vector";
import {
  Application,
  Container,
  Graphics,
  InteractionManager,
  Renderer,
  Sprite,
  TilingSprite,
} from "pixi.js";
import { UI } from "../Game-UI/UIClass";

import { AddControl } from "../Interactions/Movement";

import { MainLoop } from "./Loops";
import { MapObject } from "../Map-Object/MapObjClass";
import { Camera } from "pixi-game-camera";

import { Zone } from "../Map-Object/Zone";

// import { HealthBar } from "../Game-UI/HealthBar";
// import { EnergyBar } from "../Game-UI/EnergyBar";
import { MainPlayer, Player } from "../Player";
import GAME_CLIENT from "../../../Networking/Client";
import { WatchMouse } from "../Interactions/Mouse";
import { MSG_TYPES } from "../../../../Shared/Constants";
import { Texture } from "pixi.js";
import { IShape, Shape } from "../../../../Engine/src/components/Shapes/Shape";
import { Circle } from "../../../../Engine/src/components/Shapes/Circle";
import { GameObject } from "../Game-Object";
import { HealthBar } from "../Game-UI/HealthBar";

let instance: World;

export class World {
  OBJECTS: { [key: string]: GameObject };
  PLAYERS: { [key: string]: Player };

  MAIN_PLAYER: MainPlayer;

  app: Application;
  renderer: Renderer;

  CAMERA: Camera;

  GAME_CONT: Container;
  UI_CONT: Container;
  MAP_CONT: Container;

  UI_OBJECTS: UI[];
  MAP_OBJECTS: MapObject[];

  BACKGROUND: Container;

  spectate: MainPlayer;
  mousePos: any;
  mouserDir: Vector;

  zone: Zone;

  interval: number;
  timeLeft: number;

  width: number;
  height: number;

  mainPlayerID: string;

  interactionManager: InteractionManager;
  constructor(width: number, height: number) {
    this.app = new Application({
      resizeTo: window,
    });

    const appNode = document.getElementById("pixi-app");
    if (appNode) appNode.appendChild(this.app.view);

    this.interactionManager = new InteractionManager(this.app.renderer);

    this.PLAYERS = {};
    this.OBJECTS = {};
    this.UI_OBJECTS = [];
    this.MAP_OBJECTS = [];

    this.width = width;
    this.height = height;

    this.app.stage.sortableChildren = true;

    this.BACKGROUND = new Container();
    this.BACKGROUND.zIndex = 0;
    this.BACKGROUND.sortableChildren = true;
    this.app.stage.addChild(this.BACKGROUND);

    // this.CAMERA = new Camera(this.app.stage);

    this.UI_CONT = new Container();
    this.UI_CONT.sortableChildren = true;
    this.app.stage.addChild(this.UI_CONT);
    this.UI_CONT.zIndex = 2;

    // this.GAME_CONT = new Container();
    // this.GAME_CONT.zIndex = 0;

    // this.app.stage.addChild(this.GAME_CONT);

    this.MAP_CONT = new Container();
    this.app.stage.addChild(this.MAP_CONT);
    this.MAP_CONT.zIndex = 1;

    this.zone = new Zone(this.width / 2, this.height / 2, 5000);
    // this.MAP_CONT.addChild(this.zone);
    this.AddMapObj(this.zone);

    this.app.stage.addChild(this.MAP_CONT);
    this.BACKGROUND.addChild(this.zone);
    let map = new TilingSprite(
      Texture.from(
        "https://64.media.tumblr.com/5310eb96570ee4e51acae3ae0f57fd2e/9e54f617e5091267-f4/s540x810/cac009e7c086af567dc76a7690b8c4731d3b70d9.png"
      ),
      this.width,
      this.height
    );
    map.zIndex = -10;

    this.BACKGROUND.addChild(map);

    this.initUI();
  }

  StartLoop() {
    MainLoop(this);
    console.log(this.MAIN_PLAYER.pos);
  }

  UpdateObjects(data: any) {
    this.OBJECTS = data;
  }
  UpdatePLayer(socketID: string, data: { comp: Circle; health: number }) {
    this.PLAYERS[socketID].comp = data.comp;
    this.PLAYERS[socketID].health = data.health;
  }
  UpdateMainPlayer(data: { comp: Circle; health: number }) {
    this.MAIN_PLAYER.comp = data.comp;
    this.MAIN_PLAYER.health = data.health;
  }
  CreateMainPlayer() {
    console.log(GAME_CLIENT);
    console.log(GAME_CLIENT.socket.id);

    this.mainPlayerID = GAME_CLIENT.socket.id;
    GAME_CLIENT.emitToLobby(MSG_TYPES.CREATE_PLAYER);
    this.MAIN_PLAYER = new MainPlayer(this.mainPlayerID, this.BACKGROUND);

    AddControl(this.MAIN_PLAYER);
    WatchMouse(this.MAIN_PLAYER, this);

    console.log("main player created");
  }
  CreatePlayer(socketID: string) {
    this.PLAYERS[socketID] = new Player(socketID, this.BACKGROUND);
  }

  AddUIObj(obj: UI) {
    this.UI_OBJECTS.push(obj);
    this.UI_CONT.addChild(obj);
  }
  AddMapObj(obj: MapObject) {
    this.MAP_OBJECTS.push(obj);
    this.MAP_CONT.addChild(obj);
  }
  repositionUI() {
    this.MAP_OBJECTS.forEach((element) => {
      element.position = this.app.stage.position;
    });
  }
  initUI() {
    this.AddUIObj(new HealthBar(this));
    this.MAP_CONT.addChild(new HealthBar(this));
    // this.AddUIObj(new EnergyBar(this));

    // this.AddUIObj(new Minimap(this))

    //  this.timer = new Timer(this);
    //   this.AddUIObj(this.timer);
  }
}

// instance = new World();
// instance.init(10000, 10000);

export default World;
