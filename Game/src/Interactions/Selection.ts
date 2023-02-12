import Body from "../../../Engine/src/components/Physical-Body/Body";
import { Player } from "../Game-Objects/Player";


export function AddSelection(player: Player) {

    {

        document.addEventListener('keydown', function (e: any) {


            switch (e.keyCode) {
                case 49:
                    player.selected = 1
                    break;

                case 50:
                    player.selected = 2
                    break;

                case 51:
                    player.selected = 3
                    break;

                case 52:
                    player.selected = 4
                    break;

                default:
                    break;
            }

        });


    }
}