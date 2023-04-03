import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../../Engine/src/Math/Vector";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";

import { Burn } from "./ELemental-Effect/Burn";
import { Spell } from "./SpellClass";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import { ids } from "webpack";
import gameServer from "../../../../Networking";
import Lobby from "../../../../Networking/lobby";
export class FireBall extends Spell {
  constructor() {
    super();
    this.duration = 1000;
  }
  effect(...collidedObj: Body[]): void {
    Burn(100, ...collidedObj);
    this.setRemove(0, ...this.projectiles);
  }
  cast(dir: Vector, id: string, lobby: Lobby) {
    let player = gameServer.players[id];

    let playerPos = player.pos;
    let projectile = new BallProjectile(
      id,
      lobby,
      this,
      dir,
      playerPos,
      50,
      150
    );

    projectile.friction = 0;
    projectile.m = 100;
    let speed = dir.mult(500);
    projectile.vel = projectile.vel.add(speed);

    player.vel = player.vel.add(dir.mult(-10));

    this.projectiles.push(projectile);
    this.setRemove(this.duration, ...this.projectiles);
  }
}
