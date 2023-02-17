
import { Graphics } from "pixi.js"
import Vector from "../../Math/Vector"
import BODIES from "../Models/Bodies"
import { Shape } from "../Shapes/Shape"
import { IShape } from "../Shapes/Shape"

export default abstract class Body {
    //composition
    comp: IShape
    pos: Vector
    m: number
    //inverse mass
    inv_m: number
    invertia: number

    inertia: number
    inv_inertia: number
    elasticity: number

    friction: number
    angFriction: number
    maxSpeed: number
    color: string
    layer: number

    up: boolean
    down: boolean
    left: boolean
    right: boolean
    action: boolean

    vel: Vector
    acc: Vector
    keyForce: number
    angKeyForce: number
    angle: number
    angVel: number
    player: boolean

    vertex: Vector[]

    collided: boolean

    graphics: Graphics


    constructor() {
        this.comp = null;
        this.pos = new Vector(0, 0);
        this.m = 0;
        this.inv_m = 0;
        this.inertia = 0;
        this.inv_inertia = 0;
        this.elasticity = 1;

        this.friction = 0.1;
        this.angFriction = 0;
        this.maxSpeed = 10;
        this.layer = 0;

        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.action = false;

        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0);
        this.keyForce = 1;
        this.angKeyForce = 0.1;
        this.angle = 0;
        this.angVel = 0;
        this.player = false;

        this.collided = false

        BODIES.push(this);
    }

    reposition() {
        this.acc = this.acc.unit().mult(this.keyForce);
        this.vel = this.vel.add(this.acc);
        this.vel = this.vel.mult(1 - this.friction);
        if (this.vel.mag() > this.maxSpeed && this.maxSpeed !== 0) {
            this.vel = this.vel.unit().mult(this.maxSpeed);
        }
        this.angVel *= (1 - this.angFriction);



    }
    remove() {
        if (BODIES.indexOf(this) !== -1) {
            BODIES.splice(BODIES.indexOf(this), 1);
        }
    }
    keyControl() { }

    render(){}

}

