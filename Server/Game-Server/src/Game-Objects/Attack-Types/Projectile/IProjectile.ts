import { Spell } from "../../../Game-Logic/Spells/SpellClass"
import { IGameBody } from "../../IGameBody"
import { Player } from "../../Player"


export interface IProjectile extends IGameBody{

    
    spell: Spell
    projSpeed: number
    gap: number
    
    

}