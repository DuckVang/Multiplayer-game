import express from "express";
import { Socket, Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import { Player } from "../Game-Server/src/Game-Objects/Player";
import { Constants } from "../../Shared/Constants";
import WORLD from "../Game-Server/src/World/GlobalWorld";
import Vector from "../../Engine/src/Math/Vector";
import { IGameBody } from "../Game-Server/src/Game-Objects/IGameBody";
import { Circle } from "pixi.js";
import { IShape, Shape } from "../../Engine/src/components/Shapes/Shape";
import Lobby from "./lobby";

//set up express app
const DefaultRoom = new Lobby("defaultLobby");
const Lobby1 = new Lobby("lobby1");
const Lobby2 = new Lobby("lobby2");

const Lobbies: { [key: string]: Lobby } = {
  [DefaultRoom.name]: DefaultRoom,
  [Lobby1.name]: Lobby1,
  [Lobby2.name]: Lobby2,
};

const app = express();
const server = createServer(app);

class GameServer {
  ips: string[];
  rooms: { [key: string]: Lobby };
  players: { [key: string]: Player };
  objects: IGameBody[];

  messages: any[];

  io: Server;

  constructor() {
    this.ips = [];
    this.rooms = {};
    this.players = {};
    this.objects = [];
    this.messages = [];

    this.io = new Server(server, { cors: { origin: "*" } });
  }

  start() {
    app.use(cors());

    app.get("/", function (req, res) {
      res.send({ message: "hey bro", rooms: this.rooms });
    });

    server.listen(process.env.port || 4000, function () {
      console.log(
        "Pog server is now listening for requests: " +
          "http://localhost:" +
          4000
      );
    });

    this.io.on("connection", (socket: Socket) => {
      console.log("made socket connection " + socket.id);

      socket.emit(Constants.MSG_TYPES.AVL_LOBBIES, {
        lobbies: Object.keys(Lobbies),
      });

      // DefaultRoom.AddSocket(socket);
      socket.on(Constants.MSG_TYPES.JOIN_GAME, (data) => {
        Lobbies[data.lobbyName].AddSocket(socket);
      });

      socket.on(Constants.MSG_TYPES.MESSAGE, (data) => {
        console.log(data);
        this.io.emit(Constants.MSG_TYPES.MESSAGE, {
          message: data + " from " + socket.id,
        });
      });
      socket.on("disconnect", (reason) => {
        console.log(reason + " from " + socket.id);
      });

      socket.on(Constants.INTERACTIONS.MOVEMENT, (data) => {
        const room = this.rooms[data.room];
        const { left, right, up, down } = data.directions;

        room.players[socket.id].left = left;
        room.players[socket.id].right = right;
        room.players[socket.id].up = up;
        room.players[socket.id].down = down;

        // console.log(players[socket.id])
        // console.log()

        // console.log(players[socket.id].left, players[socket.id].right, players[socket.id].up, players[socket.id].down)
      });

      socket.on(Constants.INTERACTIONS.MOUSE_CLICK, (data) => {
        const room = this.rooms[data.room];
        const { direction, selected } = data.mouse;
        room.players[socket.id].CastSpell(
          new Vector(direction.x, direction.y),
          selected
        );
      });
    });

    // this.serverLoop();
  }
  serverLoop() {
    const LOW_LIMIT = 0.0167; // Keep At/Below 60fps
    const HIGH_LIMIT = 0.1;
    let lastUpdateTime: number;
    setInterval(() => {
      const now = Date.now();
      let dt = (now - lastUpdateTime) / 1000;
      if (dt < LOW_LIMIT) dt = LOW_LIMIT;
      else if (dt > HIGH_LIMIT) dt = HIGH_LIMIT;

      lastUpdateTime = now;

      WORLD.Loop(dt);

      const playersComp = returnObjectsOnlyWith(this.players, "comp");
      const objectsComp = this.objects.map((obj) => obj.comp);
      const update: {
        players: { [key: string]: Circle };
        objects: IShape[];
      } = {
        players: playersComp,
        objects: objectsComp,
      };

      this.io.emit(Constants.MSG_TYPES.GAME_UPDATE, update);

      // console.count("server loop")
      // console.log("FPS: " + 1 / dt)
    }, 0);
  }
}

function returnObjectsOnlyWith(dict: any, property: any) {
  let playersComp = Object.keys(dict).reduce((result: any, key: string) => {
    result[key] = dict[key][property];
    return result;
  }, {});

  return playersComp;
}
const gameServer = new GameServer();
export default gameServer;
