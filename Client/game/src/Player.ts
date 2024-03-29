import { Container, Graphics, Loader, Sprite, Texture } from "pixi.js";
import { Shape } from "../../../Engine/src/components/Shapes/Shape";
import Vector, { IVector } from "../../../Engine/src/Math/Vector";
import { EFFECT_TYPES } from "../../../Shared/Constants";
import GAME_CLIENT from "../../Networking/Client";
import { Circle } from "../../../Engine/src/components/Shapes/Circle";

export class Player extends Sprite {
  socketID: string;

  background: Container;

  pos: IVector;
  comp: Circle;

  health: number;
  energy: any;
  maxEnergy: any;
  maxHealth: number;

  alive: boolean;
  constructor(
    socketID: string,
    background: Container,
    pos: IVector = { x: 0, y: 0 },
    comp: Circle = null
  ) {
    // const texture = Texture.from("../../static/black_mage.png");

    const texture = Texture.from(
      "https://art.pixilart.com/531cda6a620500b.png"
    );

    super(texture);

    this.scale.set(0.05, 0.05);
    this.background = background;
    this.background.addChild(this);

    this.anchor.set(0.5);

    this.pos = pos;
    this.comp = comp;

    this.maxHealth = 100;
    this.health = this.maxHealth;
    this.maxEnergy = 100;
    this.energy = this.maxEnergy;

    this.alive = true;

    this.socketID = socketID;
  }
  Update(comp: Circle) {
    this.comp = comp;

    this.pos = comp.pos;

    this.x = comp.pos.x;
    this.y = comp.pos.y;
  }
}

export class MainPlayer extends Player {
  selected: number;
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;

  constructor(
    socketID: string,
    background: Container,
    pos: IVector = { x: 0, y: 0 },
    comp: Circle = null
  ) {
    super(socketID, background, pos, comp);

    this.selected = 0;

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
  }
  CastSpell(direction: Vector) {}
}
