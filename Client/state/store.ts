import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./slices/visibility";
import lobbyReducer from "./slices/lobby"
const store = configureStore({
  reducer: {
    visibility: visibilityReducer, 
    lobby: lobbyReducer
  },
});

export default store




