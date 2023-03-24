import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { Action } from "../actions";
import { Pages } from "../actions-types";

type VisibilityState = {
  [Pages.MAINPAGE]: boolean;
  [Pages.GAME]: boolean;
};

const initialState = {
  [Pages.MAINPAGE]: true,
  [Pages.GAME]: false,
} as VisibilityState;

type OptionsPage = {};

export const visibilityReducer = createSlice({
  name: "visibilityReducer",
  initialState,
  reducers: {
    switchVisibility: (state: VisibilityState, action: Action) => {
      state[action.payload] = !state[action.payload];
    },
  },
});
