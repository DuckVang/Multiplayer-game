import { Container } from "pixi.js"
import BODIES from "../../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../../Engine/src/components/Models/Collisions";
import { DrawPoint, DrawVelAcc } from "../../Render/Shapes";
import WORLD from "../GlobalWorld";

export function UILoop() {

    
    WORLD.UI_OBJECTS.forEach((object) => {
        
        object.update()

    })

}