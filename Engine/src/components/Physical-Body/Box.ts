
import Body from "./Body";
import Rectangle from "../Shapes/Rectangle";
export class Box extends Body {


    comp: Rectangle



    constructor(x1: number, y1: number, x2: number, y2: number, w: number, m: number) {
        super()

        this.comp = new Rectangle(x1, y1, x2, y2, w);

        this.pos = this.comp.pos

        this.m = m;

        this.m === 0 ? this.inv_m = 0 : this.inv_m = 1 / this.m

        this.inertia = this.m * (this.comp.width ** 2 + this.comp.length ** 2) / 12;

        this.m === 0 ? this.inv_inertia = 0 : this.inv_inertia = 1 / this.inertia

    }

    keyControl() {
        if (this.up) {
            this.acc = this.comp.dir.mult(-this.keyForce);;
        }
        if (this.down) {
            this.acc = this.comp.dir.mult(this.keyForce);;
        }
        if (this.left) {
            this.angVel = -this.angKeyForce;
        }
        if (this.right) {
            this.angVel = this.angKeyForce;
        }
        if (!this.up && !this.down) {
            this.acc.set(0, 0);
        }
    }

    setPosition(x: number, y: number, a = this.angle) {
        this.pos.set(x, y);
        this.angle = a;
        this.comp.pos = this.pos;
        this.comp.getVertices(this.angle + this.angVel);
        this.angle += this.angVel;
    }

    reposition() {
        super.reposition();
        this.setPosition(this.pos.add(this.vel).x, this.pos.add(this.vel).y);
    }
}

