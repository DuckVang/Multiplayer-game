import { Constants } from "../../../../Shared/Constants"
import Matrix from "../../Math/Matrix"
import Vector from "../../Math/Vector"
import { IShape, Shape } from "./Shape"


export interface ILine {

    dir: Vector
    mag: number

    start: Vector
    end: Vector
    
    
}
export  class Line extends Shape{
    pos: Vector
    vertex: Vector[]
    color: string

    dir: Vector
    mag: number

    start: Vector
    end: Vector

    constructor(x0:number, y0:number, x1:number, y1:number){
        super(Constants.SHAPES.LINE)
        this.vertex[0] = new Vector(x0, y0);
        this.vertex[1] = new Vector(x1, y1);
        this.dir = this.vertex[1].subtr(this.vertex[0]).unit();
        this.mag = this.vertex[1].subtr(this.vertex[0]).mag();
        this.pos = new Vector((this.vertex[0].x+this.vertex[1].x)/2, (this.vertex[0].y+this.vertex[1].y)/2);
    }
    UpdateAABB(): void {
        this.AABB = {
            min: new Vector(this.pos.x - this.mag, this.pos.y - this.mag),
            max: new Vector(this.pos.x + this.mag, this.pos.y + this.mag)
        }
    }
  

}