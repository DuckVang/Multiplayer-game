
import { WatchMouse } from "../../Interactions/Mouse"
import { Follow } from "../Camera/Camera"
import { RenderLoop } from "./RenderLoop"



import CLIENT from "../../../Networking/socket"
import Body from "../../../../../Engine/src/components/Physical-Body/Body"
import { PLAYER } from "../../Player"


export function MainLoop() {

    // FollowPlayer()
    // UILoop()
    // MapLoop()
    // WatchMouse()

    console.group("main loop")
    setInterval(() => {



        if (CLIENT.gameUpdate) {
            const update = CLIENT.gameUpdate
            // console.count("main loop")
            Object.assign(PLAYER, update.players[CLIENT.socket.id])
            

            const mainPlayer = update.players[CLIENT.socket.id]

            //WHY COLLISION IS NOT WORKING IN FOLLOW, WHY IS IT WORKING NOW?!? MAYBE GRID out of range? OHHH it is out of range, leftest/highest point of grid is 0,0
            // console.log(mainPlayer.pos)
            // console.log(update.players)
            Follow({ x: mainPlayer.pos.x, y: mainPlayer.pos.y })

            RenderLoop()
        }


    }, 0)







}