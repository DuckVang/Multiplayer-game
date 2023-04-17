import { io, Socket } from "socket.io-client";
import WORLD from "../../Game/src/World/GlobalWorld";
import { EVENT, MSG_TYPES } from "../../Shared/Constants";
import { MainPlayer } from "../game/src/Player";
import { useSelector } from "react-redux";
import store from "../state/store";
import { Update } from "../../Shared/CommunicationForm";
import World from "../game/src/World/GlobalWorld";

// import instance from "../Game-Client/src/World/GlobalWorld";

let instance: Client;
export class Client {
  gameUpdate: Update;

  socket: Socket;
  constructor() {}

  ConnectToLobby(lobby: string, callback: Function) {
    if (!instance) instance = this;
    this.socket = io("http://localhost:4000");
    this.socket.on("connect", () => {
      this.socket.emit(MSG_TYPES.JOIN_GAME, { lobby: lobby });

      callback();
    });
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
