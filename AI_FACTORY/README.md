# Academy Oefenplein AI Factory

**Versie:** 1.4.0
**Status:** officiële ontwikkelstandaard
**Toepassing:** alle nieuwe oefenmodules voor Academy Oefenplein

## Doel

De AI Factory is het vaste ontwerp-, bouw- en kwaliteitskader voor zelfstandige oefenmodules. Het kader zorgt ervoor dat mensen en AI-systemen dezelfde keuzes maken, dezelfde metadata aanleveren en modules opleveren die zonder technische verrassingen in Academy Oefenplein kunnen worden opgenomen.

De Academy Launcher blijft een eenvoudige catalogus. Iedere oefening blijft een zelfstandig HTML-bestand onder een geneste locatie in `modules/`. Gedeelde modules staan één keer onder `modules/gedeeld/`. De AI Factory bevat documentatie en bouwafspraken; zij is zelf geen generator, runtime of oefenengine.

## Documenten

| Document | Functie | Wanneer gebruiken? |
|---|---|---|
| [ACADEMY_CREATOR_PROMPT.md](ACADEMY_CREATOR_PROMPT.md) | Volledige, zelfstandige bouwinstructie voor mens of AI | Altijd als startpunt voor een nieuwe module |
| [MODULE_STANDARD.md](MODULE_STANDARD.md) | Normatieve technische en ontwerpstandaard | Tijdens ontwerp, bouw en review |
| [MODULE_CATALOG_STANDARD.md](MODULE_CATALOG_STANDARD.md) | Canoniek metadatacontract en launchervertaling | Bij registratie en integratie |
| [MODULE_CHECKLIST.md](MODULE_CHECKLIST.md) | Acceptatie- en kwaliteitscontrole | Voor oplevering en na integratie |
| [PROMPTS/README.md](PROMPTS/README.md) | Index van direct bruikbare AI-prompts | Voor creatie, beheer, review en releasewerk |
| [MODULES/inbox-workflow/README.md](MODULES/inbox-workflow/README.md) | Projectonafhankelijke inboxanalyse en gecontroleerde moduleregistratie | Voor iedere nieuwe aangeleverde HTML-module |
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
2. Start met `ACADEMY_CREATOR_PROMPT.md` en bouw volgens `MODULE_STANDARD.md`.
3. Plaats iedere nieuwe module eerst in de inbox uit `MODULES/inbox-workflow/CONFIG.md`.
4. Gebruik `MODULES/inbox-workflow/PROMPTS/01_ANALYSE_INBOX.md`; deze fase is read-only.
5. De AI eindigt het rapport met `Wil je het registratieplan uitvoeren?`.
6. Antwoord `Ja`, `Nee`, `Ja, maar wijzig eerst...` of `Nee, analyseer opnieuw.`; bij `Ja` voert de AI intern automatisch `02_REGISTREER_MODULES.md` uit.
7. Doorloop de module- en registratielijsten en leg werkelijk testbewijs vast.
8. Commit, push of publiceer alleen na een afzonderlijke expliciete opdracht.

## Officiële Inbox Workflow

De module [`MODULES/inbox-workflow/`](MODULES/inbox-workflow/) is de officiële standaard voor
de intake en registratie van nieuwe HTML-modules. Academy gebruikt `modules/_inbox/` als tijdelijke
wachtrij. De workflow, goedkeuringspoort en rapportage worden niet elders gekopieerd; alleen
`MODULES/inbox-workflow/CONFIG.md` bevat de Academy-specifieke koppeling.
De gebruiker plakt na de analyse geen tweede uitvoeringsprompt. De beslisregels voor het korte
antwoord staan centraal in `MODULES/inbox-workflow/PROMPTS/03_GOEDKEURING.md`.

## Prompt Library

De map [`PROMPTS/`](PROMPTS/) bevat zeventien taakgerichte prompts met een vaste opmaak:
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
- Thema's gebruiken semantische CSS-variabelen; componenten bevatten geen eigen hardcoded themakleuren.

## Theme Engine

De launcher ondersteunt de voorkeuren `system`, `light` en `dark` via `academy-theme-preference`. De waarde `system` wordt met `prefers-color-scheme` opgelost; het toegepaste resultaat staat als `data-theme="light"` of `data-theme="dark"` op het root-element. Nieuwe modules kunnen dezelfde voorkeur fouttolerant lezen en dezelfde semantische variabelen definiëren. Bestaande zelfstandige modules delen de launcher-CSS niet en zijn daarom niet automatisch gethematiseerd.

Een toekomstig visueel thema wordt toegevoegd door uitsluitend een nieuwe variabelenset onder een eigen `data-theme`-selector te definiëren. De component-CSS blijft daarbij ongewijzigd.
