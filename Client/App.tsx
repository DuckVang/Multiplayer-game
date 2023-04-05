import React, { PropsWithRef, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import JoinButton from "./src/components/JoinButton";
import LobbyList from "./src/components/LobbyList";
import Chat from "./src/components/Chat";
import store, { RootState } from "./state/store";
import { useSelector } from "react-redux";

const StyledMain = styled.main`
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
  const isVisible = useSelector(
    (state: RootState) => state.visibility.mainpage
  );

  return (
    <>
      {/* <Chat /> */}
      <StyledMain className={`react-app ${!isVisible ? "notVisible" : ""}`}>
        <div className="left">
          <div className="head">
            <h1>Game name</h1>
          </div>
          <LobbyList />
          <JoinButton />
        </div>
        <div className="right"></div>
      </StyledMain>
      
    </>
  );
}
