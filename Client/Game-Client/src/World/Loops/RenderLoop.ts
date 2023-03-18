import CLIENT from "../../../../Networking/socket";
import { Player } from "../../Player";
import { DrawBall } from "../../Render/Shapes";
import instance from "../GlobalWorld";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import { Circle } from "pixi.js";
import { Constants } from "../../../../../Shared/Constants";

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
function RenderPlayers(players: Player[]) {


    for (const key in players) {
        DrawBall(instance.BACKGROUND, players[key])
    }
}
function RenderObjects(objects: Body[]) {
    for (const key in objects) {

        let obj = objects[key].comp
        switch (obj.type) {


            case Constants.SHAPES.CIRCLE:
                DrawBall(instance.BACKGROUND, obj)
                break
        }



    }

}