import Vector from "../../Math/Vector";
import { Wall } from "../Physical-Body/Wall";
import { sat } from "./SAT";
import Body from "../Physical-Body/Body";


export function closestPointOnLS(p: Vector, w1: Wall) {
    let ballToWallStart = w1.start.subtr(p);
    if (Vector.dot(w1.dir, ballToWallStart) > 0) {
        return w1.start;
    }

    let wallEndToBall = p.subtr(w1.end);
    if (Vector.dot(w1.dir, wallEndToBall) > 0) {
        return w1.end;
    }

    let closestDist = Vector.dot(w1.dir, ballToWallStart);
    let closestVect = w1.dir.mult(closestDist);
    return w1.start.subtr(closestVect);
}


export function checkCol(o1: Body, o2: Body) {

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