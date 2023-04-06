import express from "express";
import { Socket, Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import { Player } from "../Game-Server/src/Game-Objects/Player";

import Vector from "../../Engine/src/Math/Vector";
import { IGameBody } from "../Game-Server/src/Game-Objects/IGameBody";
import Lobby from "./lobby";
import { addListeners } from "./listeners";

require("dotenv").config();

//set up express app
const DefaultRoom = new Lobby("defaultLobby");
// const Lobby1 = new Lobby("lobby1");
// const Lobby2 = new Lobby("lobby2");

DefaultRoom.Start();

const app = express();
const server = createServer(app);

export class GameServer {
  ips: string[];
  rooms: { [key: string]: Lobby };


  Lobbies: { [key: string]: Lobby };

  messages: any[];

  io: Server;

  constructor() {
    this.io = new Server(server, { cors: { origin: "*" } });

    this.ips = [];
    this.rooms = {};
    
    
    this.messages = [];
    this.Lobbies = {
      [DefaultRoom.name]: DefaultRoom,
      // [Lobby1.name]: Lobby1,
      // [Lobby2.name]: Lobby2,
    };

    addListeners(this);
  }

  start() {
    app.use(cors());

    // app.get("/", function (req, res) {
    //   res.send({ message: "hey bro", rooms: this.rooms });
    // });

    app.get("/lobbies", (req, res) => {
      res.send({ lobbies: Object.keys(this.Lobbies) });
    });

    server.listen(process.env.port || 4000, function () {
      console.log(
        `Pog server is now listening for requests: http://localhost:${
          process.env.port || 4000
        }`
      );
    });

 
  }
}

function returnObjectsOnlyWith(dict: any, property: any) {
  let playersComp = Object.keys(dict).reduce((result: any, key: string) => {
    result[key] = dict[key][property];
    return result;
  }, {});

  return playersComp;
}
const GAME_SERVER = new GameServer();

export default GAME_SERVER;
