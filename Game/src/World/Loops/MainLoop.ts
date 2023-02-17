
import { PhysicsLoop } from "../../../../Engine/src/Loops/PhysicalLoop"
import { WatchMouse } from "../../Interactions/Mouse"
import { FollowPlayer } from "../Camera/Camera"
import { RenderBodiesLoop } from "./RenderLoop"
import { MapLoop } from "./UpdateMap"
import { UILoop } from "./UpdateUI"
import { UserInputs } from "./UserInputs"
import { GameLoop } from "./GameLoop"
import WORLD from "../GlobalWorld"
import BODIES from "../../../../Engine/src/components/Models/Bodies"


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