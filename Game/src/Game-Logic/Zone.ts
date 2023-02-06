import { clear } from "console"
import WORLD from "../World/World"


let percent = 0.01
let zoneRadius = 0
export function ShrinkZone() {

    zoneRadius = WORLD.zoneRadius


    const zone = setInterval(() => {

        WORLD.zoneRadius -= zoneRadius * percent

        if (WORLD.zoneRadius == zoneRadius * 0.9) {

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
            if (WORLD.zoneRadius > 0) ShrinkZone()
        }


    }, 1000)

}
