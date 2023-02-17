import Vector from "../../Math/Vector";
import { Wall } from "../Physical-Body/Wall";
import { sat } from "./SAT";
import Body from "../Physical-Body/Body";


export function closestPointOnLS(p: Vector, w1: Wall) {
    let ballToWallStart = w1.comp.start.subtr(p);
    if (Vector.dot(w1.comp.dir, ballToWallStart) > 0) {
        return w1.comp.start;
    }

    let wallEndToBall = p.subtr(w1.comp.end);
    if (Vector.dot(w1.comp.dir, wallEndToBall) > 0) {
        return w1.comp.end;
    }

    let closestDist = Vector.dot(w1.comp.dir, ballToWallStart);
    let closestVect = w1.comp.dir.mult(closestDist);
    return w1.comp.start.subtr(closestVect);
}

export function collisionHandlingCondition(body1: Body, body2: Body) {
    return (
        // (body1.layer === body2.layer && !(body1.layer === -1 || body1.layer === -2)) ||
        // (body1.layer === 0 && body2.layer !== -2) ||
        // (body2.layer === 0 && body1.layer !== -2)
        (body1.layer === body2.layer)
    )
}

export function checkColl(o1: Body, o2: Body) {

    type SAT_Data = {
        pen: any
        axis: any
        vertex: any
    }

    let bestSAT: SAT_Data = {
        pen: null,
        axis: null,
        vertex: null
    }

    let SAT = sat(o1.comp, o2.comp)

    if (!SAT) return false

    if (SAT.pen > bestSAT.pen) {
        bestSAT = SAT;

    }
    if (bestSAT.pen !== null) {
        return bestSAT;
    } else {
        return false;
    }
}