import { Container} from "pixi.js"
import { World } from "../World/GlobalWorld"

export class UI extends Container{

    WORLD:World
    constructor(WORLD:World){
        super()
        this.WORLD = WORLD
    }

    update(){
        console.log("UI update")
    }
}