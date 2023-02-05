import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball"
import { PhysicsLoop } from "../../../../Engine/src/Loops/PhysicalLoop"
import { Player } from "../../Game-Objects/Player"
import { Projectile } from "../../Game-Objects/BallProjectile"
import { HandleClick, WatchMouse } from "../../Interactions/Mouse"
import { FollowPlayer } from "../Components/Camera"
import { RenderBodiesLoop } from "./RenderLoop"
import { MapLoop } from "./UpdateMap"
import { UILoop } from "./UpdateUI"
import { UserInputs } from "./UserInputs"

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
    RenderBodiesLoop()
    
    
   
    

    // console.timeEnd()

    requestAnimationFrame(() => MainLoop())

}