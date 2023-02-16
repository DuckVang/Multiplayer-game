
import { PhysicsLoop } from "../../../../Engine/src/Loops/PhysicalLoop"
import { WatchMouse } from "../../Interactions/Mouse"
import { FollowPlayer } from "../Camera/Camera"
import { RenderBodiesLoop } from "./RenderLoop"
import { MapLoop } from "./UpdateMap"
import { UILoop } from "./UpdateUI"
import { UserInputs } from "./UserInputs"
import { GameLoop } from "./GameLoop"

let i = 0
export function MainLoop() {
    // this.VIEWPORT.follow(this.follow.graphics, {speed:10, })

    // console.time()
    // console.timeLog()
    // this.mouserDir = GetMouseDirection(this.follow, this.mousePos.x, this.mousePos.y).add(this.follow.pos)
    FollowPlayer()
    UILoop()
    MapLoop()
    
    WatchMouse()
    UserInputs()
    PhysicsLoop(10)
    GameLoop()
    RenderBodiesLoop()

  
   

    
    
   
    

    // console.timeEnd()

    requestAnimationFrame(() => MainLoop())

}