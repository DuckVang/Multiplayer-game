import { Player } from "../../../Game-Objects/Player"
import Body from "../../../../../../Engine/src/components/Physical-Body/Body"

export function Burn(duration: number = 3000, ...collidedObj: Body[]): void {
    collidedObj.forEach((body) => {

        if (body instanceof Player) {
            let interval = setInterval(() => {
                
                body.Damaged(10, true)

            }, 100)
            body.color 

            setTimeout(() => {
                clearInterval(interval)
            }, duration);
        }
    })

}
