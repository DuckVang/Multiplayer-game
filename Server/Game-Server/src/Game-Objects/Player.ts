import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../Engine/src/Math/Vector";
import { ManaBullet } from "../Game-Logic/Spells/ManaBullet";
import { Spell } from "../Game-Logic/Spells/SpellClass";
import { ManaExplosion } from "../Game-Logic/Spells/ManaExplosion";
import { Dash } from "../Game-Logic/Spells/Dash";
import { IGameBody } from "./IGameBody";
import { MeleeAttack } from "../Game-Logic/Spells/MeleeAttack";

import { FireBall } from "../Game-Logic/Spells/FireBall";
import Lobby from "../../../Networking/lobby";
import SpellStorage from "../Game-Logic/Spells/SpellStorage";

export class Player extends Ball implements IGameBody {
 spellStorage: SpellStorage

  socketID: string;

  alive: boolean;

  maxHealth: number;
  health: number;
  maxEnergy: number;
  energy: number;

  selected: number;

  motionTrail: boolean;

  savePos: any;

  invicibility: boolean;
  invicibilityTime: number;
  lobby: Lobby;
  d: any[];

  constructor(x: number, y: number, socketID: string, lobby: Lobby) {
    super(x, y, 30, 2);

    this.lobby = lobby
    this.socketID = socketID

    this.PushTo(lobby.GAME.engine);
    this.AddTo(lobby.players, socketID);

    this.spellStorage = new SpellStorage(this)
    this.maxHealth = 100;
    this.health = this.maxHealth;
    this.selected = 1;
    this.maxSpeed = 10000;
    this.alive = true;
    this.color = "orange";
   

    this.invicibility = false;
    this.invicibilityTime = 5000;

   
  }

  AddTo(dict: { [key: string]: IGameBody }, socketID: string): void {
    
    dict[socketID] = this;
  }
  CastSpell(dir: Vector, selected: any) {
    this.spellStorage.cast(dir, selected)
  }
  Damaged(amount: number, invicible: boolean = true) {
    if (this.invicibility) return;

    if (this.alive) {
      this.health -= amount;

      if (this.health <= 0) this.Dead();

      if (invicible) {
        this.invicibility = true;

        setTimeout(() => {
          this.invicibility = false;
        }, this.invicibilityTime);
      }
    } else this.health = 0;
  }
  Dead() {
    this.alive = false;
    this.remove();
  }
}
