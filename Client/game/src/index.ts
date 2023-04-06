import World from "./World/GlobalWorld";

export function StartGame() {
  const world = new World(10000, 10000);
  world.createPlayer()
  world.StartLoop();
}
