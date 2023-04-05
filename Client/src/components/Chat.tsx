import React, { useState } from "react";
import styled from "styled-components";

import GAME_CLIENT from "../../Networking/Client";
import { MSG_TYPES } from "../../../Shared/Constants";

const StyledChat = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  .Chat-Box {
    min-height: 100px;
    max-height: 100px;
    overflow: scroll;
  }
`;

function Chat() {
  const [chatMessages, setChatMessages] = useState([
    "piog",
    "piog",
    "piog",
    "piog",
    "piog",
  ]);
  const [message, setMessage] = useState("");
  GAME_CLIENT.socket.on(MSG_TYPES.MESSAGE, (data:{message: string}) =>
    setChatMessages([...chatMessages, data.message])
  );
  function SendMessage() {
    GAME_CLIENT.socket.emit(MSG_TYPES.MESSAGE, message);
    setChatMessages([...chatMessages, message]);
    setMessage("");
  }
  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  return (
    <StyledChat>
      <ul className="Chat-Box">
        {chatMessages.map((message,index) => {
          return <li key={index}> {message}</li>;
        })}
      </ul>
      <div className="Send-Box">
        <input type="text" value={message} onChange={HandleChange} />
        <button onClick={SendMessage}>Enter</button>
      </div>
    </StyledChat>
  );
}

export default Chat;
