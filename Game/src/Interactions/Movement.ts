import Body from "../../../Engine/src/components/Physical-Body/Body";


export function AddMovement(body: Body) {

    {

        document.addEventListener('keydown', function (e: any) {


            switch (e.keyCode) {
                case 65:
                    body.left = true
                    break;

                case 87:
                    body.up = true
                    break;

                case 68:
                    body.right = true
                    break;

                case 83:
                    body.down = true
                    break;

                default:
                    break;
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


        });
    }
}