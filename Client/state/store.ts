import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./slices/visibility";
const store = configureStore({
  reducer: {
    visibility: visibilityReducer
  },
});

export default store


