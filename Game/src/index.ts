
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
import { TestPyramid } from "./Game-Objects/Test-Objects/Test-Pyramid";
import Vector from "../../Engine/src/Math/Vector";






// const ball = new Ball(100, 100, 30, 5)
// const ball1 = new Ball(300, 100, 30, 5)
// const ball2 = new Ball(100, 100, 30, 5)

// const wall = new Wall(50, 50, 1000, 50)
// const box = new Box(100, 100, 200, 200, 100, 20)
// box.angKeyForce = 0.005

let spawn = new Vector(WORLD.width / 2, WORLD.height / 2)
const testBox = new TestBox(spawn.x + 100, spawn.y + 200)

const player = new Player(spawn.x + 100, spawn.y + 100)
player.m = 100
const player2 = new Player(spawn.x, spawn.y)
player2.m = 100

WORLD.initUI()





WORLD.SetPlayer(player)


//loop
WORLD.SetPlayer(player)
WORLD.Start()

// export default WORLD
