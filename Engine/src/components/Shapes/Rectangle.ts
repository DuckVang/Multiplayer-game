import Vector from "../../Math/Vector"
import Matrix from "../../Math/Matrix"

import { IShape, Shape } from "./Shape"
import { SHAPES_TYPES } from "../../../../Shared/Constants"


export interface IRectangle {
    dir: Vector
    refDir: Vector
    length: number
    width: number
    angle: number
    rotMat: Matrix
}

export class Rectangle extends Shape {

    pos: Vector
    vertex: Vector[]
    color: string

    dir: Vector
    refDir: Vector
    length: number
    width: number
    angle: number
    rotMat: Matrix

    constructor(x1: number, y1: number, x2: number, y2: number, w: number) {
        super(SHAPES_TYPES.RECTANGLE)
        this.pos = new Vector(0, 0)
        this.vertex = []
        this.color = ""

        this.vertex[0] = new Vector(x1, y1);
        this.vertex[1] = new Vector(x2, y2);
        this.dir = this.vertex[1].subtr(this.vertex[0]).unit();
        this.refDir = this.vertex[1].subtr(this.vertex[0]).unit();
        this.length = this.vertex[1].subtr(this.vertex[0]).mag();
        this.width = w;
        this.vertex[2] = this.vertex[1].add(this.dir.normal().mult(this.width));
        this.vertex[3] = this.vertex[2].add(this.dir.mult(-this.length));
        this.pos = this.vertex[0].add(this.dir.mult(this.length / 2)).add(this.dir.normal().mult(this.width / 2));
        this.angle = 0;
        this.rotMat = new Matrix(2, 2);
    }



    getVertices(angle: number) {
        this.rotMat.rotMx22(angle);
        this.dir = this.rotMat.multiplyVec(this.refDir);
        this.vertex[0] = this.pos.add(this.dir.mult(-this.length / 2)).add(this.dir.normal().mult(this.width / 2));
        this.vertex[1] = this.pos.add(this.dir.mult(-this.length / 2)).add(this.dir.normal().mult(-this.width / 2));
        this.vertex[2] = this.pos.add(this.dir.mult(this.length / 2)).add(this.dir.normal().mult(-this.width / 2));
        this.vertex[3] = this.pos.add(this.dir.mult(this.length / 2)).add(this.dir.normal().mult(this.width / 2));
    }
    UpdateAABB(): void {
        //AABB of rect
        var minX = Math.min(this.vertex[0].x, this.vertex[1].x, this.vertex[2].x, this.vertex[3].x);
        var maxX = Math.max(this.vertex[0].x, this.vertex[1].x, this.vertex[2].x, this.vertex[3].x);
        var minY = Math.min(this.vertex[0].y, this.vertex[1].y, this.vertex[2].y, this.vertex[3].y);
        var maxY = Math.max(this.vertex[0].y, this.vertex[1].y, this.vertex[2].y, this.vertex[3].y);

        this.AABB = { min: new Vector(minX, minY), max: new Vector(maxX, maxY) };

    }
}