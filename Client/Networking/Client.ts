import { io, Socket } from "socket.io-client";
import WORLD from "../../Game/src/World/GlobalWorld";
import { EVENT, MSG_TYPES } from "../../Shared/Constants";
import { Player } from "../game/src/Player";
import { useSelector } from "react-redux";
import store from "../state/store";

// import instance from "../Game-Client/src/World/GlobalWorld";

let instance: Client;
class Client {
  gameUpdate: any;

  socket: Socket;
 constructor() {
  this.socket = null
 }
  Start() {
    console.log("client is alive pog");
    if (!instance) instance = this;
    this.socket = io("http://localhost:4000");

    this.socket.on("serverToClient", (data) => {
      alert(data);
      this.socket.emit("clientToServer", "Hello from " + this.socket.id);
    });

    this.socket.on(
      MSG_TYPES.GAME_UPDATE,
      (data: { players: { [key: string]: Player }; objects: any[] }) => {
        this.gameUpdate = data;
      }
    );
    this.socket.on(MSG_TYPES.MESSAGE, (data) => {
      console.log(data);
    });
  }
  joinLobby(lobby: string) {
    this.socket.emit(MSG_TYPES.JOIN_GAME, { lobby: lobby });
  }

  emitToLobby(event: EVENT, object?: any) {
    this.socket.emit(event, {
      ...object,
      lobby: store.getState().lobby.selectedLobby,
    });
  }
}
const GAME_CLIENT = new Client();
export default GAME_CLIENT;
