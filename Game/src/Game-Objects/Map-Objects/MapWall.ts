import { Graphics } from "pixi.js";
import { Wall } from "../../../../Engine/src/components/Physical-Body/Wall";
import { DrawLine } from "../../Render/Shapes";
import WORLD from "../../World/GlobalWorld";

export class MapWall extends Wall {


    constructor(x1: number, y1: number, x2: number, y2: number) {
        super(x1, y1, x2, y2)
        this.graphics = new Graphics()
        
    }

    render() {
        DrawLine(this.graphics,this.comp.start, this.comp.end)
    }
}
export function PutWallAround(x1: number, y1: number, x2: number, y2: number){

    let edge1 = new MapWall(x1, y1, x2, y1);
    let edge2 = new MapWall(x2, y1, x2, y2);
    let edge3 = new MapWall(x2, y2, x1, y2);
    let edge4 = new MapWall(x1, y2, x1, y1);

}