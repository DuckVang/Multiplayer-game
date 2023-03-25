import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
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
    dispatch(switchVisibilityOf(PagesType.GAME));
    console.log("game started");
  }
  return <StyledButton onClick={HandleClick}>Join Game</StyledButton>;

}

export default JoinButton;
