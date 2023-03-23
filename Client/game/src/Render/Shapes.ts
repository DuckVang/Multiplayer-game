
import * as Color from "color"
import Body from "../../../../Engine/src/components/Physical-Body/Body";
import { IShape, Shape } from "../../../../Engine/src/components/Shapes/Shape"
import Vector from "../../../../Engine/src/Math/Vector";
import IGameBody from "../interfaces/IGameBody";
import { Line } from "../../../../Engine/src/components/Shapes/Line";
import { Circle } from "../../../../Engine/src/components/Shapes/Circle";
import { Rectangle } from "../../../../Engine/src/components/Shapes/Rectangle";
import { Graphics } from "pixi.js";



export function DrawBall(GraphObj: Graphics, ball: IShape, alpha: number = 1) {

    const color = new Color("gray")
    const body = GraphObj

    body.beginFill(color.rgbNumber(), alpha);
    body.drawCircle(ball.pos.x, ball.pos.y, ball.r)
    body.endFill();
    return body
}
export function DrawWall(GraphObj: Graphics, wall: IShape, alpha: number = 1) {

    const line = GraphObj
    const color = new Color(wall.color)
    line.lineStyle(2, color.rgbNumber(), alpha);
    line.moveTo(wall.start.x, wall.start.y)


    line.lineTo(wall.end.x, wall.end.y)
    return line

}
export function DrawBox(GraphObj: Graphics, box: IShape, alpha: number = 1) {
    const body = GraphObj

    const color = new Color(box.color)

    body.beginFill(color.rgbNumber(), alpha);

    body.moveTo(box.vertex[0].x, box.vertex[0].y)
    body.lineTo(box.vertex[1].x, box.vertex[1].y)
    body.lineTo(box.vertex[2].x, box.vertex[2].y)
    body.lineTo(box.vertex[3].x, box.vertex[3].y)
    body.lineTo(box.vertex[0].x, box.vertex[0].y)
    body.endFill();
    return body


}
export function DrawPyramid(GraphObj: Graphics, pyramid: IShape, alpha: number = 1) {
    const body = GraphObj

    const color = new Color('#3F6D2A')

    body.beginFill(color.rgbNumber(), alpha);

    body.moveTo(pyramid.vertex[0].x, pyramid.vertex[0].y)
    body.lineTo(pyramid.vertex[1].x, pyramid.vertex[1].y)
    body.lineTo(pyramid.vertex[2].x, pyramid.vertex[2].y)
    body.lineTo(pyramid.vertex[0].x, pyramid.vertex[0].y)
    body.endFill();
    return body
}
export function DrawVelAcc(body: Body) {

    const lines = new Graphics()
    const vel = new Graphics()
    const acc = new Graphics()

    vel.lineStyle(2, 0xffd900, 1);
    acc.lineStyle(2, 0xffd900, 1);
    vel.moveTo(body.pos.x, body.pos.y)
    acc.moveTo(body.pos.x, body.pos.y)

    const unitVel = body.vel.unit().mult(100)
    const unitAcc = body.acc.unit().mult(100)

    vel.lineTo(unitVel.x + body.pos.x, unitVel.y + body.pos.y)
    acc.lineTo(unitAcc.x + body.pos.x, unitAcc.y + body.pos.y)

    lines.addChild(vel).addChild(acc)
    return lines

}
export function DrawLine(GraphObj: Graphics, p1: Vector, p2: Vector) {
    const line = GraphObj
    line.lineStyle(20, 0xffd900, 1);
    line.moveTo(p1.x, p1.y)
    line.lineTo(p2.x, p2.y)
    return line
}

export function DrawPoint(p: Vector) {

    const color = new Color('#3F9FEA')

    const point = new Graphics()
    point.beginFill(color.rgbNumber());
    point.drawCircle(p.x, p.y, 10)
    point.endFill()
    return point
}
