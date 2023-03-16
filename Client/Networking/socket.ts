

import { io, Socket } from "socket.io-client";
// import instance from "../Game-Client/src/World/GlobalWorld";
let instance: Client
class Client {



    socket: Socket
    constructor() {
        console.log("client is alive pog")
        if (!instance) instance = this
        this.socket = io("http://localhost:4000")

        this.socket.on("serverToClient", (data) => {


            alert(data)
            this.socket.emit("clientToServer", "Hello from " + this.socket.id)


        })

        this.socket.on("UpdateState", (data) => {

            instance.updatePlayer(data.player)
            instance.updateObjects(data.Objects)

        })
        this.socket.on("updatePlayers", (data) => {

            console.log(data)
        })

    }


    updatePlayer(player: any) {

        this.socket.emit("UpdatePlayer", player)
    }
    updateObjects(objects: any) {
        this.socket.emit("UpdateObjects", objects)
    }
    send(data: any) {
        this.socket.emit("sendMessServer", data)
        console.log("sent =" + data)
    }


}
const CLIENT = new Client()
export default CLIENT;