import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../../Engine/src/Math/Vector";
import gameServer from "../../../../Networking";
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
    cast(dir: Vector, id: string) {
        const player = gameServer.players[id]

        player.motionTrail = true
        console.log("dash")
        let newDir = dir.mult(this.distance)
        player.controls = false


        player.vel = player.vel.add(newDir)




        setTimeout(() => {
            player.controls = true
            player.motionTrail = false


        }, this.duration)

    }
}