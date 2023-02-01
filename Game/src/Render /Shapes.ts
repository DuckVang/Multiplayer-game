import { Graphics } from "pixi.js"
import * as Color from "color"
import Body from "../../../Engine/src/components/Physical-Body/Body";
import { Ball } from "../../../Engine/src/components/Physical-Body/Ball";
import { Box } from "../../../Engine/src/components/Physical-Body/Box";
import { Wall } from "../../../Engine/src/components/Physical-Body/Wall";


export function DrawBall(GraphObj:Graphics, ball: Ball) {

    let color = new Color('#3F6D2A')
    const body = GraphObj
    body.beginFill(color.rgbNumber());
    body.drawCircle(ball.pos.x, ball.pos.y, ball.comp.r)
    body.endFill();
    return body
}
export function DrawWall(GraphObj:Graphics,wall: Wall) {

    const line = GraphObj

    line.lineStyle(2, 0xffd900, 1);
    line.moveTo(wall.start.x, wall.start.y)


    line.lineTo(wall.end.x, wall.end.y)
    return line

}
export function DrawBox(GraphObj:Graphics,box: Box) {
    const body = GraphObj

    let color = new Color('#3F6D2A')
    
    body.beginFill(color.rgbNumber());
    
    body.moveTo(box.comp.vertex[0].x,box.comp.vertex[0].y)
    body.lineTo(box.comp.vertex[1].x,box.comp.vertex[1].y)
    body.lineTo(box.comp.vertex[2].x,box.comp.vertex[2].y)
    body.lineTo(box.comp.vertex[3].x,box.comp.vertex[3].y)
    body.lineTo(box.comp.vertex[0].x,box.comp.vertex[0].y)
    body.endFill();
    return body


}
export function DrawVelAcc(GraphObj:Graphics,body: Body) {

    const lines =  GraphObj
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
// export function DrawLine(p1: Vector, p2: Vector) {
//     const line = new Graphics()

//     line.lineStyle(2, 0xffd900, 1);
//     line.moveTo(p1.x, p1.y)
//     line.lineTo(p2.x, p2.y)
//     return line
// }

// export function DrawPoint(p: Vector) {

//     let color = new Color('#3F9FEA')

//     let point = new Graphics()
//     point.beginFill(color.rgbNumber());
//     point.drawCircle(p.x, p.y, 10)
//     point.endFill()
//     return point
// }
