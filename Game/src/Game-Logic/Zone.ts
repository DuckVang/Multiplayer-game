import WORLD from "../World/World"


let percent = 0.1
let zoneRadius = 0
export function ShrinkZone() {

    zoneRadius = WORLD.zoneRadius

    const timer = setInterval(() => {


        WORLD.timeLeft--
        if (WORLD.timeLeft < 0) {

            WORLD.timeLeft = WORLD.interval
            WORLD.zoneRadius -= zoneRadius * percent
        }
        console.log(WORLD.zoneRadius)

        if (WORLD.zoneRadius <= 0) clearInterval(timer);

    }, 1000)

}