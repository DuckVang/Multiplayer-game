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

type OptionsPage = {};

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    switchVisibility: (state: VisibilityState, action: SwitchVisibilityAction) => {
      state[action.payload] = !state[action.payload];
    },
  },
});
export const {switchVisibility} = visibilitySlice.actions

export default visibilitySlice.reducer
