import { PagesType } from "../types";




export interface SwitchVisibilityAction {
  type: "switch";
  payload: PagesType
}
export interface SelectLobby{
  type:"select";
  payload: string
}


export  type Action = SwitchVisibilityAction