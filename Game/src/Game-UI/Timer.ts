import { World } from "../World/GlobalWorld";
import { UI } from "./UIClass";
import { Text } from "pixi.js";
import { ShrinkZone } from "../Game-Logic/Zone";
export class Timer extends UI {


    timeLeft: number
    textBox: Text

    isShrinking: boolean

    

    constructor(WORLD: World) {
        super(WORLD)
    


        this.x = this.WORLD.app.renderer.width / 2
        this.y = 10
        this.timeLeft = this.WORLD.timeLeft

        this.isShrinking = false

        this.textBox = new Text(this.timeLeft.toString(), {
            fontFamily: 'Arial',
            fontSize: 23,
            fill: 0xff3110,
            align: 'center',
        });

        this.addChild(this.textBox)
    }

    update() {

        this.timeLeft = this.WORLD.timeLeft
        if (!this.isShrinking)
            this.textBox.text = this.timeLeft
        else
            this.textBox.text = "ZONE !"

    }






}