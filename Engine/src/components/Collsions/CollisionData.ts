import Body from "../Physical-Body/Body";
import Vector from "../../Math/Vector";

export class CollisionData {

    body1: Body
    body2: Body
    normal: Vector
    //penetration
    pen: number
    //contact point
    cp: Vector


    testPen:boolean
    testColl:boolean

    constructor(body1: Body, body2: Body, normal: Vector, pen: number, cp: Vector, doPen:boolean, doColl:boolean) {
        this.body1 = body1;
        this.body2 = body2;
        this.normal = normal;
        this.pen = pen;
        this.cp = cp;

        this.testPen = doPen
        this.testColl = doColl
    }

    penRes() {
        const penResolution = this.normal.mult(this.pen / (this.body1.inv_m + this.body2.inv_m));
        this.body1.pos = this.body1.pos.add(penResolution.mult(this.body1.inv_m));
        this.body2.pos = this.body2.pos.add(penResolution.mult(-this.body2.inv_m));

    }

    collRes() {
        const collArm1 = this.cp.subtr(this.body1.comp.pos);
        const rotVel1 = new Vector(-this.body1.angVel * collArm1.y, this.body1.angVel * collArm1.x);
        const closVel1 = this.body1.vel.add(rotVel1);
        const collArm2 = this.cp.subtr(this.body2.comp.pos);
        const rotVel2 = new Vector(-this.body2.angVel * collArm2.y, this.body2.angVel * collArm2.x);
        const closVel2 = this.body2.vel.add(rotVel2);

        let impAug1 = Vector.cross(collArm1, this.normal);
        impAug1 = impAug1 * this.body1.inv_inertia * impAug1;
        let impAug2 = Vector.cross(collArm2, this.normal);
        impAug2 = impAug2 * this.body2.inv_inertia * impAug2;

        const relVel = closVel1.subtr(closVel2);
        const sepVel = Vector.dot(relVel, this.normal);
        const new_sepVel = -sepVel * Math.min(this.body1.elasticity, this.body2.elasticity);
        const vsep_diff = new_sepVel - sepVel;

        const impulse = vsep_diff / (this.body1.inv_m + this.body2.inv_m + impAug1 + impAug2);
        const impulseVec = this.normal.mult(impulse);

        this.body1.vel = this.body1.vel.add(impulseVec.mult(this.body1.inv_m));
        this.body2.vel = this.body2.vel.add(impulseVec.mult(-this.body2.inv_m));

        this.body1.angVel += this.body1.inv_inertia * Vector.cross(collArm1, impulseVec);
        this.body2.angVel -= this.body2.inv_inertia * Vector.cross(collArm2, impulseVec);
    }
}