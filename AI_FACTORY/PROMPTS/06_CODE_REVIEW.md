# 06 — Code review

## Doel

Een onafhankelijke, evidence-based review uitvoeren zonder bestanden te wijzigen.

## Wanneer gebruiken

Gebruik deze prompt vóór acceptatie, integratie of release van een modulewijziging.

## Variabelen

- `[Bestand(en)]`, `[Reviewscope]`, `[Acceptatiecriteria]`
- `[Bekende risico's]`, `[Referentieversie]`

## Prompt

```text
Voer een read-only code review uit op [Bestand(en)]. Scope: [Reviewscope].
Acceptatiecriteria: [Acceptatiecriteria]. Bekende risico's: [Bekende risico's].
Vergelijk waar relevant met [Referentieversie].

Lees MODULE_STANDARD.md, MODULE_CATALOG_STANDARD.md en MODULE_CHECKLIST.md. Wijzig geen
bestanden. Beoordeel eerst correctness, dataverlies, dode routes, toegankelijkheid,
responsive gedrag, offline werking, LocalStorage, beveiliging en regressierisico; bespreek
daarna onderhoudbaarheid. Onderbouw iedere bevinding met bestand en regel. Rangschik als
blokkerend, hoog, middel of laag. Maak onderscheid tussen bevestigd probleem, risico en
suggestie. Meld expliciet wanneer geen bevindingen zijn en welke tests niet zijn uitgevoerd.
Eindig met een duidelijk oordeel: afgekeurd, herstel nodig of goedgekeurd.
```

## Voorbeeld

Review een nieuwe quiz en de bijbehorende catalogus-entry vóór status `available`.

## Verwachte uitvoer

- Bevindingen op ernst met bewijs.
- Open vragen en testbeperkingen.
- Eenduidig reviewoordeel zonder codewijzigingen.

