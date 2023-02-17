import WORLD from "../World/GlobalWorld";

for (let index = 0; index < WORLD.SPELL_PROJ.length; index++) {
    const projectile = WORLD.SPELL_PROJ[index];
    if(projectile.collided){
        projectile.spell.effect()
    }
    
}