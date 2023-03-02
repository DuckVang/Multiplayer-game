import { Container } from "pixi.js"
import BODIES from "../../../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../../../Engine/src/components/Models/Collisions";
import { DrawPoint, DrawVelAcc } from "../../Render/Shapes";
import instance from "../GlobalWorld";

export function UILoop() {

    
    instance.UI_OBJECTS.forEach((object) => {
        
        object.update()

    })

}