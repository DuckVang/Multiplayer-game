import express from "express";
import { Socket, Server } from "socket.io";
import { createServer } from "http";
import cors from "cors"

//set up express app
const ips: string[] = []

const players: any = []
const messages: any[] = []

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
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
    socket.on("newPlayer", (player) => {
        players.push(player[socket.id])
        console.log(players)
        io.emit("UpdatePlayer", players)

    })
    socket.on("UpdatePlayer", (player) => {
        console.log(player)
    })
    socket.on("UpdateObjects", (objects) => {
        console.log(objects)
    })
    socket.on("sendMessServer", (data) => {
        messages.push(data)
        console.log(messages)
    })
})