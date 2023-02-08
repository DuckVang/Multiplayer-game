import BODIES from "../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../Engine/src/Math/Vector";
import { Projectile } from "../../Game-Objects/Projectiles/BallProjectile";
import WORLD from "../../World/World";
import { Spell } from "./SpellClass";

export class ManaBullet extends Spell {


    constructor() {
        super()
        this.duration = 10000
    }
    cast(dir: Vector) {
        let playrPos = WORLD.player.pos
        let projectile = new Projectile(dir, playrPos)
        
        projectile.friction = 0
        let speed = dir.mult(1000)
        projectile.vel = projectile.vel.add(speed)

        setTimeout(() => {
            projectile.remove()
        }, this.duration);
    }
}