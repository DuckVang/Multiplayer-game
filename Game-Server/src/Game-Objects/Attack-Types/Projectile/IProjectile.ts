import { Spell } from "../../../Game-Logic/Spells/SpellClass"
import { IGameBody } from "../../IGameBody"
import { IGameObject } from "../../IGameObject"

export interface IProjectile extends IGameBody{

    spell: Spell
    projSpeed: number
    gap: number
    
    

}