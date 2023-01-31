import Body from "../../../Engine/src/components/Physical-Body/Body"



export class Player {

    body: Body
    constructor(body: Body) {

        userInput(body)

    }
}
function userInput(body: Body) {
    let x: number = 0
    let y: number = 0
    let i: number = 0

    {

        document.addEventListener('keydown', function (e: any) {
            if (e.keyCode == 65) {
                body.left = true;
            }
            if (e.keyCode == 87) {
                body.up = true;
            }
            if (e.keyCode == 68) {
                body.right = true;
            }
            if (e.keyCode == 83) {
                body.down = true;
            }
            if (e.keyCode == 32) {
                body.action = true;
            }


        });

        document.addEventListener('keyup', function (e: any) {
            if (e.keyCode == 65) {
                body.left = false;
            }
            if (e.keyCode == 87) {
                body.up = false;
            }
            if (e.keyCode == 68) {
                body.right = false;
            }
            if (e.keyCode == 83) {
                body.down = false;
            }
            if (e.keyCode == 32) {
                body.action = false;
            }
            throw new Error();


        });
    }
}