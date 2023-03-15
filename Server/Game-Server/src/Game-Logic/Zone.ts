
import { Player } from "../Game-Objects/Player"
import WORLD from "../World/GlobalWorld"


let percent = 0.01
let minShrink = 0.9
let zoneRadius = 0
let minZoneRadius = 0.1

export function ShrinkZone() {

    zoneRadius = WORLD.zone.zoneRadius
    minZoneRadius *= WORLD.zone.orgZoneRadius

    WORLD.timer.isShrinking = true
    const zone = setInterval(() => {

        WORLD.zone.zoneRadius -= zoneRadius * percent

        if (WORLD.zone.zoneRadius <= zoneRadius * minShrink) {

            clearInterval(zone)
            timer()
        }

    }, 1000)



}
function timer() {

    const timer = setInterval(() => {

        WORLD.timer.isShrinking = false
        WORLD.timeLeft--

        if (WORLD.timeLeft <= 0) {
            WORLD.timeLeft = WORLD.interval
            clearInterval(timer)
            if (WORLD.zone.zoneRadius >= minZoneRadius) ShrinkZone()
        }


    }, 1000)

}


export function CheckInZone() {

    if (WORLD.player.pos.subtr(WORLD.zone.pos).mag() > WORLD.zone.zoneRadius) WORLD.player.Damaged(0.1,false)
}
