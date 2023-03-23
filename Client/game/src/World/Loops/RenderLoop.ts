import CLIENT from "../../../Networking/socket";
import { Player } from "../../Player";
import { DrawBall, DrawBox } from "../../Render/Shapes";
import instance from "../GlobalWorld";
import Body from "../../../../../Engine/src/components/Physical-Body/Body";
import { Constants } from "../../../../../Shared/Constants";
import { IShape, Shape } from "../../../../../Engine/src/components/Shapes/Shape";
import { Circle } from "../../../../../Engine/src/components/Shapes/Circle";
export function RenderLoop() {
    if (!CLIENT.gameUpdate) return
    instance.BACKGROUND.clear()

    // CLIENT.gameUpdate.players((player: any) => {

    //     DrawBall(instance.BACKGROUND, player.comp)

    // });
    // console.log(CLIENT.gameUpdate.players)
    instance.BACKGROUND.beginFill(0x000000)
    instance.BACKGROUND.drawRect(0, 0, instance.width, instance.height)


    // for (const key in CLIENT.gameUpdate.players) {
    //     DrawBall(instance.BACKGROUND, CLIENT.gameUpdate.players[key])
    // }

    RenderPlayers(CLIENT.gameUpdate.players)
    RenderObjects(CLIENT.gameUpdate.objects)





}
function RenderPlayers(players: { [key: string]: Circle }) {


    for (const key in players) {
        DrawBall(instance.BACKGROUND, players[key])
    }
}
function RenderObjects(objects: IShape[]) {
    console.log(objects)
    objects.forEach(obj => {

        switch (obj.type) {


            case Constants.SHAPES.CIRCLE:
                DrawBall(instance.BACKGROUND, obj)
                break

            case Constants.SHAPES.RECTANGLE:
                DrawBox(instance.BACKGROUND, obj)
                break

        }
    });




}

