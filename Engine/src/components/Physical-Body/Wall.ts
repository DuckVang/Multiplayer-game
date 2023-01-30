import Line from "../Shapes/Line";
import Vector from "../../Math/Vector";
import Body from "./Body";

export class Wall extends Body {

    start: Vector
    end: Vector
    dir: Vector

    constructor(x1: number, y1: number, x2: number, y2: number) {
        super()
        this.pos = new Vector((x1 + x2) / 2, (y1 + y2) / 2)
        this.start = new Vector(x1, y1);
        this.end = new Vector(x2, y2);
        this.comp = new Line(x1, y1, x2, y2);
        this.dir = this.end.subtr(this.start).unit();

    }
}