import MainLoop from "../../Engine/src/Loops/MainLoop"
import { Shape } from "../../Engine/src/components/Shapes/Shape"
import { Ball } from "../../Engine/src/components/Physical-Body/Ball"
import * as PIXI from "pixi.js"
import "../../Demo/public/style.module.css";
import { Wall } from "../../Engine/src/components/Physical-Body/Wall";
import { Box } from "../../Engine/src/components/Physical-Body/Box";
import { userInput } from "../../Demo/src/UserInput";
import { Viewport } from "pixi-viewport"
import { Player } from "./Game-Objects/Player";

const app = new PIXI.Application({ resizeTo: window });
document.body.appendChild(app.view);

const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,

    interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
})
app.stage.addChild(viewport)
viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate()

const ball = new Ball(100, 100, 30, 5)
const ball1 = new Ball(300, 100, 30, 5)
const ball2 = new Ball(100, 100, 30, 5)

const wall = new Wall(50, 50, 1000, 50)
const box = new Box(100, 100, 200, 200, 100, 20)
box.angKeyForce = 0.005

const player = new Player(ball)

// const container = new PIXI.Container()
// app.stage.addChild(container)

//loop

MainLoop(viewport, 10)

