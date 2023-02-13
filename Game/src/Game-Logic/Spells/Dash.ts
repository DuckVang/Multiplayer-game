import BODIES from "../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../Engine/src/Math/Vector";
import { BallProjectile } from "../../Game-Objects/Projectiles/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";

export class ManaBullet extends Spell {

    distance: number

    constructor() {
        super()
        this.duration = 1000
        this.distance = 10
    }
    cast(dir: Vector) {
        dir = dir.mult(this.distance)
        WORLD.player.pos.add(dir)

    }

}