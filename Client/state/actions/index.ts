import { ControlType, PagesType } from "../types";




export interface SwitchVisibilityAction {
  type: "switch";
  payload: PagesType
}
export interface SelectLobby{
  type:"select";
  payload: string
}
export interface SwitchControl {
  type: "switch";
  payload: ControlType
}


export  type Action = SwitchVisibilityAction