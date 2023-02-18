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

    getAabbWidth(): number
    getAabbHeight(): number


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
        let min = new Vector(0, 0);
        let max = new Vector(0, 0);
        for (let i = 0; i < this.vertex.length; i++) {
            if (this.vertex[i].x < min.x) {
                min.x = this.vertex[i].x;
            }
            if (this.vertex[i].y < min.y) {
                min.y = this.vertex[i].y;
            }
            if (this.vertex[i].x > max.x) {
                max.x = this.vertex[i].x;
            }
            if (this.vertex[i].y > max.y) {
                max.y = this.vertex[i].y;
            }
        }
        this.AABB = { min: min, max: max }

    }
    getAabbWidth(): number {
        return this.AABB.max.x - this.AABB.min.x;
    }

    getAabbHeight(): number {
        return this.AABB.max.y - this.AABB.min.y;
    }





}
