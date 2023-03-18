

import WORLD from "../GlobalWorld"
import { UserInputs } from "./UserInputs"


export function MainLoop(dt: number) {





    UserInputs()
    WORLD.engine.Loop(dt);

    // GameLoop()









}