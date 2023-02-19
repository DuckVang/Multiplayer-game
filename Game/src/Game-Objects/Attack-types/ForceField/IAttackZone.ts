import { Shape } from "../../../../../Engine/src/components/Shapes/Shape";
import Vector from "../../../../../Engine/src/Math/Vector";
import { Spell } from "../../../Game-Logic/Spells/SpellClass";

export interface IAttackZone {

    spell: Spell
    layer: number
    center: Vector
    power: number


}