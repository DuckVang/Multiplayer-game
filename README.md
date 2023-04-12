# Multiplayer game 

In this repository you will find my attempt/process of learning to built a browser game with own physical engine similar to popular games as Agar.io, Diep.io.

Built with **[TS](https://www.typescriptlang.org/), Socket.io, [Express](https://expressjs.com/), [Pixi.js](https://pixijs.com/), [React](https://react.dev/), ...**


## DevLog

### 1. part 

-  Developing physical engine for my game
    - Life cycle of physics in game 
      1. Collision check/resolute
      2. Positions of bodies update
      3. Force application
      4. Render
    - Collision detection 
      - AABB, Grid, SAT (Seperated Axis Theorem) collision,...
      - Circle-Circle, Box-Box, Convex and Non-convex shapes
    - Collision resolution
      - Restitution coefficient, impulse, gravity force, acceleration, velocity, verlet integration
      - collision penetration resolution
-  Working with rendering library Pixi.js
   -  Rendering cycle, Graphic object, Canvas, Shape drawing 


### 2. part
-  UI design of the main page
   -  Link to[ Figma design ](https://www.figma.com/file/WqwW48y2lvFBJRDv8OSdco/Untitled?node-id=0%3A1&t=yk4oTQOygrU6usUJ-1)
-  Game design
   -  Abilities, objectives, PvP
   -  Battle royal genre

### 3. part
-  Basic abilities
   -  Zone and Projectile types of spells
   -  Basic bullet, exploding bullets, laser, ...

- Game UI
  - Minimap, health/energy bar, minimap 

### 4. part 
-  Redesigning game/engine for multiplayer communication
-  Backend 
  
