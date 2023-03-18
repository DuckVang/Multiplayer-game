

import { io, Socket } from "socket.io-client";
import WORLD from "../../Game/src/World/GlobalWorld";
import { Constants } from "../../Shared/Constants";
import {Player} from "../Game-Client/src/Player";
import STATE from "../State";
// import instance from "../Game-Client/src/World/GlobalWorld";
let instance: Client
class Client {

    gameUpdate: any

    socket: Socket
    constructor() {
        console.log("client is alive pog")
        if (!instance) instance = this
        this.socket = io("http://localhost:4000")

        this.socket.on("serverToClient", (data) => {


            alert(data)
            this.socket.emit("clientToServer", "Hello from " + this.socket.id)


        })

        this.socket.on(Constants.MSG_TYPES.GAME_UPDATE, (data) => {

            this.gameUpdate = data

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