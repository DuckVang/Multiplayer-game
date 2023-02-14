import { Container } from "pixi.js"
import { PhysicsLoop } from "./PhysicalLoop"
import { RenderLoop } from "./RenderLoop"
import { UserInputs } from "./UserInputs"
export default function Loop(container: Container, FPS: number) {

    setInterval(() => {
        UserInputs()
        PhysicsLoop(10)
        RenderLoop(container)

    }, 0)


}