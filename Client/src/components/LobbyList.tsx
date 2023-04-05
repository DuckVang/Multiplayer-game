import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import GAME_CLIENT from "../../Networking/Client";
import store from "../../state/store";
import { SelectLobby } from "../../state/slices/lobby";
const baseURL = "https://localhost:4000/lobbies";

function LobbyList() {
  const [lobbies, setLobbies] = useState([]);
  const [lobby, setLobby] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch("http://localhost:4000/lobbies")).json();

      setLobbies(data.lobbies);
    };
    dataFetch();
  }, []);

  return (
    <>
      <select name="lobbies" id="lobbies" onChange={HandleChange}>
        <option disabled selected value="select">
          -- select an option --
        </option>

        {lobbies.map((lobby) => {
          return (
            <option value={lobby} key={lobby}>
              {lobby}
            </option>
          );
        })}
      </select>
      <button onClick={Select}>Select</button>
    </>
  );
  function HandleChange(e: any) {
    setLobby(e.target.value);
  }

  function Select() {
    if (!lobby) return;
    store.dispatch(SelectLobby(lobby));
  }
}

export default LobbyList;
