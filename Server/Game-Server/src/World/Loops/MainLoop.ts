

import { GameLoop } from "./GameLoop"
import WORLD from "../GlobalWorld"
import BODIES from "../../../../../Engine/src/components/Models/Bodies"
import { PlaneGeometry } from "pixi.js"
import { Player } from "../../Game-Objects/Player"
import { Wall } from "../../../../../Engine/src/components/Physical-Body/Wall"


export function MainLoop() {

    
  
    

  
    WORLD.engine.Loop();
    GameLoop()
 






    

}