import styled from "styled-components";
import GAME_CLIENT from "../../Networking/Client";
import WORLD from "../../game/src/World/GlobalWorld";

import { switchVisibilityOf } from "../../state/slices/visibility";
import { PagesType as PAGES_TYPES } from "../../state/types";
import store from "../../state/store";
import React from "react";
import { StartGame } from "../../game/src";

const StyledButton = styled.button`
  background-color: aliceblue;
`;

function JoinButton() {
  function HandleClick() {
    
    store.dispatch(switchVisibilityOf(PAGES_TYPES.MAINPAGE));
    const selected = store.getState().lobby.selectedLobby;
    if (!selected) return;

    GAME_CLIENT.Start();
    console.log("socket-after: ", GAME_CLIENT.socket.id);
    GAME_CLIENT.joinLobby(selected);

    StartGame();
  }
  return <StyledButton onClick={() => HandleClick()}>Join Game</StyledButton>;
}

export default JoinButton;
