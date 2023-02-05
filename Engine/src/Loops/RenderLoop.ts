import BODIES from "../components/Models/Bodies";
import * as Shapes from "../Render/Shapes"
import { Container} from "pixi.js";
import { Wall } from "../components/Physical-Body/Wall";
import { Ball } from "../components/Physical-Body/Ball";
import { Box } from "../components/Physical-Body/Box";
import COLLISIONS from "../components/Models/Collisions";
export function RenderLoop(container: Container) {

    container.removeChildren()
    BODIES.forEach((body) => {

        if (body instanceof Ball) container.addChild(Shapes.DrawBall(body))
        if (body instanceof Wall) container.addChild(Shapes.DrawWall(body))
        if (body instanceof Box) container.addChild(Shapes.DrawBox(body))
        container.addChild(Shapes.DrawVelAcc(body))

    })
    COLLISIONS.forEach(element => {
        container.addChild(Shapes.DrawPoint(element.cp))
    });
}