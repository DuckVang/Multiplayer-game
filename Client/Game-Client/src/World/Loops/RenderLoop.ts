import { Client } from "socket.io/dist/client";
import BODIES from "../../../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../../../Engine/src/components/Models/Collisions";
import { Shape } from "../../../../../Engine/src/components/Shapes/Shape";
import CLIENT from "../../../../Networking/socket";
import { Player } from "../../Player";
import { DrawGrid } from "../../Render/Grid";
import { DrawBall, DrawPoint, DrawVelAcc } from "../../Render/Shapes";
import instance from "../GlobalWorld";

export function RenderLoop() {
    if (!CLIENT.gameUpdate) return
    instance.BACKGROUND.clear()

    // CLIENT.gameUpdate.players((player: any) => {

    //     DrawBall(instance.BACKGROUND, player.comp)

    // });
    // console.log(CLIENT.gameUpdate.players)
    for (const key in CLIENT.gameUpdate.players) {
        DrawBall(instance.BACKGROUND, CLIENT.gameUpdate.players[key])
    }



}
function renderPlayer() {


}