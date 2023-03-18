import CLIENT from "../../../../Networking/socket";
import { DrawBall } from "../../Render/Shapes";
import instance from "../GlobalWorld";

export function RenderLoop() {
    if (!CLIENT.gameUpdate) return
    instance.BACKGROUND.clear()

    // CLIENT.gameUpdate.players((player: any) => {

    //     DrawBall(instance.BACKGROUND, player.comp)

    // });
    // console.log(CLIENT.gameUpdate.players)
    instance.BACKGROUND.beginFill(0x000000)
    instance.BACKGROUND.drawRect(0, 0, instance.width, instance.height)


    for (const key in CLIENT.gameUpdate.players) {
        DrawBall(instance.BACKGROUND, CLIENT.gameUpdate.players[key])
    }



}
