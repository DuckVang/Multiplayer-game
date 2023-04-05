import { Graphics } from "pixi.js";
import { Ball } from "../../../../../../Engine/src/components/Physical-Body/Ball";
import Body from "../../../../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../../../../Engine/src/Math/Vector";
import GAME_SERVER from "../../../../../Networking";
import Lobby from "../../../../../Networking/lobby";

import { IGameBody } from "../../IGameBody";
import { Player } from "../../Player";
import { IProjectile } from "./IProjectile";

export class BallProjectile extends Ball implements IProjectile {
  socketID: string;
  spell: any;

  graphics: Graphics;

  projSpeed: number;
  gap: number;

  parentArray: IGameBody[];
  lobby: Lobby;

  constructor(
    socketID: string,
    lobby: Lobby,
    spell: any,
    dir: Vector,
    pos: Vector,
    r: number = 10,
    gap: number = 50
  ) {
    super(0, 0, r, 2);
    this.lobby = lobby;
    this.socketID = socketID;
    this.PushTo(this.lobby.GAME.engine);
    this.AddTo(this.lobby.objects);
    this.lobby.SPELL_PROJ.push(this);

    this.spell = spell;

    this.projSpeed = 10;
    this.gap = gap;

    this.color = "red";

    this.layer = 0;
    let p = dir.mult(this.gap).add(pos);
    this.setPosition(p.x, p.y);
    // this.motionTrail.Start()
  }
  AddTo(array: IGameBody[]): void {
    this.parentArray = array;
    this.parentArray.push(this);
  }
  remove() {
    super.remove();
    GAME_SERVER.objects.splice(GAME_SERVER.objects.indexOf(this), 1);
  }
  collided(...collidedObj: Body[]): void {
    this.spell.effect(...collidedObj);
  }
}
