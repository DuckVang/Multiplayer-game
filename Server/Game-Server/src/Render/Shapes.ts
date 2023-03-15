import { Graphics } from "pixi.js"
import * as Color from "color"
import Body from "../../../../Engine/src/components/Physical-Body/Body";
import Vector from "../../../../Engine/src/Math/Vector";
import { IGameBody } from "../Game-Objects/IGameBody";



export function DrawBall(GraphObj: Graphics, ball: IGameBody, alpha: number = 1) {

    const color = new Color(ball.color)
    const body = GraphObj

    body.beginFill(color.rgbNumber(), alpha);
    body.drawCircle(ball.pos.x, ball.pos.y, ball.comp.r)
    body.endFill();
    return body
}
export function DrawWall(GraphObj: Graphics, wall: IGameBody,alpha: number = 1) {

    const line = GraphObj
    const color = new Color(wall.color)
    line.lineStyle(2, color.rgbNumber(), alpha);
    line.moveTo(wall.comp.start.x, wall.comp.start.y)


    line.lineTo(wall.comp.end.x, wall.comp.end.y)
    return line

}
export function DrawBox(GraphObj: Graphics, box: IGameBody,alpha: number = 1) {
    const body = GraphObj

    const color = new Color(box.color)

    body.beginFill(color.rgbNumber(),alpha);

    body.moveTo(box.comp.vertex[0].x, box.comp.vertex[0].y)
    body.lineTo(box.comp.vertex[1].x, box.comp.vertex[1].y)
    body.lineTo(box.comp.vertex[2].x, box.comp.vertex[2].y)
    body.lineTo(box.comp.vertex[3].x, box.comp.vertex[3].y)
    body.lineTo(box.comp.vertex[0].x, box.comp.vertex[0].y)
    body.endFill();
    return body


}
export function DrawPyramid(GraphObj:Graphics, pyramid: IGameBody, alpha: number = 1){
    const body = GraphObj

    const color = new Color('#3F6D2A')

    body.beginFill(color.rgbNumber(),alpha);

    body.moveTo(pyramid.comp.vertex[0].x, pyramid.comp.vertex[0].y)
    body.lineTo(pyramid.comp.vertex[1].x, pyramid.comp.vertex[1].y)
    body.lineTo(pyramid.comp.vertex[2].x, pyramid.comp.vertex[2].y)
    body.lineTo(pyramid.comp.vertex[0].x, pyramid.comp.vertex[0].y)
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
