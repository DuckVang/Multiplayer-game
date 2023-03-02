
const obj = WORLD.player
let justPressed = false
document.addEventListener('keydown', function(e){
    if(e.code === "ArrowLeft"){
        if(obj.left === false){
            justPressed = true;
        }
        obj.left = true;
    }
    if(e.code === "ArrowUp"){
        if(obj.up === false){
            justPressed = true;
        }
        obj.up = true;
    }
    if(e.code === "ArrowRight"){
        if(obj.right === false){
            justPressed = true;
        }
        obj.right = true;
    }
    if(e.code === "ArrowDown"){
        if(obj.down === false){
            justPressed = true;
        }
        obj.down = true;
    }
    if(e.code === "Space"){
        if(obj.action === false){
            justPressed = true;
        }
        obj.action = true;
    }
    if (justPressed === true){
        emitUserCommands(obj);
        justPressed = false;
    }
});