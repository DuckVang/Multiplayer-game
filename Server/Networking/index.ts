import express from "express";
import { Socket, Server } from "socket.io";
import { createServer } from "http";
import cors from "cors"
import { Player } from "../Game-Server/src/Game-Objects/Player";
import types from "../types";

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
                console.log(players[socket.id])
                console.log(socket.id + " created")

            })

            //
            //later put into server loop
            //

            // socket.on("UpdatePlayers", (player) => {


            //     console.log(socket.id + ": " + player.pos)
            //     socket.broadcast.emit("UpdatePlayers", { player: players, Objects: [] })
            // })
            // socket.on("UpdateObjects", (objects) => {
            //     console.log(objects)
            // })



            socket.on("sendMessServer", (data) => {
                messages.push(data)
                console.log(messages)
            })


            socket.on("userCommands", (data) => {

                players[socket.id].left = data.left
                players[socket.id].right = data.right
                players[socket.id].up = data.up
                players[socket.id].down = data.down

                console.log(players[socket.id].left, players[socket.id].right, players[socket.id].up, players[socket.id].down)



            })
        })
        this.serverLoop()
    }
    static serverLoop() {

        setInterval(() => {

            let playersComp = Object.keys(players).reduce((result: any, key: string) => {
                result[key] = players[key].comp
                return result
            }, {})

            
            io.emit("updatePlayers", playersComp)
            console.count("server loop")
            console.log(playersComp)
        }, 1000)
    }
}

export default GameServer