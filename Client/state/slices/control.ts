import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { Action, SwitchControl, SwitchVisibilityAction } from "../actions";
import { ControlType } from "../types";

type ControlState = {
  [ControlType.KEYBOARD]: boolean;
  [ControlType.MOUSE]: boolean;
};

const initialState = {
  [ControlType.KEYBOARD]: true,
  [ControlType.MOUSE]: true,
} as ControlState;

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    switchControl: (
      state: ControlState,
      action: SwitchControl
    ) => {
      state[action.payload] = !state[action.payload];
    },
  },
});
const { switchControl } = controlSlice.actions;

export const switchVisibilityOf = (payload: ControlType) => {
  if (!payload) {
    throw new Error("Component is required");
  }

  return switchControl(payload);
};



export default controlSlice.reducer;
