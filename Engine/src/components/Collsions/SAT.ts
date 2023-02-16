import {Circle} from "../Shapes/Circle";
import Triangle from "../Shapes/Triangle";
import {Rectangle} from "../Shapes/Rectangle";
import {Line} from "../Shapes/Line";
import Vector from "../../Math/Vector";
import { Wall } from "../Physical-Body/Wall";
import { Shape } from "../Shapes/Shape";

export function sat(shape1: Shape, shape2: Shape) {
    let minOverlap = null;
    let smallestAxis;
    let vertexObj;

    let axes = findAxes(shape1, shape2);

    let proj1, proj2 = null;
    let firstShapeAxes = getShapeAxes(shape1);

    for (let i = 0; i < axes.length; i++) {
        proj1 = projShapeOntoAxis(axes[i], shape1);
        proj2 = projShapeOntoAxis(axes[i], shape2);

        let overlap = Math.min(proj1.max, proj2.max) - Math.max(proj1.min, proj2.min);

        if (overlap < 0) {
            return false;
        }


        if ((proj1.max > proj2.max && proj1.min < proj2.min) ||
            (proj1.max < proj2.max && proj1.min > proj2.min)) {
            let mins = Math.abs(proj1.min - proj2.min);
            let maxs = Math.abs(proj1.max - proj2.max);
            if (mins < maxs) {
                overlap += mins;
            } else {
                overlap += maxs;
                axes[i] = axes[i].mult(-1);
            }
        }

        if (overlap < minOverlap || minOverlap === null) {
            minOverlap = overlap;
            smallestAxis = axes[i];
            if (i < firstShapeAxes) {
                vertexObj = shape2;
                if (proj1.max > proj2.max) {
                    smallestAxis = axes[i].mult(-1);
                }
            } else {
                vertexObj = shape1;
                if (proj1.max < proj2.max) {
                    smallestAxis = axes[i].mult(-1);
                }
            }
        }
    };

    let contactVertex = projShapeOntoAxis(smallestAxis, vertexObj).collVertex;
    //smallestAxis.drawVec(contactVertex.x, contactVertex.y, minOverlap, "blue");

    if (vertexObj === shape2) {
        smallestAxis = smallestAxis.mult(-1);
    }

    return {
        pen: minOverlap,
        axis: smallestAxis,
        vertex: contactVertex
    }
}

function findAxes(shape1: Shape, shape2: Shape) {
    let axes = [];
    if (shape1 instanceof Circle && shape2 instanceof Circle) {
        if (shape2.pos.subtr(shape1.pos).mag() > 0) {
            axes.push(shape2.pos.subtr(shape1.pos).unit());
        } else {
            axes.push(new Vector(Math.random(), Math.random()).unit());
        }
        return axes;
    }
    if (shape1 instanceof Circle) {
        axes.push(closestVertexToPoint(shape2, shape1.pos).subtr(shape1.pos).unit());
    }
    if (shape1 instanceof Line) {
        axes.push(shape1.dir.normal());
    }
    if (shape1 instanceof Rectangle) {
        axes.push(shape1.dir.normal());
        axes.push(shape1.dir);
    }
    if (shape1 instanceof Triangle) {
        axes.push(shape1.vertex[1].subtr(shape1.vertex[0]).normal());
        axes.push(shape1.vertex[2].subtr(shape1.vertex[1]).normal());
        axes.push(shape1.vertex[0].subtr(shape1.vertex[2]).normal());
    }
    if (shape2 instanceof Circle) {
        axes.push(closestVertexToPoint(shape1, shape2.pos).subtr(shape2.pos).unit());
    }
    if (shape2 instanceof Line) {
        axes.push(shape2.dir.normal());
    }
    if (shape2 instanceof Rectangle) {
        axes.push(shape2.dir.normal());
        axes.push(shape2.dir);
    }
    if (shape2 instanceof Triangle) {
        axes.push(shape2.vertex[1].subtr(shape2.vertex[0]).normal());
        axes.push(shape2.vertex[2].subtr(shape2.vertex[1]).normal());
        axes.push(shape2.vertex[0].subtr(shape2.vertex[2]).normal());
    }
    return axes;
}

function closestPointOnLS(p: Vector, w1: Wall) {
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

function closestVertexToPoint(obj: Shape, p: Vector) {
    let closestVertex;
    let minDist = null;
    for (let i = 0; i < obj.vertex.length; i++) {
        if (p.subtr(obj.vertex[i]).mag() < minDist || minDist === null) {
            closestVertex = obj.vertex[i];
            minDist = p.subtr(obj.vertex[i]).mag();
        }
    }
    return closestVertex;
}

function getShapeAxes(obj: Shape) {
    if (obj instanceof Circle || obj instanceof Line) {
        return 1;
    }
    if (obj instanceof Rectangle) {
        return 2;
    }
    if (obj instanceof Triangle) {
        return 3;
    }
}
function projShapeOntoAxis(axis: Vector, obj: Shape) {
    setBallVerticesAlongAxis(obj, axis);
    let min: number = Vector.dot(axis, obj.vertex[0]);
    let max: number = min;
    let collVertex: Vector = obj.vertex[0];
    for (let i = 0; i < obj.vertex.length; i++) {
        let p = Vector.dot(axis, obj.vertex[i]);
        if (p < min) {
            min = p;
            collVertex = obj.vertex[i];
        }
        if (p > max) {
            max = p;
        }
    }


    return {
        min: min,
        max: max,
        collVertex: collVertex,

    }


}
function setBallVerticesAlongAxis(obj: Shape, axis: Vector) {
    if (obj instanceof Circle) {
        obj.vertex[0] = obj.pos.add(axis.unit().mult(-obj.r));
        obj.vertex[1] = obj.pos.add(axis.unit().mult(obj.r));
    }
}