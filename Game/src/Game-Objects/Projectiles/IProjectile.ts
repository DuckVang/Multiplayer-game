import { IGameObject } from "../IGameObject"

export interface Projectile extends IGameObject{

    projSpeed: number
    gap: number

}