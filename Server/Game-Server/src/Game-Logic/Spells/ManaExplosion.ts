import BODIES from "../../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../../Engine/src/components/Physical-Body/Ball";
import Matrix from "../../../../../Engine/src/Math/Matrix";
import Vector from "../../../../../Engine/src/Math/Vector";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";
import { Player } from "../../Game-Objects/Player";
import { Spell } from "./SpellClass";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";

export class ManaExplosion extends Spell {

    detonationTime: number

    constructor() {
        super()
        this.duration = 3000
        this.detonationTime = 1000
    }
    effect(...collidedObj:Body[]): void {
        collidedObj.forEach((body) => {
            if (body instanceof Player) {
                body.Damaged(10)
            }
        })
        
    }
    // cast(dir: Vector) {
    //     let playrPos = WORLD.player.pos
    //     let mainProjectile = new BallProjectile(dir, playrPos, this)

    //     mainProjectile.friction = 0
    //     let speed = dir.mult(1000)

    //     mainProjectile.vel = mainProjectile.vel.add(speed)
    //     this.projectiles.push(mainProjectile)
    //     setTimeout(() => {

    //         for (let radius = 0; radius < 360; radius += 30) {
    //             let matrix = new Matrix(2, 2)
    //             matrix.rotMx22(radius)
    //             let newDir = matrix.multiplyVec(dir)
    //             let miniProjectile = new BallProjectile(newDir, mainProjectile.pos, this)

    //             miniProjectile.friction = 0

    //             let speed = newDir.mult(500-radius)
    //             miniProjectile.vel = mainProjectile.vel.add(speed)

    //             this.projectiles.push(miniProjectile)

    //         }
    //         this.setRemove(0, mainProjectile)
    //         this.setRemove(this.duration, ...this.projectiles)

    //     }, this.detonationTime)


    // }
}
