import Body from "./Body";
import Circle from "../Shapes/Circle";

export class Ball extends Body {


    comp: Circle

    constructor(x: number, y: number, r: number, m: number) {
        super()
        this.comp = new Circle(x, y, r);
        this.pos = this.comp.pos
        this.m = m;
        this.m === 0 ? this.inv_m = 0 : this.inv_m = 1 / this.m;

    }

    setPosition(x: number, y: number, a = this.angle) {
        this.pos.set(x, y);
        this.comp.pos.set(x, y)
    }

    reposition() {
        super.reposition();
        this.setPosition(this.pos.add(this.vel).x, this.pos.add(this.vel).y);
    }

    keyControl() {
        this.acc.x = 0
        this.acc.y = 0
        if (this.left) {
            this.acc.x -= this.keyForce;
        }
        if (this.up) {
            this.acc.y -= this.keyForce;
        }
        if (this.right) {
            this.acc.x += this.keyForce;
        }
        if (this.down) {
            this.acc.y += this.keyForce;
        }

    }
}
