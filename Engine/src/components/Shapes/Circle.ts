import Vector from "../../Math/Vector";
import { Shape } from "./Shape";

export default class Circle extends Shape {

    r: number

    constructor(x: number, y: number, r: number) {
        super()
        this.pos = new Vector(x, y);
        this.r = r;
    }

}