import styled from "styled-components";
import GAME_CLIENT from "../../Networking/Client";
import WORLD from "../../game/src/World/GlobalWorld";

import { switchVisibilityOf } from "../../state/slices/visibility";
import { PagesType as PAGES_TYPES } from "../../state/types";
import store from "../../state/store";
import React from "react";

const StyledButton = styled.button`
  background-color: aliceblue;
`;

function JoinButton() {
  console.count()
  function HandleClick() {
     store.dispatch(switchVisibilityOf(PAGES_TYPES.MAINPAGE));
   const selected = store.getState().lobby.selectedLobby;
     if (!selected) return;

     GAME_CLIENT.Start();
    console.log("socket-after: ", GAME_CLIENT.socket.id);
    GAME_CLIENT.joinLobby(selected);
//
//append child by normal mean is maybe different in react 

//
     WORLD.append();
    // WORLD.createPlayer();
    // WORLD.Start();
  }
  return <StyledButton onClick={() => HandleClick()}>Join Game</StyledButton>;
}

export default JoinButton;
