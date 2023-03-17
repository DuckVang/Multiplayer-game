3.výstup 
-  Opravená zóna, při překročení se aktivuje screen shake a postupné zmenšování  až do minimální zóny
-  Nový systém kolize - Grid, zatím s chybami
-  Spelly: od 1 do 6 k výběru
-  Přidán motion trail animace, aktivovaná pro dash schopnost 
-  Nové typy útoků, zóny, objekty, které nereagují na collision response, 
   v budoucnu budou sloužit k vytváření lečícícch/poškozujících/buffing zón
TODO: Change clearing to canvas.rectClear(), maybe delete checked collision from grid
TODO: změnit logiku vykreslování, místo dávání všeho do grafik tak to vykreslit do viewportu a posunout cameru ne podle graphicu ale podle pozice (spectate a jeho socket id )
TODO: pro dash animaci není potřeba graphics stačí uložit pozice a pak zase vykreslit, možná nový container pro to 