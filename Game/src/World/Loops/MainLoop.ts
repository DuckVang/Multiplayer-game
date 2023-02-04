import { PhysicsLoop } from "../../../../Engine/src/Loops/PhysicalLoop"
import { FollowPlayer } from "../Components/Camera"
import { RenderBodiesLoop } from "./RenderLoop"
import { UILoop } from "./UpdateUI"
import { UserInputs } from "./UserInputs"

export function MainLoop() {
    // this.VIEWPORT.follow(this.follow.graphics, {speed:10, })

    // console.time()
    // console.timeLog()
    // this.mouserDir = GetMouseDirection(this.follow, this.mousePos.x, this.mousePos.y).add(this.follow.pos)

    FollowPlayer()
    UILoop()

    UserInputs()
    PhysicsLoop(10)
    RenderBodiesLoop()

    // console.timeEnd()

    requestAnimationFrame(() => MainLoop())

}