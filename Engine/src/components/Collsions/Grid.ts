import Body from "../Physical-Body/Body";

export class Grid {
    readonly cellSize: number;
    readonly width: number;
    readonly height: number;
    readonly grid: any[][];

    readonly numCols: number;
    readonly numRows: number;

    constructor(cellSize: number, width: number, height: number) {
        this.cellSize = cellSize;
        this.width = width;
        this.height = height;

        this.numCols = Math.ceil(width / cellSize);
        this.numRows = Math.ceil(height / cellSize);

        // this.grid = new Array(this.numCols).fill([]).map(() => new Array(this.numRows).fill([[]]));
        this.grid = Array.from({ length: this.numCols }, () => Array.from({ length: this.numRows }, () => []));
    }

    clear() {
        this.grid.forEach(column => column.forEach(cell => cell.length = 0));
    }
    getObjectsFromCell(x: number, y: number) {
        if (x < 0 || y < 0 || x >= this.numCols || y >= this.numRows)
            return []


        return this.grid[x][y];
    }


    add(object: Body) {
        const { pos, comp } = object;

        const minX = Math.floor((comp.AABB.min.x - this.width) / this.cellSize);
        const maxX = Math.floor((comp.AABB.max.x - this.width) / this.cellSize);
        const minY = Math.floor((comp.AABB.min.y - this.height) / this.cellSize);
        const maxY = Math.floor((comp.AABB.max.y - this.height) / this.cellSize);

        const center = comp.getAABBCenter()


        const cellX = Math.floor((center.x / this.width * this.numCols));
        const cellY = Math.floor((center.y / this.height * this.numRows));


        if (cellX >= 0 && cellX < this.numCols && cellY >= 0 && cellY < this.numRows) {
          
            this.grid[cellX][cellY].push(object);
        }
        // console.log(this.grid[cellX][cellY].__proto__ + " " + cellX + " " + cellY)

    }
}
