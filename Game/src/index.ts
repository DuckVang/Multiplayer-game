
import "../../Demo/public/style.module.css";
import { Player } from "./Game-Objects/Player";
import { TestBox } from "./Game-Objects/Test-Objects/Test-Box";
import { World } from "./World";

const WORLD = new World()

// const ball = new Ball(100, 100, 30, 5)
// const ball1 = new Ball(300, 100, 30, 5)
// const ball2 = new Ball(100, 100, 30, 5)

// const wall = new Wall(50, 50, 1000, 50)
// const box = new Box(100, 100, 200, 200, 100, 20)
// box.angKeyForce = 0.005
const testBox = new TestBox()
const player = new Player()

// const container = new PIXI.Container()
// app.stage.addChild(container)

//loop
WORLD.SetViewTo(player)
WORLD.Loop()

