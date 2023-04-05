import { SHAPES_TYPES } from "../../../../Shared/Constants";
import Vector from "../../Math/Vector";
import { Shape } from "./Shape";


export interface ICircle {
    r: number

}
export class Circle extends Shape {

    r: number

    constructor(x: number, y: number, r: number) {
        super(SHAPES_TYPES.CIRCLE)
        this.pos = new Vector(x, y);
        this.r = r;
    }
    UpdateAABB(): void {
        this.AABB = {
            min: new Vector(this.pos.x - this.r, this.pos.y - this.r),
            max: new Vector(this.pos.x + this.r, this.pos.y + this.r)
        }
    }

}