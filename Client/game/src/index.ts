import World from "./World/GlobalWorld";

export function StartWorld() {
  const world = new World(10000, 10000);
  world.CreateMainPlayer();
  world.StartLoop();

return world
}
