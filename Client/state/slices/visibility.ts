import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { Action, SwitchVisibilityAction } from "../actions";
import { PagesType } from "../types";

type VisibilityState = {
  [PagesType.MAINPAGE]: boolean;
  [PagesType.GAME]: boolean;
};

const initialState = {
  [PagesType.MAINPAGE]: true,
  [PagesType.GAME]: false,
} as VisibilityState;

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    switchVisibility: (
      state: VisibilityState,
      action: SwitchVisibilityAction
    ) => {
      state[action.payload] = !state[action.payload];
    },
  },
});
const { switchVisibility } = visibilitySlice.actions;

export const switchVisibilityOf = (payload: PagesType) => {
  if (!payload) {
    throw new Error("Component is required");
  }

  return switchVisibility(payload);
};



export default visibilitySlice.reducer;
