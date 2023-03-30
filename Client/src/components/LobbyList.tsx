import axios from "axios";
import React, { useEffect, useState } from "react";
import { Constants } from "../../../Shared/Constants";
import CLIENT from "../../game/Networking/socket";

const baseURL = "https://localhost:4000/lobbies";

function LobbyList() {
  const [lobbies, setLobbies] = useState([]);

console.log(lobbies)
  //   useEffect(() => {
  //     axios.get(baseURL).then((response: any) => {
  //       setLobbies(response);
  //     });
  //   });
  CLIENT.socket.on(Constants.MSG_TYPES.AVL_LOBBIES, (data) => {
    console.log(data)
    setLobbies([...data.lobbies]);
  });

  return (
    <select name="lobbies" id="lobbies" multiple>
      {
      lobbies.map((lobby) => {
        return (
          <option value={lobby} key={lobby}>
            {lobby}
          </option>
        );
      })}
    </select>
  );
}

export default LobbyList;
