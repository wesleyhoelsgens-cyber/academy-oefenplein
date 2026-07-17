# 04 — Verwijder een module

## Doel

Een module gecontroleerd uit de launcher en, indien expliciet toegestaan, uit de workspace verwijderen.

## Wanneer gebruiken

Gebruik deze prompt alleen na een expliciet verwijderbesluit van de projecteigenaar.

## Variabelen

- `[Bestandsnaam]`, `[Module-id]`
- `[Opleiding]`, `[Leerjaar]`, `[Periode]`, `[Thema]`
- `[Bestand verwijderen: ja/nee]`, `[Reden]`

## Prompt

```text
Verwijder module [Module-id] op [Opleiding] / Leerjaar [Leerjaar] / Periode [Periode] /
[Thema] gecontroleerd. Reden: [Reden]. Lees eerst app.js, het modulebestand en alle
verwijzingen. Verwijder de catalogus-entry exact één keer.

Verwijder modules/[Bestandsnaam] alleen als [Bestand verwijderen: ja/nee] exact "ja" is
en het pad aantoonbaar binnen de projectmap ligt. Verwijder een lege themasectie alleen
wanneer zij daarna geen echte modules meer bevat. Behoud leerjaar- en periodeconfiguratie,
tenzij de opdracht die afzonderlijk laat verwijderen. Verwijder bijbehorende dode CSS of
code alleen met bewijs dat niets anders die gebruikt.

Controleer dat er geen dode link of module-id resteert en dat navigatie en andere modules
blijven werken. Rapporteer wat is verwijderd en of het bestand herstelbaar is.
```

## Voorbeeld

Verwijder een ingetrokken module uit de catalogus, maar behoud het HTML-bestand voor archivering.

## Verwachte uitvoer

- Verwijderde catalogus-entry.
- Alleen bij toestemming een verwijderd modulebestand.
- Regressie- en verwijderrapport.

