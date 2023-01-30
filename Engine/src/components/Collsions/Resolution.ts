
import Body from "../Physical-Body/Body"

export function collisionHandlingCondition(body1:Body, body2:Body){
    return (
        (body1.layer === body2.layer && !(body1.layer === -1 || body1.layer === -2)) ||
        (body1.layer === 0 && body2.layer !== -2) || 
        (body2.layer === 0 && body1.layer !== -2) 
    )
}