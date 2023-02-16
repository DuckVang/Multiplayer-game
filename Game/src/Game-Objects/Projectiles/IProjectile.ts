import { IGameBody } from "../IGameBody"
import { IGameObject } from "../IGameObject"

export interface IProjectile extends IGameBody{

    projSpeed: number
    gap: number
    

}