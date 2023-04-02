import axios from "axios";
import React, { useEffect, useState } from "react";
import { Constants } from "../../../Shared/Constants";
import CLIENT from "../../game/Networking/socket";

const baseURL = "https://localhost:4000/lobbies";

function LobbyList() {
  const [lobbies, setLobbies] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch("http://localhost:4000/lobbies")).json();
  
      setLobbies(data.lobbies);
    };
    dataFetch();
  }, []);

  return (
    <select name="lobbies" id="lobbies" multiple>
      {lobbies.map((lobby) => {
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
