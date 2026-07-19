# Changelog

Alle belangrijke wijzigingen aan de Academy Oefenplein AI Factory worden in dit bestand vastgelegd. De Factory volgt Semantic Versioning en de indeling van Keep a Changelog.

## [1.4.0] - 2026-07-19

### Toegevoegd

- `PROMPTS/03_GOEDKEURING.md` als centraal besliscontract voor korte goedkeuringsantwoorden.
- Vaste afsluitende vraag: `Wil je het registratieplan uitvoeren?`.
- Read-only VS Code Tasks voor inboxanalyse, goedkeuringsbegeleiding en statuscontrole.
- Dependencyvrij PowerShell-script `scripts/inbox-workflow/Invoke-InboxWorkflow.ps1`.

### Gewijzigd

- Een antwoord `Ja` voert automatisch het meest recente actieve registratierapport uit.
- `Nee`, `Ja, maar wijzig eerst...` en `Nee, analyseer opnieuw.` hebben nu normatief vastgelegde vervolgstappen.
- De gebruiker hoeft `02_REGISTREER_MODULES.md` niet meer te plakken of opnieuw in te vullen.
- Workflow, installatie, checklist, module- en creatorstandaarden zijn gesynchroniseerd met de korte goedkeuringsflow.

## [1.3.0] - 2026-07-19

### Toegevoegd

- Zelfstandige, projectonafhankelijke module `Inbox Workflow & Module Registration`.
- Gescheiden prompts voor read-only inboxanalyse en uitvoering van een goedgekeurd registratieplan.
- Centrale configuratie, installatiehandleiding, checklist en registratierapporttemplate.
- `modules/_inbox/` als tijdelijke Academy-wachtrij.

### Gewijzigd

- De Inbox Workflow is de officiële standaard voor intake en registratie van nieuwe modules.
- Nieuwe modules gaan eerst naar de geconfigureerde inbox en pas na goedkeuring naar hun cataloguslocatie.

## [1.2.0] - 2026-07-19

### Gewijzigd

- Modulestandaard en prompts gebruiken geneste cataloguspaden onder `modules/`.
- Gedeelde modules staan één keer onder `modules/gedeeld/` en mogen meerdere onderwijsplaatsingen hebben.
- Onderwijsroutes zijn per opleiding configureerbaar; leerjaren en perioden zijn niet verplicht voor rechtstreekse opleidingsonderdelen.
- Navigatievoorbeelden berekenen het relatieve launcherpad vanuit de werkelijke modulemap.

## [1.1.0] - 2026-07-18

### Toegevoegd

- Centrale Theme Engine-standaard met `system`, `light` en `dark`.
- Semantische CSS-kleurvariabelen en `data-theme`-contract.
- Prompt 18 voor darkmode-integratie.

### Gewijzigd

- Modulechecklist en modulestandaard bevatten thema-, contrast- en opslagcontroles.
- Roadmap markeert launcherdarkmode als uitgevoerd en houdt migratie van zelfstandige modules als vervolgitem bij.

## [1.0.0] - 2026-07-17

### Toegevoegd

- Eerste officiële AI Factory voor Academy Oefenplein.
- Zelfstandig creator-prompt voor mensen en AI-systemen.
- Technische, UX-, responsive- en toegankelijkheidsstandaard voor modules.
- Canoniek metadatacontract met validatieregels.
- Vertaling van canonieke metadata naar de huidige Academy Launcher.
- Uitgebreide module- en integratiechecklist.
- Versiebeleid, beheerworkflow en roadmap.

### Besluiten

- Iedere oefenmodule blijft een zelfstandig HTML-bestand.
- De Academy Launcher blijft een catalogus en bevat geen centrale oefenengine.
- Nieuwe modules gebruiken geen frameworks, externe libraries of verplichte netwerkverbinding.
- Alleen gecontroleerde modules krijgen status `available`.
