import Vector from "../../Math/Vector"
import Matrix from "../../Math/Matrix"
import { ICircle } from "./Circle"
import { IRectangle } from "./Rectangle"
import { ILine } from "./Line"
import { ITriangle } from "./Triangle"



export interface IShape extends Partial<ICircle>, Partial<IRectangle>, Partial<ILine>, Partial<ITriangle> {

    pos: Vector
    vertex: Vector[]
    color: string

}
export class Shape implements IShape {

    pos: Vector
    vertex: Vector[]
    color: string

    constructor() {
        this.pos = new Vector(0, 0)
        this.vertex = []
        this.color = ""
    }
}