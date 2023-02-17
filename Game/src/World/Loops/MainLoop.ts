
import { PhysicsLoop } from "../../../../Engine/src/Loops/PhysicalLoop"
import { WatchMouse } from "../../Interactions/Mouse"
import { FollowPlayer } from "../Camera/Camera"
import { RenderBodiesLoop } from "./RenderLoop"
import { MapLoop } from "./UpdateMap"
import { UILoop } from "./UpdateUI"
import { UserInputs } from "./UserInputs"
import { GameLoop } from "./GameLoop"


export function MainLoop() {
    FollowPlayer()
    UILoop()
    MapLoop()
    
    WatchMouse()
    UserInputs()
    PhysicsLoop(10)
    GameLoop()
    RenderBodiesLoop()

  
   



    requestAnimationFrame(() => MainLoop())

}