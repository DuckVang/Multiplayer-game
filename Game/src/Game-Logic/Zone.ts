import { clear } from "console"
import { Player } from "../Game-Objects/Player"
import WORLD from "../World/GlobalWorld"


let percent = 0.001
let minShrink = 0.9
let zoneRadius = 0
let minZoneRadius = 0.1
export function ShrinkZone() {

    zoneRadius = WORLD.zoneRadius
    minZoneRadius *= WORLD.orgZoneRadius

    const zone = setInterval(() => {

        WORLD.zoneRadius -= zoneRadius * percent

        if (WORLD.zoneRadius <= zoneRadius * minShrink) {

            clearInterval(zone)
            timer()
        }

    }, 1000)



}
function timer() {

    const timer = setInterval(() => {


        WORLD.timeLeft--

        if (WORLD.timeLeft <= 0) {
            WORLD.timeLeft = WORLD.interval
            clearInterval(timer)
            if (WORLD.zoneRadius >= minZoneRadius) ShrinkZone()
        }


    }, 1000)

}


export function CheckInZone() {

    if (WORLD.player.pos.mag() > WORLD.zoneRadius) WORLD.player.Damaged(0.1)
}
