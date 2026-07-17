# Academy Oefenplein AI Factory

**Versie:** 1.0.0  
**Status:** officiële ontwikkelstandaard  
**Toepassing:** alle nieuwe oefenmodules voor Academy Oefenplein

## Doel

De AI Factory is het vaste ontwerp-, bouw- en kwaliteitskader voor zelfstandige oefenmodules. Het kader zorgt ervoor dat mensen en AI-systemen dezelfde keuzes maken, dezelfde metadata aanleveren en modules opleveren die zonder technische verrassingen in Academy Oefenplein kunnen worden opgenomen.

De Academy Launcher blijft een eenvoudige catalogus. Iedere oefening blijft een zelfstandig HTML-bestand in `modules/`. De AI Factory bevat documentatie en bouwafspraken; zij is zelf geen generator, runtime of oefenengine.

## Documenten

| Document | Functie | Wanneer gebruiken? |
|---|---|---|
| [ACADEMY_CREATOR_PROMPT.md](ACADEMY_CREATOR_PROMPT.md) | Volledige, zelfstandige bouwinstructie voor mens of AI | Altijd als startpunt voor een nieuwe module |
| [MODULE_STANDARD.md](MODULE_STANDARD.md) | Normatieve technische en ontwerpstandaard | Tijdens ontwerp, bouw en review |
| [MODULE_CATALOG_STANDARD.md](MODULE_CATALOG_STANDARD.md) | Canoniek metadatacontract en launchervertaling | Bij registratie en integratie |
| [MODULE_CHECKLIST.md](MODULE_CHECKLIST.md) | Acceptatie- en kwaliteitscontrole | Voor oplevering en na integratie |
| [PROMPTS/README.md](PROMPTS/README.md) | Index van direct bruikbare AI-prompts | Voor creatie, beheer, review en releasewerk |
| [CHANGELOG.md](CHANGELOG.md) | Historie van versies en wijzigingen | Bij iedere Factory-release |
| [ROADMAP.md](ROADMAP.md) | Richting voor toekomstige uitbreidingen | Bij planning en besluitvorming |

Bij tegenstrijdigheid geldt deze volgorde:

1. de expliciete opdracht en goedgekeurde leerinhoud;
2. `MODULE_STANDARD.md` voor de bouwkwaliteit;
3. `MODULE_CATALOG_STANDARD.md` voor metadata;
4. `ACADEMY_CREATOR_PROMPT.md` voor de uitvoeringsworkflow;
5. `MODULE_CHECKLIST.md` voor verificatie.

Een afwijking wordt niet stilzwijgend ingevoerd. Documenteer de reden en laat de projecteigenaar de afwijking goedkeuren.

## Aanbevolen workflow

1. Verzamel leerdoelen, doelgroep, bronmateriaal en randvoorwaarden.
2. Start met `ACADEMY_CREATOR_PROMPT.md` en vul alle opdrachtvelden in.
3. Ontwerp en bouw volgens `MODULE_STANDARD.md`.
4. Maak metadata volgens `MODULE_CATALOG_STANDARD.md`.
5. Doorloop `MODULE_CHECKLIST.md` en leg bewijs vast.
6. Plaats het modulebestand in `modules/`.
7. Integreer de catalogus-entry in de bestaande launcherstructuur.
8. Test de volledige route en laat de gebruiker accepteren.

## Prompt Library

De map [`PROMPTS/`](PROMPTS/) bevat vijftien taakgerichte prompts met een vaste opmaak:
Doel, Wanneer gebruiken, Variabelen, Prompt, Voorbeeld en Verwachte uitvoer. Kies altijd de
kleinste prompt die de opdracht volledig dekt en vul alle blokhaakvariabelen in. De prompts
vervangen de standaarden niet; zij passen de standaarden toe op een concreet werkproces.

Gebruik de [Prompt Library-index](PROMPTS/README.md) om een prompt te kiezen voor modulebouw,
integratie, onderhoud, kwaliteitscontrole of contentimport.

## Versiebeheer

De AI Factory gebruikt Semantic Versioning:

- **MAJOR**: incompatibele wijziging aan een verplicht contract;
- **MINOR**: nieuwe, achterwaarts compatibele richtlijn of mogelijkheid;
- **PATCH**: verduidelijking of correctie zonder contractwijziging.

Documenteer iedere release in `CHANGELOG.md`. Een module vermeldt tegen welke Factory-versie zij is beoordeeld. Bestaande goedgekeurde modules hoeven bij een MINOR- of PATCH-release niet automatisch te worden aangepast. Bij een MAJOR-release is een migratiebesluit nodig.

## Beheer van uitbreidingen

Een voorgestelde uitbreiding beschrijft minimaal:

- het probleem dat wordt opgelost;
- de gevolgen voor bestaande modules;
- de gevolgen voor metadata en launcher;
- toegankelijkheids- en offlinegevolgen;
- migratie- en testaanpak;
- gewenste Factory-versie.

Nieuwe moduletypen worden eerst als ontwerpvoorstel vastgelegd. Automatisering mag pas worden toegevoegd wanneer de handmatige standaard stabiel en toetsbaar is. Zo blijft de documentatie de bron van waarheid en ontstaat geen tweede, afwijkend contract.

## Kernprincipes

- Eén module is één zelfstandig HTML-bestand.
- Geen frameworks, externe libraries, CDN's of verplichte netwerkverbinding.
- De launcher toont en opent modules, maar bevat geen modulelogica.
- Leerinhoud is herleidbaar naar een goedgekeurde bron.
- Toegankelijkheid, mobiel gebruik en foutafhandeling zijn oplevereisen.
- Alleen volledig geteste modules krijgen status `available`.
