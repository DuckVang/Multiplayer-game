import Circle from "../Shapes/Circle";
import Triangle from "../Shapes/Triangle";
import Rectangle from "../Shapes/Rectangle";
import Line from "../Shapes/Line";
import Vector from "../../Math/Vector";
import { Wall } from "../Physical-Body/Wall";
import { Shape } from "../Shapes/Shape";

export function sat(o1: Shape, o2: Shape) {
    let minOverlap = null;
    let smallestAxis;
    let vertexObj;

    let axes = findAxes(o1, o2);
   
    let proj1, proj2 = null;
    let firstShapeAxes = getShapeAxes(o1);

    for(let i=0; i<axes.length; i++){
        proj1 = projShapeOntoAxis(axes[i], o1);
        proj2 = projShapeOntoAxis(axes[i], o2);
    
        let overlap = Math.min(proj1.max, proj2.max) - Math.max(proj1.min, proj2.min);
  
        if (overlap < 0){
            return false;
        }
        console.table(o1.pos)
        console.table(o2.pos)

        if((proj1.max > proj2.max && proj1.min < proj2.min) ||
        (proj1.max < proj2.max && proj1.min > proj2.min)){
            let mins = Math.abs(proj1.min - proj2.min);
            let maxs = Math.abs(proj1.max - proj2.max);
            if (mins < maxs){
                overlap += mins;
            } else {
                overlap += maxs;
                axes[i] = axes[i].mult(-1);
            }
        }
        
        if (overlap < minOverlap || minOverlap === null){
            minOverlap = overlap;
            smallestAxis = axes[i];
            if (i<firstShapeAxes){
                vertexObj = o2;
                if(proj1.max > proj2.max){
                    smallestAxis = axes[i].mult(-1);
                }
            } else {
                vertexObj = o1;
                if(proj1.max < proj2.max){
                    smallestAxis = axes[i].mult(-1);
                }
            }
        }  
    };
    
    let contactVertex = projShapeOntoAxis(smallestAxis, vertexObj).collVertex;
    //smallestAxis.drawVec(contactVertex.x, contactVertex.y, minOverlap, "blue");
    
    if(vertexObj === o2){
        smallestAxis = smallestAxis.mult(-1);
    }
    
    return {
        pen: minOverlap,
        axis: smallestAxis,
        vertex: contactVertex
    }
}

function findAxes(o1: Shape, o2: Shape) {
    let axes = [];
    if (o1 instanceof Circle && o2 instanceof Circle) {
        if (o2.pos.subtr(o1.pos).mag() > 0) {
            axes.push(o2.pos.subtr(o1.pos).unit());
        } else {
            axes.push(new Vector(Math.random(), Math.random()).unit());
        }
        return axes;
    }
    if (o1 instanceof Circle) {
        axes.push(closestVertexToPoint(o2, o1.pos).subtr(o1.pos).unit());
    }
    if (o1 instanceof Line) {
        axes.push(o1.dir.normal());
    }
    if (o1 instanceof Rectangle) {
        axes.push(o1.dir.normal());
        axes.push(o1.dir);
    }
    if (o1 instanceof Triangle) {
        axes.push(o1.vertex[1].subtr(o1.vertex[0]).normal());
        axes.push(o1.vertex[2].subtr(o1.vertex[1]).normal());
        axes.push(o1.vertex[0].subtr(o1.vertex[2]).normal());
    }
    if (o2 instanceof Circle) {
        axes.push(closestVertexToPoint(o1, o2.pos).subtr(o2.pos).unit());
    }
    if (o2 instanceof Line) {
        axes.push(o2.dir.normal());
    }
    if (o2 instanceof Rectangle) {
        axes.push(o2.dir.normal());
        axes.push(o2.dir);
    }
    if (o2 instanceof Triangle) {
        axes.push(o2.vertex[1].subtr(o2.vertex[0]).normal());
        axes.push(o2.vertex[2].subtr(o2.vertex[1]).normal());
        axes.push(o2.vertex[0].subtr(o2.vertex[2]).normal());
    }
    return axes;
}

function closestPointOnLS(p: Vector, w1: Wall) {
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