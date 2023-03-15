import WORLD from "./Game-Client/src/World/GlobalWorld"
import client from "./Networking/socket"
import { AddControl } from "./Game-Client/src/Interactions/Movement"
import Player from "./Game-Client/src/Player"

WORLD.addControls(new Player())


