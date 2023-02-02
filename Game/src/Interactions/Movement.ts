import Body from "../../../Engine/src/components/Physical-Body/Body";


export function userMove(body: Body) {

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
            


        });
    }
}