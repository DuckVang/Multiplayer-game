import { MainPlayer } from "../Player";


export function AddSelection(player: MainPlayer) {

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
                case 53:
                    player.selected = 5
                    break;
                case 54:
                    player.selected = 6
                    break;

                default:
                    break;
            }

        });


    }
}