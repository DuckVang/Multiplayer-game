import { Socket } from "socket.io";
import { Constants } from "../../Shared/Constants";
import Vector from "../../Engine/src/Math/Vector";
import Lobby from "./lobby";
import { Server } from "http";
import { GameServer } from ".";

export function addListeners(server: GameServer) {
  this.io.on("connection", (socket: Socket) => {
    console.log("made socket connection " + socket.id);

    socket.on(Constants.MSG_TYPES.JOIN_GAME, (data) => {
      server.Lobbies[data.lobby].AddSocket(socket);
      
    });

    socket.on("disconnect", (reason) => {
      console.log(reason + " from " + socket.id);
    });

    socket.on(Constants.MSG_TYPES.MESSAGE, (data) => {
      console.log(data);
      this.io.emit(Constants.MSG_TYPES.MESSAGE, {
        message: data + " from " + socket.id,
      });
    });


    socket.on(Constants.INTERACTIONS.MOVEMENT, (data) => {
      const room = this.rooms[data.room];
      const { left, right, up, down } = data.directions;

      room.players[socket.id].left = left;
      room.players[socket.id].right = right;
      room.players[socket.id].up = up;
      room.players[socket.id].down = down;
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
}
