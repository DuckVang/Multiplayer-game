
import "../../Demo/public/style.module.css";
import { Player } from "./Game-Objects/Player";
import { TestBox } from "./Game-Objects/Test-Objects/Test-Box";
import { MapWall, PutWallAround } from "./Game-Objects/Map-Objects/MapWall";
import WORLD from "./World/GlobalWorld";
import { Minimap } from "./Game-UI/Minimap";
import { HealthBar } from "./Game-UI/HealthBar";
import { EnergyBar } from "./Game-UI/EnergyBar";
import { Timer } from "./Game-UI/Timer";
import { Zone } from "./Map-Object/Zone";





// const ball = new Ball(100, 100, 30, 5)
// const ball1 = new Ball(300, 100, 30, 5)
// const ball2 = new Ball(100, 100, 30, 5)

// const wall = new Wall(50, 50, 1000, 50)
// const box = new Box(100, 100, 200, 200, 100, 20)
// box.angKeyForce = 0.005

const testBox = new TestBox()
const player = new Player(0,0)
const player2 = new Player(0,100)


WORLD.AddUIObj(new Minimap())
WORLD.AddUIObj(new HealthBar())
WORLD.AddUIObj(new EnergyBar())
WORLD.AddUIObj(new Timer())


WORLD.AddMapObj(new Zone())

WORLD.SetPlayer(player)

PutWallAround(-5000,-5000,5000,5000)
// const container = new PIXI.Container()
// app.stage.addChild(container)

//loop
WORLD.SetPlayer(player)
WORLD.Start()

// export default WORLD
