# Academy Prompt Library

Deze bibliotheek bevat direct bruikbare opdrachten voor het maken, beheren en controleren van Academy-modules. Vervang vóór gebruik alle waarden tussen `[blokhaken]`. Voeg relevante bronbestanden of lesinhoud toe en verwijder geen randvoorwaarden uit de prompt.

Alle prompts bouwen voort op:

- `../ACADEMY_CREATOR_PROMPT.md`;
- `../MODULE_STANDARD.md`;
- `../MODULE_CATALOG_STANDARD.md`;
- `../MODULE_CHECKLIST.md`.

Bij tegenstrijdigheid hebben de expliciete gebruikersopdracht en de normatieve standaarden voorrang. Een AI-systeem mag ontbrekende vakinhoud, uitgevoerde tests of bestaande projectstructuur niet verzinnen.

## Index

| Prompt | Gebruik |
|---|---|
| [01_MAAK_NIEUWE_MODULE.md](01_MAAK_NIEUWE_MODULE.md) | Bouw een complete zelfstandige module en lever metadata op |
| [02_INTEGREER_MODULE.md](02_INTEGREER_MODULE.md) | Start de officiële Inbox Workflow; na het rapport volstaat een kort goedkeuringsantwoord |
| [03_UPDATE_MODULE.md](03_UPDATE_MODULE.md) | Werk inhoud of werking van een bestaande module gecontroleerd bij |
| [04_VERWIJDER_MODULE.md](04_VERWIJDER_MODULE.md) | Verwijder een module en catalogus-entry met expliciete toestemming |
| [05_BUGFIX.md](05_BUGFIX.md) | Diagnoseer en herstel een afgebakend defect |
| [06_CODE_REVIEW.md](06_CODE_REVIEW.md) | Voer een onafhankelijke, read-only kwaliteitsreview uit |
| [07_REFACTOR_MODULE.md](07_REFACTOR_MODULE.md) | Verbeter interne code zonder functionele wijziging |
| [08_RELEASE_CHECKLIST.md](08_RELEASE_CHECKLIST.md) | Beoordeel releasegereedheid met aantoonbaar bewijs |
| [09_MAAK_KNOWLEDGE_PACKAGE.md](09_MAAK_KNOWLEDGE_PACKAGE.md) | Structureer broninhoud tot een controleerbaar kennispakket |
| [10_MAAK_FLASHCARDS.md](10_MAAK_FLASHCARDS.md) | Bouw een zelfstandige flashcardmodule |
| [11_MAAK_QUIZ.md](11_MAAK_QUIZ.md) | Bouw een quiz met feedback en eindresultaat |
| [12_MAAK_ESCAPE_ROOM.md](12_MAAK_ESCAPE_ROOM.md) | Bouw een leerdoelgerichte digitale Escape Room |
| [13_MAAK_MEMORY.md](13_MAAK_MEMORY.md) | Bouw een toegankelijk memoryspel |
| [14_MAAK_EXAMENTRAINER.md](14_MAAK_EXAMENTRAINER.md) | Bouw een transparante examentrainer |
| [15_IMPORT_MASTER_CONTENT.md](15_IMPORT_MASTER_CONTENT.md) | Zet goedgekeurde mastercontent gecontroleerd om naar moduledata |
| [17_VOEG_SPECIAAL_ONDERDEEL_TOE.md](17_VOEG_SPECIAAL_ONDERDEEL_TOE.md) | Voeg een configureerbaar toets-, examen- of PVB-onderdeel aan een leerjaar toe |
| [18_VOEG_DARKMODE_TOE.md](18_VOEG_DARKMODE_TOE.md) | Voeg een centrale, toegankelijke licht/donker/systeem-Theme Engine toe |

## Aanbevolen gebruik

1. Kies de kleinste prompt die de opdracht volledig dekt.
2. Vul alle variabelen in.
3. Voeg de actuele bronbestanden en inhoudelijke bron toe.
4. Laat het AI-systeem eerst inventariseren en daarna uitvoeren.
5. Controleer de oplevering met `../MODULE_CHECKLIST.md`.
