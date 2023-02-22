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
    AABB: {
        min: Vector,
        max: Vector,
    }
    UpdateAABB(): void

    getAABBWidth(): number
    getAABBHeight(): number
    getAABBCenter(): Vector


}
export class Shape implements IShape {

    pos: Vector
    vertex: Vector[]
    color: string

    AABB: {
        min: Vector,
        max: Vector,
    }

    constructor() {
        this.pos = new Vector(0, 0)
        this.vertex = []
        this.color = ""
    }

    UpdateAABB() {

    }
    getAABBWidth(): number {
        return this.AABB.max.x - this.AABB.min.x;
    }

    getAABBHeight(): number {
        return this.AABB.max.y - this.AABB.min.y;
    }
    getAABBCenter(): Vector {
        const centerX = (this.AABB.max.x + this.AABB.min.x) / 2;
        const centerY = (this.AABB.max.y + this.AABB.min.y) / 2;
        return new Vector(centerX, centerY);
    }





}
