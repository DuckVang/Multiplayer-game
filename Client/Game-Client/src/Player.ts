import { Shape } from "../../../Engine/src/components/Shapes/Shape";
import Vector from "../../../Engine/src/Math/Vector";

class Player  {

    pos: Vector
    comp: Shape

    selected: number
    health: number
    energy: any;
    maxEnergy: any;
    maxHealth: number;

    alive: boolean

    up: boolean
    down: boolean
    left: boolean
    right: boolean

    constructor(pos: Vector = null, comp: Shape = null) {


        this.pos = pos
        this.comp = comp

        this.selected = 1
        this.maxHealth = 100
        this.health = this.maxHealth
        this.maxEnergy = 100
        this.energy = this.maxEnergy

        this.alive = true

        this.up = false
        this.down = false
        this.left = false
        this.right = false

    }
    CastSpell(direction: Vector) {
    }
}

export default Player