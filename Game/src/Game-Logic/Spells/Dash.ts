import BODIES from "../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../Engine/src/Math/Vector";
import { BallProjectile } from "../../Game-Objects/Projectiles/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";

export class Dash extends Spell {

    distance: number
    motionTrailLength: number

    constructor() {
        super()
        this.duration = 100
        this.distance = 50
    }
    cast(dir: Vector) {
        console.log("dash")
        let newdir = dir.mult(this.distance)
  
        let dashInterval = setInterval(() => {
            WORLD.player.vel = WORLD.player.vel.add(newdir.mult(10/this.duration))
            console.log(WORLD.player.vel)
            
            
            
        }, 10)
        setTimeout(() => { clearInterval(dashInterval) }, this.duration)
    

    }

}