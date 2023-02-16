// import { interactiveTarget } from "pixi.js"
// import Vector from "../../../Engine/src/Math/Vector"
// import { IGameObject } from "../Game-Objects/IGameObject"
// import { Timer } from "../Game-UI/Timer"

// interface IGameBody extends Body, IGameObject{}

// class MotionTrail {

//     obj: IGameObject | Body
//     constructor(obj: IGameObject) {
//         this.obj = obj
//     }


//     setSavingPos(intervalID: Timer) {

//         setInterval(() => {

//             this.obj.motionPos.push(new Vector(this.obj.pos.x, this.pos.y))
//             //how fuck with refernce 
//             if (this.motionPos.length > this.motionTrailLength) this.motionPos.shift()

//         }, 100)
//     }
// }