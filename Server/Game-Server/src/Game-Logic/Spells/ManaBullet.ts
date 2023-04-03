import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../../Engine/src/Math/Vector";
import gameServer from "../../../../Networking";
import Lobby from "../../../../Networking/lobby";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";

import { Spell } from "./SpellClass";

export class ManaBullet extends Spell {
  constructor() {
    super();
    this.duration = 4000;
  }
  cast(dir: Vector, id: string, lobby: Lobby) {
    let playerPos = gameServer.players[id].pos;
    const projectile = new BallProjectile(id, lobby, this, dir, playerPos);

    projectile.friction = 0;

    let speed = dir.mult(50);

    projectile.vel = projectile.vel.add(speed);

    this.projectiles.push(projectile);
    this.setRemove(this.duration, projectile);
  }
}
