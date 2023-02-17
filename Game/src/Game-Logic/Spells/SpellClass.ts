import Body from "../../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../../Engine/src/Math/Vector"
import { BallProjectile } from "../../Game-Objects/Attack-types/Projectile/BallProjectile"

export abstract class Spell {



    projectiles: BallProjectile[]

    energyCost: number
    speed: number

    dir: Vector

    duration: number
    gap: number


    constructor() {


        this.projectiles = []
        this.energyCost = 0
        this.speed = 0
        this.dir = new Vector(0, 0)
        this.duration = 0
        this.gap = 0
    }

    cast(dir: Vector) {
    }
    protected setRemove(duration: number,...projectiles: BallProjectile[] ) {

        setTimeout(() => {
            projectiles.forEach(p => {
                p.remove()
            });
        }, duration);

    }
}