import React from "react";
import { useDispatch } from "react-redux";
import { Socket } from "socket.io";
import styled from "styled-components";
import { Constants } from "../../../Shared/Constants";
import CLIENT from "../../Networking/Client";
import WORLD from "../../game/src/World/GlobalWorld";

import { switchVisibilityOf } from "../../state/slices/visibility";
import { PagesType } from "../../state/types";
import store from "../../state/store";


const StyledButton = styled.button`
  background-color: aliceblue;
`;

function JoinButton() {
  function HandleClick() {
    //   WORLD.createPlayer();
    //   WORLD.Start();
    // dispatch(switchVisibilityOf(PagesType.GAME));
    const selected = store.getState().lobby.selectedLobby;
    if (!selected) return;

    CLIENT.joinLobby(selected);
  }
  return <StyledButton onClick={HandleClick}>Join Game</StyledButton>;
}

export default JoinButton;
