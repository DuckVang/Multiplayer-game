import { Container } from "pixi.js"
import BODIES from "../../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../../Engine/src/components/Models/Collisions";
import { DrawPoint, DrawVelAcc } from "../../Render/Shapes";
import WORLD from "../GlobalWorld";

export function RenderBodiesLoop() {
    
    WORLD.GAME_CONT.removeChildren()
    BODIES.forEach((body) => {


        body.render()
        WORLD.GAME_CONT.addChild(body.graphics)

        WORLD.GAME_CONT.addChild(DrawVelAcc(body))


    })

    COLLISIONS.forEach(element => {
        WORLD.GAME_CONT.addChild(DrawPoint(element.cp))
    });

  
}