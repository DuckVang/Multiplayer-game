import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
const StyledApp = styled.div`
  #pixi-app {
    display: none;
    position: static;
  }

  main {
    margin: auto;

    width: 450px;
    height: 300px;

    display: flex;

    .left {
      background-color: rgba(0, 0, 255, 0.152);
      flex: 1;
      display: flex;

      flex-direction: column;
      button {
      }
    }
    .right {
      flex: 1;
    }
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp className="react-app">
        <main>
          <div className="left">
            <h1>Game name</h1>
            <button>Join Game</button>
          </div>
          <div className="right"></div>

          <div id="pixi-app"></div>
        </main>
      </StyledApp>
    </>
  );
}
