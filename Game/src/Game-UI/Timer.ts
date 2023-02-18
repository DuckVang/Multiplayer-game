import WORLD from "../World/GlobalWorld";
import { UI } from "./UIClass";
import { Text } from "pixi.js";
export class Timer extends UI {


    timeLeft: number
    text: Text
    constructor() {
        super()


        this.x = WORLD.app.renderer.width / 2
        this.y = 10 
        this.timeLeft = WORLD.timeLeft
        this.text = new Text(this.timeLeft.toString(), {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xff3110,
            align: 'center',
        });

        this.addChild(this.text)
    }

    update() {

        this.timeLeft = WORLD.timeLeft
        this.text.text = this.timeLeft

    }






}