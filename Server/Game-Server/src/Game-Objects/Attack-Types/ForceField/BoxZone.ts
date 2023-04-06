import { Graphics } from "pixi.js";
import { Box } from "../../../../../../Engine/src/components/Physical-Body/Box";
import Vector from "../../../../../../Engine/src/Math/Vector";
import { Spell } from "../../../Game-Logic/Spells/SpellClass";

import { ISpellZone } from "./ISpellZone";
import Body from "../../../../../../Engine/src/components/Physical-Body/Body";
import GAME_SERVER from "../../../../../Networking";
import { IGameBody } from "../../IGameBody";
import Lobby from "../../../../../Networking/lobby";

export class BoxZone extends Box implements ISpellZone {
  spell: Spell;
  center: Vector;
  power: number;

  gap: number;
  socketID: string;
  lobby: Lobby;
  constructor(
    socketID: string,
    lobby: Lobby,
    dir: Vector,
    pos: Vector,
    spell: Spell,
    width: number = 100,
    length: number = 100,
    color: string = "grey",
    gap = 1
  ) {
    super(0, 0, width, width, length, 1);
    this.socketID = socketID;
    this.lobby = lobby;


    this.PushTo(this.lobby.GAME.engine);
    this.AddTo(this.lobby.objects);

    let angle = Math.atan(dir.y / dir.x) + 180;

    let newDir = dir.mult(gap);
    pos = pos.add(newDir);
    this.setPosition(pos.x, pos.y, angle);
    this.spell = spell;
    this.layer = 1;
    this.center = pos;
    this.graphics = new Graphics();
    this.color = color;

  }
  AddTo(array: IGameBody[],): void {
    array.push(this);
  }
  remove() {
    this.lobby.objects.splice(this.lobby.objects.indexOf(this), 1);
    super.remove();
  }

  collided(...collidedObj: Body[]): void {
    this.spell.effect(...collidedObj);
  }
}
