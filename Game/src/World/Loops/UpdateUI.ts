import { Container } from "pixi.js"
import BODIES from "../../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../../Engine/src/components/Models/Collisions";
import { DrawPoint, DrawVelAcc } from "../../Render /Shapes";
import WORLD from "../Index";

export function UILoop() {

    
    WORLD.UIOBJECTS.forEach((object) => {


        object.update()

        


    })

}