

import { GameLoop } from "./GameLoop"
import WORLD from "../GlobalWorld"
import BODIES from "../../../../../Engine/src/components/Models/Bodies"
import { PlaneGeometry } from "pixi.js"
import { Player } from "../../Game-Objects/Player"
import { Wall } from "../../../../../Engine/src/components/Physical-Body/Wall"
import { UserInputs } from "./UserInputs"


export function MainLoop() {





    UserInputs()
    WORLD.engine.Loop();
    // GameLoop()









}