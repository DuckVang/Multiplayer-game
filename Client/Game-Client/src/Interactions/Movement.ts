import Body from "../../../../Engine/src/components/Physical-Body/Body";
import CLIENT from "../../../Networking/socket";
let justPressed = false;

export function AddControl(body: any) {

    {

        document.addEventListener('keydown', function (e: any) {


            if (e.keyCode === 37) {
                if (body.left === false) {
                    justPressed = true;
                }
                body.left = true;
            }
            if (e.keyCode === 38) {
                if (body.up === false) {
                    justPressed = true;
                }
                body.up = true;
            }
            if (e.keyCode === 39) {
                if (body.right === false) {
                    justPressed = true;
                }
                body.right = true;
            }
            if (e.keyCode === 40) {
                if (body.down === false) {
                    justPressed = true;
                }
                body.down = true;
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
            action: obj.action
        }
        CLIENT.socket.emit('userCommands', userCommands);
    }
}