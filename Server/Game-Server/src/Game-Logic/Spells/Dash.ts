import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../../Engine/src/Math/Vector";
import GAME_SERVER from "../../../../Networking";
import Lobby from "../../../../Networking/lobby";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";
import { Player } from "../../Game-Objects/Player";
import { Spell } from "./SpellClass";

export class Dash extends Spell {
  distance: number;

  constructor() {
    super();
    this.duration = 1000;
    this.distance = 50;
    this.speed = 100;
  }
  // cast(dir: Vector, socketID: string, lobby: Lobby) {
  //   const player = lobby.players[socketID];
    
  //   player.motionTrail = true;
  //   console.log("dash");
  //   let newDir = dir.mult(this.distance);
  //   player.controls = false;

  //   player.vel = player.vel.add(newDir);

  //   setTimeout(() => {
  //     player.controls = true;
  //     player.motionTrail = false;
  //   }, this.duration);
  // }
}
