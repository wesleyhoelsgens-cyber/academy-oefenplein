# AI Factory handleiding

## Modules

Modules zijn herbruikbare hulpmiddelen.

Je vindt ze in:

```text
AI_FACTORY/MODULES/
```

Iedere module heeft een eigen doel.

### Git Assistent

De Git Assistent opent een interactief dashboard. Je kunt de Git-status, wijzigingen, aanbevolen
stappen, uitleg en repositorycontrole bekijken.

Met optie `7` vertelt het dashboard in één kort advies wat de logisch volgende stap is.

Hij verandert zelf niets en voert geen commit of push uit.

Start hem via **Terminal > Run Task... > Git Assistent**.

Het menu blijft actief totdat je `0` of `Q` kiest.

## Documentatie

Technische uitleg staat in de modulemap.

Begin daar altijd bij `README.md`.

## WESLEY-map

Eenvoudige uitleg voor dagelijks gebruik staat in een map `WESLEY/`.

Deze uitleg vertelt vooral wat je moet doen.

## Configuratie

Instellingen van een module staan in `CONFIG.md`.

Verander alleen waarden die voor jouw project zijn bedoeld.

Laat blokhaken zoals `[waarde]` niet staan wanneer die instelling verplicht is.

## VS Code

VS Code toont vaste taken via **Terminal > Run Task...**.

Een taak kan een controle of hulpmiddel starten.

Lees altijd eerst wat de taak doet.

Een taak is niet automatisch toestemming om bestanden te wijzigen.

## Nieuwe module maken

Gebruik de lege basis in:

```text
AI_FACTORY/MODULES/TEMPLATE/
```

De officiële regels staan in:

```text
AI_FACTORY/MODULES/MODULE_STANDARD.md
```
