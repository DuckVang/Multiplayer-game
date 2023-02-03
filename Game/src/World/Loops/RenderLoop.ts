import { Container } from "pixi.js"
import BODIES from "../../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../../Engine/src/components/Models/Collisions";
import { DrawPoint, DrawVelAcc } from "../../Render /Shapes";
import WORLD from "../Index";

export function RenderBodiesLoop() {

    WORLD.GAMECONT.removeChildren()
    BODIES.forEach((body) => {


        body.render()
        WORLD.GAMECONT.addChild(body.graphics)

        WORLD.GAMECONT.addChild(DrawVelAcc(body))


    })

    COLLISIONS.forEach(element => {
        WORLD.GAMECONT.addChild(DrawPoint(element.cp))
    });
}