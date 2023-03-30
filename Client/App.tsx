import React from "react";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import JoinButton from "./src/components/JoinButton";
import LobbyList from "./src/components/LobbyList";
import Chat from "./src/components/Chat";
const StyledMain = styled.main`
  #pixi-app {
    display: none;
    position: static;
  }

  margin: auto;

  width: 450px;
  height: 300px;

  display: flex;

  .left {
    background-color: rgba(0, 0, 255, 0.152);
    flex: 1;
    display: flex;

    flex-direction: column;
    .head {
      text-align: center;
      height: 75px;
      font-size: 2rem;
    }
    button {
      width: 50%;
      margin: auto;
    }
  }
  .right {
    flex: 1;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Chat />
      <StyledMain className="react-app">
        <div className="left">
          <div className="head">
            <h1>Game name</h1>
          </div>
          <LobbyList />
          <JoinButton />
        </div>
        <div className="right"></div>
      </StyledMain>
      <div id="pixi-app"></div>
    </>
  );
}
