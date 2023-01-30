import Vector from "../../Math/Vector"
import { Shape } from "./Shape"

export default class Line extends Shape{

    dir: Vector
    mag: number

    constructor(x0:number, y0:number, x1:number, y1:number){
        super()
        this.vertex[0] = new Vector(x0, y0);
        this.vertex[1] = new Vector(x1, y1);
        this.dir = this.vertex[1].subtr(this.vertex[0]).unit();
        this.mag = this.vertex[1].subtr(this.vertex[0]).mag();
        this.pos = new Vector((this.vertex[0].x+this.vertex[1].x)/2, (this.vertex[0].y+this.vertex[1].y)/2);
    }

}