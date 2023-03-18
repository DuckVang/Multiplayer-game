import instance from "../GlobalWorld";

export function UILoop() {

    
    instance.UI_OBJECTS.forEach((object) => {
        
        object.update()

    })

}