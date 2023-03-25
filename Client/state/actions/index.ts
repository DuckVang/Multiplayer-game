import { PagesType } from "../types";




export interface SwitchVisibilityAction {
  type: "switch";
  payload: PagesType
}



export  type Action = SwitchVisibilityAction