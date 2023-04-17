import styled from "styled-components";
import GAME_CLIENT from "../../Networking/Client";
import WORLD from "../../game/src/World/GlobalWorld";

import { switchVisibilityOf } from "../../state/slices/visibility";
import { PagesType as PAGES_TYPES } from "../../state/types";
import store from "../../state/store";
import React from "react";
import { StartWorld } from "../../game/src";
import { AddListeners } from "../../Networking/listeners";

const StyledButton = styled.button`
  background-color: aliceblue;
`;

function JoinButton() {
  function HandleClick() {
    store.dispatch(switchVisibilityOf(PAGES_TYPES.MAINPAGE));
    const selected = store.getState().lobby.selectedLobby;
    if (!selected) return;

    GAME_CLIENT.ConnectToLobby(selected, () => {
      console.log(GAME_CLIENT.socket);
      console.log("socket-after: ", GAME_CLIENT.socket.id);

      const world = StartWorld();
      AddListeners(world, GAME_CLIENT);
    });
  }
  return <StyledButton onClick={() => HandleClick()}>Join Game</StyledButton>;
}

export default JoinButton;
