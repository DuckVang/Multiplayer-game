import { Container} from "pixi.js"

export class UI extends Container{

    constructor(){
        super()
    }

    update(){
        console.log("UI Update")
    }
}