


import { Player } from "../Game-Objects/Player";
import { StartGame } from "../Game-Logic/StartGame";
import { MainLoop } from "./Loops/MainLoop";

import Engine from "../../../../Engine/src/Main";
import { IProjectile } from "../Game-Objects/Attack-Types/Projectile/IProjectile";


let instance: World

export class World {

    engine: Engine


    PLAYERS: Player[]



    SPELL_PROJ: IProjectile[]





    interval: number
    timeLeft: number

    width: number
    height: number



    constructor(width: number, height: number) {

        console.log("pog")
        if (instance)
            throw new Error("New instance cannot be created!!");

        instance = this;


        this.PLAYERS = []
 

        this.width = width
        this.height = height
        this.engine = new Engine(10000, this.width, this.height)



        this.SPELL_PROJ = []




        // this.zone = new Zone(this.width / 2, this.height / 2, 5000)
        // this.AddMapObj(this.zone)


        this.interval = 10
        this.timeLeft = this.interval
        


    }
    Start() {
        StartGame()
        MainLoop()
    }



}

const WORLD = new World(10000, 10000)

export default WORLD