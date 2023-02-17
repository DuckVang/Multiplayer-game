
import Vector from "../../Math/Vector"
import Matrix from "../../Math/Matrix"
import { Shape } from "./Shape"
export interface ITriangle {


    dir: Vector
    refDir: Vector
    refDiam: Vector[]
    length: number
    width: number
    angle: number
    rotMat: Matrix
}

export default class Triangle extends Shape {

 

    dir: Vector
    refDir: Vector
    refDiam: Vector[]
    length: number
    width: number
    angle: number
    rotMat: Matrix

    constructor(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number){

        super()
        this.vertex[0] = new Vector(x1, y1);
        this.vertex[1] = new Vector(x2, y2);
        this.vertex[2] = new Vector(x3, y3);
        this.pos = new Vector((this.vertex[0].x+this.vertex[1].x+this.vertex[2].x)/3, (this.vertex[0].y+this.vertex[1].y+this.vertex[2].y)/3);
        this.dir = this.vertex[0].subtr(this.pos).unit();
        this.refDir = this.dir;
        this.refDiam = [];
        this.refDiam[0] = this.vertex[0].subtr(this.pos);
        this.refDiam[1] = this.vertex[1].subtr(this.pos);
        this.refDiam[2] = this.vertex[2].subtr(this.pos);
        this.angle = 0;
        this.rotMat = new Matrix(2,2);
    }


    getVertices(angle:number){
        this.rotMat.rotMx22(angle);
        this.dir = this.rotMat.multiplyVec(this.refDir);
        this.vertex[0] = this.pos.add(this.rotMat.multiplyVec(this.refDiam[0]));
        this.vertex[1] = this.pos.add(this.rotMat.multiplyVec(this.refDiam[1]));
        this.vertex[2] = this.pos.add(this.rotMat.multiplyVec(this.refDiam[2]));
    }
}
