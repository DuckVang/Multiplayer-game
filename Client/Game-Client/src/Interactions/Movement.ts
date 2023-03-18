import { Constants } from "../../../Constants";
import CLIENT from "../../../Networking/socket";
let justPressed = false;

export function AddControl(body: any) {

    {

        document.addEventListener('keydown', function (e: any) {

            switch (e.keyCode) {
                case 65:
                    if (body.left === false) {
                        justPressed = true;
                    }
                    body.left = true;
                    break;

                case 87:
                    if (body.up === false) {
                        justPressed = true;
                    }
                    body.up = true;
                    break;

                case 68:
                    if (body.right === false) {
                        justPressed = true;
                    }
                    body.right = true;
                    break;

                case 83:
                    if (body.down === false) {
                        justPressed = true;
                    }
                    body.down = true;
                    break;

                default: break

            }
            if (justPressed === true) {
                
                emitUserCommands(body);
                justPressed = false;
            }
          


        });

        document.addEventListener('keyup', function (e: any) {
            switch (e.keyCode) {
                case 65:
                    body.left = false
                    break;

                case 87:
                    body.up = false
                    break;

                case 68:
                    body.right = false
                    break;

                case 83:
                    body.down = false
                    break;

                default:
                    break;
            }

            emitUserCommands(body)
        });
    }

    function emitUserCommands(obj: any) {
        let userCommands = {
            left: obj.left,
            up: obj.up,
            right: obj.right,
            down: obj.down,
        }
        console.log(userCommands)
        CLIENT.socket.emit(Constants.INTERACTIONS.MOVEMENT, userCommands);
    }
}