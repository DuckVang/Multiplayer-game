import * as PIXI from "pixi.js"
import { extensions, Application, InteractionManager } from 'pixi.js';



const app = new PIXI.Application({ resizeTo: window });

document.body.appendChild(app.view);
const container = new PIXI.Container()

export default container