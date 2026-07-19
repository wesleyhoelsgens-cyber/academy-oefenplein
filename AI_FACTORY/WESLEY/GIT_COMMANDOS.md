# Git commando's

Gebruik eerst de VS Code-taak 'Git Assistent'.
Die vertelt welke stap in de huidige situatie logisch is.

## Veilige spiekbrief

`git status`  
Laat zien welke bestanden gewijzigd zijn en wat klaarstaat.

`git --no-pager diff`  
Laat de inhoud zien van wijzigingen die nog niet staged zijn.

`git --no-pager diff --staged`  
Laat zien wat in de volgende commit komt.

`--no-pager` houdt de uitvoer in dezelfde terminal. Je hoeft geen apart Git-scherm af te sluiten.

`git add .`  
Zet alle gecontroleerde wijzigingen klaar voor de commit.

`git commit -m "Korte omschrijving"`  
Maakt een lokaal herstelpunt met een korte uitleg.

`git push`  
Stuurt lokale commits naar de gekoppelde branch op GitHub.

`git pull`  
Haalt nieuwe commits van de gekoppelde branch op.

`git branch`  
Laat de lokale branches zien.

`git switch <branchnaam>`  
Gaat naar een bestaande branch.

Voer alleen een commando uit als je begrijpt wat het doet.

De Git Assistent voert deze wijzigende commando's nooit zelf uit. Hij toont ze alleen als advies.
