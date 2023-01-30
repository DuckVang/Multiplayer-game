import Circle from "../components/Shapes/Circle";
import Rectangle from "../components/Shapes/Rectangle";
import Triangle from "../components/Shapes/Triangle";
import Line from "../components/Shapes/Line";
import { Graphics } from "pixi.js"
import * as Color from "color"
import Vector from "../Math/Vector";
import Body from "../components/Physical-Body/Body";
import { Ball } from "../components/Physical-Body/Ball";
import { Wall } from "../components/Physical-Body/Wall";
import { Box } from "../components/Physical-Body/Box";

export function DrawBall(ball: Ball) {

    let color = new Color('#3F6D2A')
    const body = new Graphics();
    body.beginFill(color.rgbNumber());
    body.drawCircle(ball.pos.x, ball.pos.y, ball.comp.r)
    body.endFill();
    return body
}
export function DrawWall(wall: Wall) {

    const line = new Graphics()

    line.lineStyle(2, 0xffd900, 1);
    line.moveTo(wall.start.x, wall.start.y)


    line.lineTo(wall.end.x, wall.end.y)
    return line

}
export function DrawBox(box: Box) {
    let color = new Color('#3F6D2A')
    const body = new Graphics();
    body.beginFill(color.rgbNumber());
    
    body.moveTo(box.comp.vertex[0].x,box.comp.vertex[0].y)
    body.lineTo(box.comp.vertex[1].x,box.comp.vertex[1].y)
    body.lineTo(box.comp.vertex[2].x,box.comp.vertex[2].y)
    body.lineTo(box.comp.vertex[3].x,box.comp.vertex[3].y)
    body.lineTo(box.comp.vertex[0].x,box.comp.vertex[0].y)
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

    let unitVel = body.vel.unit().mult(100)
    let unitAcc = body.acc.unit().mult(100)

    vel.lineTo(unitVel.x + body.pos.x, unitVel.y + body.pos.y)
    acc.lineTo(unitAcc.x + body.pos.x, unitAcc.y + body.pos.y)

    lines.addChild(vel).addChild(acc)
    return lines

}
export function DrawLine(p1: Vector, p2: Vector) {
    const line = new Graphics()

    line.lineStyle(2, 0xffd900, 1);
    line.moveTo(p1.x, p1.y)
    line.lineTo(p2.x, p2.y)
    return line
}

export function DrawPoint(p: Vector) {

    let color = new Color('#3F9FEA')

    let point = new Graphics()
    point.beginFill(color.rgbNumber());
    point.drawCircle(p.x, p.y, 10)
    point.endFill()
    return point
}
