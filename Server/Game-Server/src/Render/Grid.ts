import { Graphics } from "pixi.js";

import WORLD from "../World/GlobalWorld";

export function DrawGrid(){
    let grid = new Graphics();
    const {GRID} = WORLD.engine; 
    grid.lineStyle(5, 0xA0230, 1);
    for (let i = 0; i < GRID.numCols; i++) {
        grid.moveTo(i * GRID.cellSize, 0);
        grid.lineTo(i * GRID.cellSize, GRID.numCols * GRID.cellSize);
    }
    for (let i = 0; i < GRID.numRows; i++) {
        grid.moveTo(0, i * GRID.cellSize);
        grid.lineTo(GRID.numRows * GRID.cellSize, i * GRID.cellSize);
    }
    return grid;
}