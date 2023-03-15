import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../../Engine/src/Math/Vector";
import { BoxZone } from "../../Game-Objects/Attack-Types/ForceField/BoxZone";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import { Player } from "../../Game-Objects/Player";
export class MeleeAttack extends Spell {


    zone: BoxZone
    constructor() {
        super()
        this.duration = 20
        this.cooldownTime = 1000
    }
    effect(...collidedObj:Body[]): void {
        
        collidedObj.forEach(obj => {
            if(obj instanceof Player) {
                obj.Damaged(10)
                console.log(collidedObj)
                obj.vel = obj.vel.add(this.dir.mult(1000))
            }
            
        });
        this.setRemove(0,this.zone)
    }
    // cast(dir: Vector) {
    //     if(this.isCoolDown) return
    //     let playrPos = WORLD.player.pos
    //     this.zone= new BoxZone(dir, playrPos, this, 100, 100, "white", 120)


    //     this.setRemove(this.duration, this.zone)
    //     this.cooldown()

    // }


}