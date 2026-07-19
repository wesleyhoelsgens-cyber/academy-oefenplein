# Inbox Workflow Configuration

**Configuratieversie:** 1.0.0
**Project:** Academy Oefenplein

Dit is het enige projectspecifieke bestand van de Inbox Workflow. De overige bestanden in
de module mogen geen waarden uit dit document dupliceren. Bij installatie in een ander project
wordt uitsluitend deze configuratie aangepast.

## Actieve configuratie

```yaml
projectName: "Academy Oefenplein"
projectRoot: "."

inboxPath: "modules/_inbox"
catalogRoot: "modules"
sharedFolder: "modules/gedeeld"
launcherFile: "app.js"
launcherHomeFile: "index.html"
documentationFolder: "AI_FACTORY"

moduleExtensions:
  - ".html"

catalogContract: "AI_FACTORY/MODULE_CATALOG_STANDARD.md"
moduleStandard: "AI_FACTORY/MODULE_STANDARD.md"
moduleChecklist: "AI_FACTORY/MODULE_CHECKLIST.md"

classificationFields:
  - "opleiding"
  - "leerjaar"
  - "periode"
  - "speciaalOnderdeel"
  - "opleidingsonderdeel"
  - "thema"

sharedUseMinimumPlacements: 2
sharedDomainRequired: true
deploymentPathCaseSensitive: true
deploymentTarget: "GitHub Pages"

registrationFieldNames:
  id: "id"
  title: "titel"
  type: "type"
  duration: "duur"
  description: "beschrijving"
  file: "bestand"
  available: "beschikbaar"

emptyInboxMarker: ".gitkeep"
```

## Configuratieregels

- Alle paden zijn relatief aan `projectRoot` en gebruiken `/` in rapporten en cataloguswaarden.
- `inboxPath`, `catalogRoot` en `sharedFolder` moeten binnen `projectRoot` liggen.
- `sharedFolder` moet binnen `catalogRoot` liggen.
- Een workflow mag ontbrekende instellingen niet zelf invullen; meld de configuratie als onvolledig.
- `classificationFields` bepaalt welke plaatsingsgegevens worden onderzocht. Een ander project mag deze lijst vervangen.
- `registrationFieldNames` vertaalt generieke metadata naar het actuele launchercontract.
- De workflow leest het bestand bij `catalogContract`; zij bevat zelf geen kopie van dat contract.
- `deploymentPathCaseSensitive: true` betekent dat hoofdletters en bestandsnamen exact moeten overeenkomen.

## Installatiecontrole

Controleer na kopiëren minimaal:

- bestaat ieder geconfigureerd pad of mag het veilig worden aangemaakt;
- verwijzen standaard- en contractpaden naar bestaande documenten;
- gebruikt de launcher werkelijk `launcherFile`;
- passen `classificationFields` bij de onderwijs- of contentstructuur van het project;
- passen `registrationFieldNames` bij de feitelijke catalogusvelden.
