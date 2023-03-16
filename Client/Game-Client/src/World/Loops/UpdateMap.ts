
import instance from "../GlobalWorld";

export function MapLoop() {

    
    instance.MAP_OBJECTS.forEach((object) => {

        object.update()
    
    })

}