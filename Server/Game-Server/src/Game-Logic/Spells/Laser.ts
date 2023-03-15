import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../../Engine/src/Math/Vector";
import { BoxZone } from "../../Game-Objects/Attack-Types/ForceField/BoxZone";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import { Player } from "../../Game-Objects/Player";
export class Laser extends Spell {


    zone: BoxZone
    constructor() {
        super()
        this.duration = 3000
        this.cooldownTime = 3000
    }
    effect(...collidedObj: Body[]): void {

        collidedObj.forEach(obj => {
            if (obj instanceof Player) {
                obj.Damaged(10)
                console.log(collidedObj)
                obj.vel = obj.vel.add(this.dir.mult(1000))
            }

        });
        
    }
    // cast(dir: Vector) {
        
    //     if (this.isCoolDown) return

    //     WORLD.player.vel = WORLD.player.vel.add(dir.mult(-30))
    //     ShakeScreen()
        
    //     this.zone = new BoxZone(dir, WORLD.player.pos, this, 20, 500, "purple",300)


    //     this.setRemove(this.duration, this.zone)
    //     this.cooldown()

    // }


}