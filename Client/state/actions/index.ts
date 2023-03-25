import { PagesType } from "../types";
import { switchVisibility } from "../slices/visibility";



export interface SwitchVisibilityAction {
  type: "switch";
  payload: PagesType
}



export  type Action = SwitchVisibilityAction