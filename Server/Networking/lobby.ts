import { Socket } from "socket.io";
import gameServer from ".";
import { Constants } from "../../Shared/Constants";
import { IGameBody } from "../Game-Server/src/Game-Objects/IGameBody";
import { Player } from "../Game-Server/src/Game-Objects/Player";
import { World } from "../Game-Server/src/World/GlobalWorld";

class Lobby {
  name: string;
  GAME: World;

  players: { [key: string]: Player };
  objects: IGameBody[];
  constructor(name: string) {
    this.name = name;
    
  }
  AddSocket(socket: Socket) {
    socket.join(this.name);
    this.SendMessage()
  }
  SendMessage() {
    this.EmitToRoom(Constants.MSG_TYPES.MESSAGE, "hi from" + this.name);
  }
  update() {

  }


  private EmitToRoom(action: string, data: any = null) {
    gameServer.io.to(this.name).emit(action, data);
  }
}
export default Lobby;
