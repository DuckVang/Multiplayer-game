
import { PhysicsLoop } from "../../../../../Engine/src/Loops/PhysicalLoop"
import { WatchMouse } from "../../Interactions/Mouse"
import { Follow } from "../Camera/Camera"
import { RenderLoop } from "./RenderLoop"
import { MapLoop } from "./UpdateMap"
import { UILoop } from "./UpdateUI"


import instance from "../GlobalWorld"
import BODIES from "../../../../../Engine/src/components/Models/Bodies"

import { Wall } from "../../../../../Engine/src/components/Physical-Body/Wall"
import { Client } from "socket.io/dist/client"
import CLIENT from "../../../../Networking/socket"


export function MainLoop() {

    // FollowPlayer()
    // UILoop()
    // MapLoop()
    // WatchMouse()
    setInterval(() => {


        
        if (CLIENT.gameUpdate) {
            const update = CLIENT.gameUpdate
console.count("main loop2")
            const mainPlayer = update.players[CLIENT.socket.id]

            //WHY COLLISION IS NOT WORKING IN FOLLOW, WHY IS IT WORKING NOW?!? MAYBE GRID out of range? OHHH it is out of range, leftest/highest point of grid is 0,0
            console.log(mainPlayer.pos)
            console.log(update.players)
            Follow({ x: mainPlayer.pos.x, y: mainPlayer.pos.y })
            RenderLoop()

        }


    }, 0)






}