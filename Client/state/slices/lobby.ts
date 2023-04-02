import { createSlice } from "@reduxjs/toolkit";
import { SelectLobby } from "../actions";

type LobbyState = {
  selectedLobby: string;
};
const initialState = {
  selectedLobby: null,
} as LobbyState;

export const lobbySlice = createSlice({
  name: "lobby",
  initialState,
  reducers: {
    SelectLobby: (state: LobbyState, action: SelectLobby) => {
      state.selectedLobby = action.payload;
    },
  },
});
const { SelectLobby } = lobbySlice.actions;

export { SelectLobby };

export default lobbySlice.reducer
