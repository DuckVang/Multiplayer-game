import BODIES from "../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../Engine/src/Math/Vector";
import { BallProjectile } from "../../Game-Objects/Projectiles/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";

export class ManaBullet extends Spell {


    constructor() {
        super()
        this.duration = 1000
    }
     cast(dir: Vector) {
        let playrPos = WORLD.player.pos
        let projectile = new BallProjectile(dir, playrPos)
        
        projectile.friction = 0
        let speed = dir.mult(1000)
        projectile.vel = projectile.vel.add(speed)
        
        this.projectiles.push(projectile)
        this.setRemove()
    }
    
}