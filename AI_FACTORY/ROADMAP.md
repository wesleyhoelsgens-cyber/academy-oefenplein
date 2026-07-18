# AI Factory Roadmap

Deze roadmap beschrijft richting, geen automatische toestemming om functionaliteit te bouwen. Iedere uitbreiding vereist een afzonderlijk besluit, scope en acceptatie.

## Uitgangspunten

- De handmatige standaard blijft de bron van waarheid.
- Automatisering volgt pas nadat contracten stabiel zijn.
- Nieuwe mogelijkheden blijven achterwaarts compatibel binnen dezelfde major-versie.
- Toegankelijkheid, offline werking en privacy zijn vaste kwaliteitsgrenzen.

## Uitgevoerd

### Donkere modus en themawisselaar

Doel: een toegankelijke lichte en donkere weergave bieden zonder de eenvoudige Academy-architectuur te veranderen.

- ondersteuning voor een licht en donker kleurthema;
- handmatige themawisselaar met behoud van de keuze in `localStorage`;
- systeemvoorkeur via `prefers-color-scheme` als uitgangspunt wanneer nog geen keuze is opgeslagen;
- consistente toepassing op de launcher en zelfstandige modules;
- aantoonbare toetsenbordbediening, zichtbare focus en voldoende kleurcontrast in beide thema's.

Status: uitgevoerd in PB-010 voor de volledige Academy Launcher.

## Eerstvolgende backlog

### Theme Engine toepassen op bestaande zelfstandige modules

Laat bestaande modules veilig dezelfde voorkeur en semantische variabelen gebruiken, met regressietests per zelfstandig HTML-bestand. Tot deze migratie is afgerond behouden modules hun eigen vormgeving.

### Academy Content Manager

Later backlog-item voor gecontroleerd inhoudsbeheer; geen onderdeel van PB-010.

## v1.1 — Verdieping van de standaard

Doel: meer variatie ondersteunen zonder de basisarchitectuur te veranderen.

- richtlijnen en patronen voor aanvullende moduletypen;
- uitgebreidere feedback- en beoordelingspatronen;
- aangescherpte metadata voor leerdoelen en bronverwijzingen;
- toegankelijkheidsvoorbeelden per interactietype;
- handmatige validatiesjablonen en reviewrapporten;
- migratierichtlijn voor modules van vóór Factory v1.0.

Acceptatie: bestaande v1.0-modules blijven geldig zonder verplichte codewijziging.

## v1.2 — Machineleesbare validatie

Doel: fouten eerder vinden met optionele, transparante controles.

- formeel schema voor catalogusmetadata;
- lokale validator voor bestandsnaam, metadata en dode links;
- rapportage zonder automatische bronwijzigingen;
- toegankelijkheids- en HTML-controle als aanvullende signalen;
- documentatie voor menselijke beoordeling van false positives.

Acceptatie: validatie is lokaal, reproduceerbaar en vervangt geen inhoudelijke review.

## v2.0 — Gecontroleerde automatisering

Doel: repetitief werk automatiseren met behoud van menselijke besluitvorming.

- automatische catalogusopbouw uit gevalideerde metadata;
- AI-ondersteunde kwaliteitscontrole met bewijsrapport;
- modulegenerator op basis van goedgekeurde sjablonen;
- automatische regressiecontrole voor launcher en modules;
- versie- en migratieondersteuning voor metadata;
- formele acceptatiepoort vóór publicatie.

Mogelijk incompatibel: de huidige compacte `app.js`-catalogus kan worden vervangen. Daarvoor is een afzonderlijk migratieplan nodig.

## Nog niet gepland

De volgende onderwerpen zijn bewust geen toezegging:

- gebruikersaccounts;
- cloudopslag van studentenvoortgang;
- backend of database;
- automatische publicatie zonder menselijke goedkeuring;
- externe AI-calls vanuit studentmodules;
- tracking of analytics.

## Besluitcriteria voor roadmapitems

- Is het concrete onderwijsprobleem aangetoond?
- Kan de oplossing offline en toegankelijk blijven?
- Blijft de launcher eenvoudig?
- Is migratie van bestaande modules beheersbaar?
- Zijn privacy, beveiliging en onderhoud belegd?
- Is menselijke acceptatie expliciet onderdeel van de workflow?
