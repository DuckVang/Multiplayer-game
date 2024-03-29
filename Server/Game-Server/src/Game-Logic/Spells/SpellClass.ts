import Body from "../../../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../../../Engine/src/Math/Vector"
import Lobby from "../../../../Networking/lobby"
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile"
import { Player } from "../../Game-Objects/Player"

export abstract class Spell {



    projectiles: BallProjectile[]

    energyCost: number
    speed: number

    dir: Vector

    duration: number
    gap: number

    isCoolDown: boolean
    cooldownTime: number

    constructor() {

        this.projectiles = []
        this.energyCost = 0
        this.speed = 0
        this.dir = new Vector(0, 0)
        this.duration = 0
        this.gap = 0
        this.isCoolDown = false
        this.cooldownTime = 0
    }

    cast(dir: Vector, player: Player, lobby:Lobby) { }
    effect(...collidedObj: Body[]): void {

    }
    cooldown() {
        this.isCoolDown = true
        setTimeout(() => {
            this.isCoolDown = false
        }, this.cooldownTime)


    }
    protected setRemove(duration: number, ...projectiles: Body[]) {

        setTimeout(() => {
            projectiles.forEach(p => {
                p.remove()
            });
        }, duration);

    }
}