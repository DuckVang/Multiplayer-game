import Vector from "../../../../../Engine/src/Math/Vector";
import { Player } from "../../Game-Objects/Player";
import { ManaBullet } from "./ManaBullet";
import { ManaExplosion } from "./ManaExplosion";
import { Spell } from "./SpellClass";

class SpellStorage {
  player: Player;
  spells: Spell[];
  constructor(player: Player) {
    this.player = player;
    this.spells = [new ManaBullet(), new ManaExplosion()];
  }

  cast(dir: Vector, selected: number) {
    const spell = this.spells[selected];
    if (!spell) return;
    spell.cast(dir, this.player, this.player.lobby);
  }
}
export default SpellStorage;
