import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://localhost:4000/lobbies";

function LobbyList() {
  const [lobbies, setLobbies] = useState(["Lobby1", "Lobby2", "Lobby3"]);
  //   useEffect(() => {
  //     axios.get(baseURL).then((response: any) => {
  //       setLobbies(response);
  //     });
  //   });


  return (
    <select name="lobbies" id="lobbies" multiple>
      {lobbies.map((lobby) => {
        return <option value={lobby} key={lobby}>{lobby}</option>;
      })}
    </select>
  );
}


export default LobbyList
