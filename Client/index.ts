import WORLD from "../Game/src/World/GlobalWorld";
import { io } from "socket.io-client";
import Vector from "../Engine/src/Math/Vector";
import { TestBox } from "../Game/src/Game-Objects/Test-Objects/Test-Box";
import { Player } from "../Game/src/Game-Objects/Player";
const socket = io("http://localhost:4000");
console.log("Pog client is alive")
socket.on("serverToClient", (data) => {


    alert(data)
    socket.emit("clientToServer", "Hello from " + socket.id)


})
socket.on("UpdatePlayer", (player) => {



})

let spawn = new Vector(WORLD.width / 2, WORLD.height / 2)
const testBox = new TestBox(spawn.x + 100, spawn.y + 200)
const player = new Player(spawn.x + 100, spawn.y + 100)
socket.emit("newPlayer", player)
player.m = 100
const player2 = new Player(spawn.x, spawn.y)
player2.m = 10
WORLD.initUI()
WORLD.SetPlayer(player)
WORLD.Start()