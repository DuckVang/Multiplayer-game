import { Socket } from "socket.io";
import gameServer from ".";
import { Circle } from "../../Engine/src/components/Shapes/Circle";
import { IShape } from "../../Engine/src/components/Shapes/Shape";
import { Constants } from "../../Shared/Constants";
import { IGameBody } from "../Game-Server/src/Game-Objects/IGameBody";
import { Player } from "../Game-Server/src/Game-Objects/Player";
import { World } from "../Game-Server/src/World/GlobalWorld";
import { returnObjectsOnlyWith } from "../utils";

class Lobby {
  name: string;
  GAME: World;

  players: { [key: string]: Player };
  objects: IGameBody[];
  SPELL_PROJ: any;
  constructor(name: string) {
    this.name = name;
    this.objects = [];
    this.players = {};
    this.GAME = new World(10000, 10000);
  }
  AddSocket(socket: Socket) {
    socket.join(this.name);
    console.log(socket.id + " joined to " + this.name);
    // this.SendMessage()
  }
  SendMessage() {
    this.EmitToRoom(Constants.MSG_TYPES.MESSAGE, "hi from" + this.name);
  }
  private ServerLoop() {
    const LOW_LIMIT = 0.0167; // Keep At/Below 60fps
    const HIGH_LIMIT = 0.1;
    let lastUpdateTime: number;
    setInterval(() => {
      const now = Date.now();
      let dt = (now - lastUpdateTime) / 1000;
      if (dt < LOW_LIMIT) dt = LOW_LIMIT;
      else if (dt > HIGH_LIMIT) dt = HIGH_LIMIT;

      lastUpdateTime = now;

      this.GAME.Loop(dt);

      
        const playersComp = returnObjectsOnlyWith(this.players, "comp");
      const objectsComp = this.objects.map((obj) => obj.comp);
      const update: {
        players: { [key: string]: Circle };
        objects: IShape[];
      } = {
        players: playersComp,
        objects: objectsComp,
      };

      this.EmitToRoom(Constants.MSG_TYPES.GAME_UPDATE, update);

      // console.count("server loop")
      // console.log("FPS: " + 1 / dt)
    }, 0);
  }

  Start() {
    this.ServerLoop();
  }

  private EmitToRoom(action: string, data: any = null) {
    gameServer.io.to(this.name).emit(action, data);
  }
}
export default Lobby;
