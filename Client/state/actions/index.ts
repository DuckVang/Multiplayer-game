import { Pages } from "../actions-types";



interface SwitchVisibilityAction {
  type: "switch";
  payload: Pages
}


export type Action = SwitchVisibilityAction