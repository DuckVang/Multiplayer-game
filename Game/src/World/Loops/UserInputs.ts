import BODIES from "../../../../Engine/src/components/Models/Bodies";

export function UserInputs() {
    BODIES.forEach((body) => {
        body.keyControl();
    })
}