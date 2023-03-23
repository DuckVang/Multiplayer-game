import Body from "../../../../Engine/src/components/Physical-Body/Body";

export function ColorBlink(obj: Body, color: string, time: number) {
    let orgColor = obj.color
    obj.color = color
    let i = 0
    let interval = setInterval(() => {

        if (i % 2 == 0) obj.color = orgColor
        else obj.color = color
        i++
    }, 250)
    
    setTimeout(() => {
        obj.color = orgColor
        clearInterval(interval)
    }, time)

}