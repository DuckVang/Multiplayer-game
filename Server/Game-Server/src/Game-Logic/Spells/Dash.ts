import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../../Engine/src/Math/Vector";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";

export class Dash extends Spell {

    distance: number


    constructor() {
        super()
        this.duration = 1000
        this.distance = 50
        this.speed = 100



    }
    cast(dir: Vector, id: any) {
        WORLD.PLAYERS[id].motionTrail = true
        console.log("dash")
        let newdir = dir.mult(this.distance)
        WORLD.PLAYERS[id].controls = false


        WORLD.PLAYERS[id].vel = WORLD.PLAYERS[id].vel.add(newdir)




        setTimeout(() => {
            WORLD.PLAYERS[id].controls = true
            WORLD.PLAYERS[id].motionTrail = false


        }, this.duration)

    }
}