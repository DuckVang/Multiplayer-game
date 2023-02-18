import Body from "../Physical-Body/Body";

class Grid {
    private readonly cellSize: number;
    private readonly width: number;
    private readonly height: number;
    private readonly grid: any[][];

    constructor(cellSize: number, width: number, height: number) {
        this.cellSize = cellSize;
        this.width = width;
        this.height = height;

        const numCols = Math.ceil(width / cellSize);
        const numRows = Math.ceil(height / cellSize);
        this.grid = new Array(numCols).fill(null).map(() => new Array(numRows).fill([]));
    }

    add(object: Body) {
        const { pos, comp } = object;

        
        for (let i = Math.floor(pos.x / this.cellSize); i <= Math.floor((pos.x + comp.getAabbWidth()) / this.cellSize); i++) {
            for (let j = Math.floor(pos.y / this.cellSize); j <= Math.floor((pos.y + comp.getAabbHeight()) / this.cellSize); j++) {
               
                if (i >= 0 && j >= 0 && i < this.grid.length && j < this.grid[i].length) {
                    this.grid[i][j].push(object);
                }
            }
        }
    }
}
