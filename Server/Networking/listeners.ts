import { Socket } from "socket.io";
import { INTERACTIONS_TYPES, MSG_TYPES } from "../../Shared/Constants";
import Vector from "../../Engine/src/Math/Vector";
import Lobby from "./lobby";

import { GameServer } from ".";

export function addListeners(server: GameServer) {
  server.io.on("connection", (socket: Socket) => {
    console.log("made socket connection " + socket.id);

    socket.on(MSG_TYPES.JOIN_GAME, (data) => {
      server.Lobbies[data.lobby].AddSocket(socket);
      socket.emit(MSG_TYPES.PLAYER_LIST, {playersIDs: server.Lobbies[data.lobby].playersIDs})
      console.count("join_game")
    });
    socket.on(MSG_TYPES.CREATE_PLAYER, (data) => {
      server.Lobbies[data.lobby].CreatePlayer(socket);
      socket.broadcast
        .to(data.lobby)
        .emit(MSG_TYPES.NEW_PLAYER_JOINED, { socketID: socket.id });
        
    });

    socket.on("disconnect", (reason) => {
      console.log(reason + " from " + socket.id);
    });

    socket.on(MSG_TYPES.MESSAGE, (data) => {
      this.io.emit(MSG_TYPES.MESSAGE, {
        message: data + " from " + socket.id,
      });
    });

    socket.on(INTERACTIONS_TYPES.MOVEMENT, (data) => {
      console.log(data);
      const lobby = server.Lobbies[data.lobby];
      const { left, right, up, down } = data.directions;

      const player = lobby.players[socket.id];
      if (!player) return;

      player.left = left;
      player.right = right;
      player.up = up;
      player.down = down;
    });

    socket.on(INTERACTIONS_TYPES.MOUSE_CLICK, (data) => {
      const lobby = server.Lobbies[data.lobby];
      const { direction, selected } = data.mouse;
      const player = lobby.players[socket.id];
      if (!player) return;
      console.log(direction);
      player.CastSpell(new Vector(direction.x, direction.y), selected);
    });
  });
}
