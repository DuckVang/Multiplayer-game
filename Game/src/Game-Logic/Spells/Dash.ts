import BODIES from "../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../Engine/src/Math/Vector";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";

export class Dash extends Spell {

    distance: number


    constructor() {
        super()
        this.duration = 100
        this.distance = 50
       

    }
    cast(dir: Vector) {
        console.log("dash")
        let newdir = dir.mult(this.distance)
        WORLD.player.vel = WORLD.player.vel.add(newdir)






    }

}