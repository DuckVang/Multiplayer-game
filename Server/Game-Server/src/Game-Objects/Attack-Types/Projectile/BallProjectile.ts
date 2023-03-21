import { Graphics } from "pixi.js"
import { Ball } from "../../../../../../Engine/src/components/Physical-Body/Ball"
import Body from "../../../../../../Engine/src/components/Physical-Body/Body"
import Vector from "../../../../../../Engine/src/Math/Vector"
import gameServer from "../../../../../Networking"

import WORLD from "../../../World/GlobalWorld"
import { IGameBody } from "../../IGameBody"
import { Player } from "../../Player"
import { IProjectile } from "./IProjectile"


export class BallProjectile extends Ball implements IProjectile {


    spell: any

    graphics: Graphics

    projSpeed: number
    gap: number
    socketID: string

    parentArray: IGameBody[]



    constructor(socketID: string, dir: Vector, pos: Vector, spell: any, r: number = 10, gap: number = 50) {
        super(0, 0, r, 2)
        this.socketID = socketID

        this.spell = spell

        this.projSpeed = 1000
        this.gap = gap

        this.color = "red"

        this.layer = 0
        let p = dir.mult(this.gap).add(pos)
        this.setPosition(p.x, p.y)
        // this.motionTrail.Start()

        WORLD.SPELL_PROJ.push(this)

        this.PushTo(WORLD.engine)
        this.addTo(gameServer.objects, this.socketID)

    }
    addTo(array: IGameBody[], socketID: string): void {
        this.socketID = socketID
        this.parentArray = array
        this.parentArray.push(this)

    }
    remove() {
        super.remove()
        gameServer.objects.splice(gameServer.objects.indexOf(this), 1)
    }
    collided(...collidedObj: Body[]): void {
        this.spell.effect(...collidedObj)
    }


}