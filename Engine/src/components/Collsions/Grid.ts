import Body from "../Physical-Body/Body";

class Grid {
    private cellSize: number;
    private width: number;
    private height: number;
    private grid: any[][];

    private numCols: number;
    private numRows: number;

    constructor(cellSize: number, width: number, height: number) {
        this.cellSize = cellSize;
        this.width = width;
        this.height = height;

        this.numCols = Math.ceil(width / cellSize);
        this.numRows = Math.ceil(height / cellSize);
        
        this.grid = new Array(this.numCols).fill(null).map(() => new Array(this.numRows).fill([]));
    }

    clear() {
        this.grid.forEach(column => column.forEach(cell => cell.objects.clear()));
    }
    getObjectFromCell(x: number, y: number) {   
        return this.grid[x][y];
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
