import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../../Engine/src/Math/Vector";
import GAME_SERVER from "../../../../Networking";
import Lobby from "../../../../Networking/lobby";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";
import { Player } from "../../Game-Objects/Player";

import { Spell } from "./SpellClass";

export class ManaBullet extends Spell {
  constructor() {
    super();
    this.duration = 4000;
  }
  cast(dir: Vector, player: Player, lobby: Lobby) {
    let playerPos = player.pos;
    const projectile = new BallProjectile(
      player.socketID,
      lobby,
      this,
      dir,
      playerPos
    );

    projectile.friction = 0;

    let speed = dir.mult(50);

    projectile.vel = projectile.vel.add(speed);

    this.projectiles.push(projectile);
    this.setRemove(this.duration, projectile);
  }
}
