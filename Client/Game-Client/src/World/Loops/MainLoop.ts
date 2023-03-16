
import { PhysicsLoop } from "../../../../../Engine/src/Loops/PhysicalLoop"
import { WatchMouse } from "../../Interactions/Mouse"
import { FollowPlayer } from "../Camera/Camera"
import { RenderLoop } from "./RenderLoop"
import { MapLoop } from "./UpdateMap"
import { UILoop } from "./UpdateUI"


import instance from "../GlobalWorld"
import BODIES from "../../../../../Engine/src/components/Models/Bodies"

import { Wall } from "../../../../../Engine/src/components/Physical-Body/Wall"


export function MainLoop() {

    // FollowPlayer()
    // UILoop()
    // MapLoop()
    // WatchMouse()
  
    RenderLoop()






    requestAnimationFrame(() => MainLoop())

}