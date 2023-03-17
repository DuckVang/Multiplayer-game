import WORLD from "../GlobalWorld";


export function UserInputs() {
    WORLD.engine.BODIES.forEach((body) => {
        body.keyControl();
    })
}