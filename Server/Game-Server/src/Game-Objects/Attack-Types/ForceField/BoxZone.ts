import { Graphics } from "pixi.js";
import { Box } from "../../../../../../Engine/src/components/Physical-Body/Box";
import Vector from "../../../../../../Engine/src/Math/Vector";
import { Spell } from "../../../Game-Logic/Spells/SpellClass";
import WORLD from "../../../World/GlobalWorld";
import { ISpellZone } from "./ISpellZone";
import Body from "../../../../../../Engine/src/components/Physical-Body/Body";
import gameServer from "../../../../../Networking";
import { IGameBody } from "../../IGameBody";


export class BoxZone extends Box implements ISpellZone {
    spell: Spell;
    center: Vector;
    power: number;

    gap: number;
    socketID: string;
    constructor(socketID: string, dir: Vector, pos: Vector, spell: Spell, width: number = 100, length: number = 100, color: string = "grey", gap = 1) {
        super(0, 0, width, width, length, 1)
        this.socketID = socketID

        let angle = Math.atan(dir.y / dir.x) + 180

        let newDir = dir.mult(gap)
        pos = pos.add(newDir)
        this.setPosition(pos.x, pos.y, angle)
        this.spell = spell
        this.layer = 1
        this.center = pos;
        this.graphics = new Graphics()
        this.color = color
        this.PushTo(WORLD.engine)
        this.addTo(gameServer.objects, this.socketID)


    }
    addTo(array: IGameBody[], socketID: string): void {
        this.socketID = socketID
        array.push(this)

    }
    remove() {
        super.remove()
        gameServer.objects.splice(gameServer.objects.indexOf(this), 1)
    }


    collided(...collidedObj: Body[]): void {

        this.spell.effect(...collidedObj)

    }


}