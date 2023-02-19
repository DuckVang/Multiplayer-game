import { Player } from "../../../Game-Objects/Player"


function Burn(...collidedObj: Body[]): void {
    collidedObj.forEach((body) => {

        if (body instanceof Player) {
            setInterval(() => {

                body.comp.color = "red"
                body.Damaged(10)

            }, 100)
        }
    })

}
