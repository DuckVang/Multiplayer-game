
import BODIES from "../components/Models/Bodies";

export function UserInputs() {
    BODIES.forEach((body) => {
        body.keyControl();
    })
}