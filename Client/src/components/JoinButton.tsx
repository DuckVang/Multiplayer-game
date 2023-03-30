import React from "react";
import { useDispatch } from "react-redux";
import { Socket } from "socket.io";
import styled from "styled-components";
import { Constants } from "../../../Shared/Constants";
import CLIENT from "../../game/Networking/socket";
import WORLD from "../../game/src/World/GlobalWorld";

import { switchVisibilityOf } from "../../state/slices/visibility";
import { PagesType } from "../../state/types";

const StyledButton = styled.button`
  background-color: aliceblue;
`;

function JoinButton() {
  const dispatch = useDispatch();
  function HandleClick() {
    //   WORLD.createPlayer();
    //   WORLD.Start();
    // dispatch(switchVisibilityOf(PagesType.GAME));

    CLIENT.socket.emit("message", "hello from")
   
  }
  return <StyledButton onClick={HandleClick}>Join Game</StyledButton>;

}

export default JoinButton;
