import { Shape } from "../../../../../Engine/src/components/Shapes/Shape";
import Vector from "../../../../../Engine/src/Math/Vector";
import { Spell } from "../../../Game-Logic/Spells/SpellClass";
import { IGameBody } from "../../IGameBody";

export interface ISpellZone extends IGameBody{

    spell: Spell
    layer: number
    center: Vector
    power: number


}