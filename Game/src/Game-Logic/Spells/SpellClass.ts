import Body from "../../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../../Engine/src/Math/Vector"
import { Projectile } from "../../Game-Objects/Projectiles/BallProjectile"

export class Spell{


    
    projectiles: Projectile[]

    energyCost: number
    speed: number

    dir: Vector

    duration:number
    gap:number


    constructor(){
   
        this.energyCost =0
        this.speed =0
        this.dir = new Vector(0,0)
        this.duration = 0
        this.gap = 0
    }
    cast(dir:Vector){

    }
}