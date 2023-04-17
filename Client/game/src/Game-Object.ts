import { Container, Graphics, Loader, Sprite, Texture } from "pixi.js";
import { Shape } from "../../../Engine/src/components/Shapes/Shape";
import Vector, { IVector } from "../../../Engine/src/Math/Vector";
import { EFFECT_TYPES } from "../../../Shared/Constants";
import GAME_CLIENT from "../../Networking/Client";
import { Circle } from "../../../Engine/src/components/Shapes/Circle";
import { IShape } from "../../../Engine/src/components/Shapes/Shape";
export class GameObject extends Sprite {
  socketID: string;

  background: Container;

  pos: IVector;
  comp: IShape;


  alive: boolean;
  constructor(
    background: Container,
    pos: IVector = { x: 0, y: 0 },
    comp: IShape = null
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


    this.alive = true;

   
  }
  Update(comp: IShape) {
    this.comp = comp;

    this.pos = comp.pos;

    this.x = comp.pos.x;
    this.y = comp.pos.y;
  }
}

