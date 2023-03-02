

import { io, Socket } from "socket.io-client";
let instance: Client
class Client {

    socket: Socket
    constructor() {
        if (!instance) instance = this
        this.socket = io("http://localhost:4000")
        

    }


}
const client = new Client()
export default client;