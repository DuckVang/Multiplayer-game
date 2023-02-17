import { Box } from "../../../../../Engine/src/components/Physical-Body/Box";
import Vector from "../../../../../Engine/src/Math/Vector";
import { IAttackZone } from "./IAttackZone";

export class BoxZone extends Box implements IAttackZone {
    center: Vector;
    power: number;
    constructor(center: Vector, power: number) {
        super(0, 0, 0, 0, 0, 0)
        this.center = center;
        this.power = power;
    }
}