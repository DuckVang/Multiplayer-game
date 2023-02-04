
import "../../Demo/public/style.module.css";
import { Player } from "./Game-Objects/Player";
import { TestBox } from "./Game-Objects/Test-Objects/Test-Box";
import { MapWall, PutWallAround } from "./Game-Objects/Map-Objects/MapWall";
import WORLD from "./World/World";
import { Minimap } from "./Game-UI/Minimap";
import World from "./World/WorldClass";
import { HealthBar } from "./Game-UI/HealthBar";
import { EnergyBar } from "./Game-UI/EnergyBar";
import { Timer } from "./Game-UI/Timer";
import { Zone } from "./Game-UI/Zone";





// const ball = new Ball(100, 100, 30, 5)
// const ball1 = new Ball(300, 100, 30, 5)
// const ball2 = new Ball(100, 100, 30, 5)

// const wall = new Wall(50, 50, 1000, 50)
// const box = new Box(100, 100, 200, 200, 100, 20)
// box.angKeyForce = 0.005

const testBox = new TestBox()
const player = new Player()


WORLD.AddUIObj(new Minimap())
WORLD.AddUIObj(new HealthBar())
WORLD.AddUIObj(new EnergyBar())
WORLD.AddUIObj(new Timer())
WORLD.AddUIObj(new Zone())

WORLD.SetPlayer(player)

PutWallAround(-5000,-5000,5000,5000)
// const container = new PIXI.Container()
// app.stage.addChild(container)

//loop
WORLD.SetPlayer(player)
WORLD.Start()

// export default WORLD
