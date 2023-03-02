import { Container } from "pixi.js"
import BODIES from "../../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../../Engine/src/components/Models/Collisions";
import { DrawGrid } from "../../Render/Grid";
import { DrawPoint, DrawVelAcc } from "../../Render/Shapes";
import WORLD from "../GlobalWorld";

export function RenderBodiesLoop() {

    WORLD.GAME_CONT.removeChildren()
    WORLD.engine.BODIES.forEach((body) => {


        body.render()

        WORLD.GAME_CONT.addChild(body.graphics)
        // WORLD.GAME_CONT.addChild(DrawVelAcc(body))


    })

    WORLD.engine.COLLISIONS.forEach(element => {
        WORLD.GAME_CONT.addChild(DrawPoint(element.cp))
    });

    WORLD.GAME_CONT.addChild(DrawGrid())


}