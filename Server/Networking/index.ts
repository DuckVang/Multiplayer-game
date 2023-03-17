import express from "express";
import { Socket, Server } from "socket.io";
import { createServer } from "http";
import cors from "cors"
import { Player } from "../Game-Server/src/Game-Objects/Player";
import types from "../types";
import { Constants } from "../Game-Server/src/Constants";
import WORLD from "../Game-Server/src/World/GlobalWorld";
import Vector from "../../Engine/src/Math/Vector";

//set up express app
const ips: string[] = []

const players: any = {}
const messages: any[] = []

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });


class GameServer {
    static start() {
        app.use(cors())

        app.get("/", function (req, res) {
            ips.push(req.ip)

            res.send("hello world" + ips)
        }
        );



        server.listen(process.env.port || 4000, function () {
            console.log("Pog server is now listening for requests: " + "http://localhost:" + 4000);
        }
        );


        io.on("connection", (socket: Socket) => {
            console.log("made socket connection " + socket.id);

            socket.emit("serverToClient", "Hello from server betch")

            socket.on("clientToServer", (data) => {
                console.log(data)

            })
            socket.on("createPlayer", () => {
                players[socket.id] = new Player(0, 0)

                socket.emit(Constants.MSG_TYPES.JOIN_GAME, socket.id)

            })



            socket.on("sendMessServer", (data) => {
                messages.push(data)
                console.log(messages)
            })


            socket.on("userCommands", (data) => {
                console.log(data)
                players[socket.id].left = data.left
                players[socket.id].right = data.right
                players[socket.id].up = data.up
                players[socket.id].down = data.down

                // console.log(players[socket.id])
                // console.log()

                // console.log(players[socket.id].left, players[socket.id].right, players[socket.id].up, players[socket.id].down)



            })
        })
        this.serverLoop()
    }
    static serverLoop() {

        setInterval(() => {
            console.log("BODIES: " + WORLD.engine.BODIES.length)
            
            if (WORLD.engine.BODIES[0] != undefined) {
                // WORLD.engine.BODIES[0].vel = new Vector(1,0)
                console.log(WORLD.engine.BODIES[0].pos.x)
                // console.log(WORLD.engine.BODIES[0].left)
                // console.log(WORLD.engine.BODIES[0])
            }
            
            WORLD.Loop()
            // for (const key in players) {
            //     console.log(players[key].pos)
            // }

            const playersComp = returnObjectsOnlyWith(players, "comp")

            // for (const key in playersComp) {
            //     console.log(players[key].comp.pos)
            // }
            const update = {
                players: playersComp
            }


            io.emit(Constants.MSG_TYPES.GAME_UPDATE, update)

            console.count("server loop")
            // console.log(playersComp)

        }, 100000)
    }
}

function returnObjectsOnlyWith(dict: any, property: any) {

    let playersComp = Object.keys(dict).reduce((result: any, key: string) => {
        result[key] = dict[key][property]
        return result
    }, {})

    return playersComp


}

export default GameServer