import { Shape } from "../../../Engine/src/components/Shapes/Shape";
import Vector from "../../../Engine/src/Math/Vector";

class Player {

    pos: Vector
    comp: Shape
    
    selected: number
    health: number
    energy: any;
    maxEnergy: any;
    maxHealth: number;

    alive: boolean
    CastSpell(direction: Vector) {
    }
}

export default Player