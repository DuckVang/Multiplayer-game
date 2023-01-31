


let x:number = 0
let y:number = 0
let i:number = 0

export function userInput(obj: any) {
    
    document.addEventListener('keydown', function (e: any) {
        if (e.keyCode == 65) {
            obj.left = true;
        }
        if (e.keyCode == 87) {
            obj.up = true;
        }
        if (e.keyCode == 68) {
            obj.right = true;
        }
        if (e.keyCode == 83) {
            obj.down = true;
        }
        if (e.keyCode == 32) {
            obj.action = true;
        }

       
    });

    document.addEventListener('keyup', function (e: any) {
        if (e.keyCode == 65) {
            obj.left = false;
        }
        if (e.keyCode == 87) {
            obj.up = false;
        }
        if (e.keyCode == 68) {
            obj.right = false;
        }
        if (e.keyCode ==  83) {
            obj.down = false;
        }
        if (e.keyCode == 32) {
            obj.action = false;
        }
        throw new Error();
        
        
    });
}