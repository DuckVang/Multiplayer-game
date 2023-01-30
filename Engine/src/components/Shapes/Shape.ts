import Vector from "../../Math/Vector"
import Matrix from "../../Math/Matrix"

export class Shape {

    pos: Vector
    vertex: Vector[]
    color: string

    constructor() {
        this.pos = new Vector(0, 0)
        this.vertex = []
        this.color = ""
    }
}