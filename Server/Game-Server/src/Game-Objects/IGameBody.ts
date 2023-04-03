import Body from "../../../../Engine/src/components/Physical-Body/Body";
import Lobby from "../../../Networking/lobby";
import { Player } from "./Player";
export interface IGameBody extends Body {
   
    lobby:Lobby
    socketID: string;
    
    AddTo(dict: { [key: string]: IGameBody }| IGameBody[], socketID: string): void;

}