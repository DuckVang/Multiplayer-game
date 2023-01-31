import * as PIXI from "pixi.js"
import "../../Demo/public/style.module.css";


import { Ball } from "../../Engine/src/components/Physical-Body/Ball";
import { userInput } from "./UserInput";
import { Wall } from "../../Engine/src/components/Physical-Body/Wall";
import MainLoop  from "../../Engine/src/Loops/MainLoop";
import { Box } from "../../Engine/src/components/Physical-Body/Box";
const app = new PIXI.Application({ resizeTo: window });


const ball = new Ball(100, 100, 30, 5)
const ball1 = new Ball(200, 100, 30, 5)
const wall = new Wall(50, 50, 1000, 50)
const box = new Box(100,100,200,200,100,20)



document.body.appendChild(app.view);
const container = new PIXI.Container()
app.stage.addChild(container)

//loop
userInput(ball)

MainLoop(container, 10)



