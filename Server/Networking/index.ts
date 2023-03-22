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

//set up express app

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

class GameServer {
  ips: string[];
  players: { [key: string]: Player };
  objects: IGameBody[];

  messages: any[];

  constructor() {
    this.ips = [];
    this.players = {};
    this.objects = [];
    this.messages = [];
  }

  start() {
    app.use(cors());

    app.get("/", function (req, res) {
      // this.ips.push(req.ip)

      // res.send("hello world" + this.ips)
      res.send("hello world");
    });

    server.listen(process.env.port || 4000, function () {
      console.log(
        "Pog server is now listening for requests: " +
          "http://localhost:" +
          4000
      );
    });

    io.on("connection", (socket: Socket) => {
      console.log("made socket connection " + socket.id);

      socket.emit("serverToClient", "Hello from server betch");

      socket.on("clientToServer", (data) => {
        console.log(data);
      });
      socket.on("createPlayer", () => {
        this.players[socket.id] = new Player(
          WORLD.width / 2,
          WORLD.height / 2,
          socket.id
        );

        socket.emit(Constants.MSG_TYPES.JOIN_GAME, socket.id);
      });

      socket.on("sendMessServer", (data) => {
        this.messages.push(data);
        console.log(this.messages);
      });

      socket.on(Constants.INTERACTIONS.MOVEMENT, (data) => {
        const { left, right, up, down } = data;

        this.players[socket.id].left = left;
        this.players[socket.id].right = right;
        this.players[socket.id].up = up;
        this.players[socket.id].down = down;

        // console.log(players[socket.id])
        // console.log()

        // console.log(players[socket.id].left, players[socket.id].right, players[socket.id].up, players[socket.id].down)
      });
      socket.on(Constants.INTERACTIONS.MOUSE_CLICK, (data) => {
        const { direction, selected } = data;
        this.players[socket.id].CastSpell(
          new Vector(direction.x, direction.y),
          selected
        );
      });
    });
    this.serverLoop();
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

      io.emit(Constants.MSG_TYPES.GAME_UPDATE, update);

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
