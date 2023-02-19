import { Graphics } from "pixi.js";
import { Box } from "../../../../../Engine/src/components/Physical-Body/Box";
import Vector from "../../../../../Engine/src/Math/Vector";
import { Spell } from "../../../Game-Logic/Spells/SpellClass";
import { IAttackZone } from "./IAttackZone";

export class BoxZone extends Box implements IAttackZone {
    spell: Spell;
    center: Vector;
    power: number;
    graphics: Graphics;
    constructor(dir: Vector, pos: Vector, spell: Spell) {
        super(0, 0, 0, 0, 0, 0)
        this.spell = spell
        this.layer = 1
        this.center = pos;
        this.graphics = new Graphics()
        
    }
}