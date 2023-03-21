import Body from "../../../../Engine/src/components/Physical-Body/Body";
import { Player } from "./Player";
export interface IGameBody extends Body {
    socketID: string;
    addTo(dict: { [key: string]: IGameBody }| IGameBody[], socketID: string): void;

}