import { Container } from "pixi.js"
import BODIES from "../../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../../Engine/src/components/Models/Collisions";
import { DrawPoint, DrawVelAcc } from "../../Render /Shapes";
import WORLD from "../World";

export function UILoop() {

    WORLD.GUI_CONT.removeChildren()
    WORLD.UIOBJECTS.forEach((object) => {


        object.update()
        WORLD.GUI_CONT.addChild(object)



    })

}