class Vector {

    x: number
    y: number

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    set(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    add(v:Vector) {
        return new Vector(this.x + v.x, this.y + v.y);
    }

    subtr(v:Vector) {
        return new Vector(this.x - v.x, this.y - v.y);
    }

    mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    mult(n:number) {
        return new Vector(this.x * n, this.y * n);
    }

    //returns a perpendicular normal vector
    normal() {
        return new Vector(-this.y, this.x).unit();
    }

    //returns a vector with same direction and 1 length
    unit() {
        if (this.mag() === 0) {
            return new Vector(0, 0);
        } else {
            return new Vector(this.x / this.mag(), this.y / this.mag());
        }
    }

    //returns the length of a vectors projection onto the other one
    static dot(v1:Vector, v2:Vector) {
        return v1.x * v2.x + v1.y * v2.y;
    }
    static cross(v1:Vector, v2:Vector){
        return v1.x*v2.y - v1.y*v2.x;
    }
}

export default Vector


