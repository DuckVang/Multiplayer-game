import React from "react";
import styled from "styled-components";
import WORLD from "../../game/src/World/GlobalWorld";

const StyledButton = styled.button`
  background-color: aliceblue;
`;

function JoinButton() {
  return <StyledButton onClick={HandleClick}>Join Game</StyledButton>;
}

function HandleClick() {
  WORLD.createPlayer();
  WORLD.Start();
  console.log("game started")
}
