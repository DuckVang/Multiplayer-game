import Vector from "../../Math/Vector"
import Matrix from "../../Math/Matrix"
import { ICircle } from "./Circle"
import { IRectangle } from "./Rectangle"
import { ILine } from "./Line"
import { ITriangle } from "./Triangle"
import { type } from "os"



export interface IShape extends Partial<ICircle>, Partial<IRectangle>, Partial<ILine>, Partial<ITriangle> {
    type: string

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
export abstract class Shape implements IShape {
    type: string

    pos: Vector
    vertex: Vector[]
    color: string

    AABB: {
        min: Vector,
        max: Vector,
    }

    constructor(type: string) {
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
