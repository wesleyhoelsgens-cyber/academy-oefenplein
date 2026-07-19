# 07 — Refactor een module

## Doel

De interne structuur verbeteren terwijl zichtbaar gedrag en gegevenscontracten gelijk blijven.

## Wanneer gebruiken

Gebruik deze prompt voor bewezen onderhoudbaarheidsproblemen, niet als algemene opschoonopdracht.

## Variabelen

- `[Modulepad]` (relatief onder `modules/`, inclusief bestandsnaam), `[Refactordoel]`, `[Probleemlocaties]`
- `[Gedrag dat gelijk moet blijven]`, `[Prestatiegrens]`

## Prompt

```text
Refactor modules/[Modulepad] met als doel: [Refactordoel].
Probleemlocaties: [Probleemlocaties].
Dit gedrag en deze contracten moeten exact gelijk blijven: [Gedrag dat gelijk moet blijven].
Prestatiegrens: [Prestatiegrens].

Leg vóór wijziging de huidige states, gebruikersflows, scorelogica, metadata en opslagkey vast.
Voer kleine, controleerbare wijzigingen uit. Verander geen leerinhoud, teksten, catalogusroute,
LocalStorage-schema of zichtbaar gedrag zonder aparte toestemming. Voeg geen framework of
nieuwe abstractielaag zonder concrete noodzaak toe. Controleer de volledige moduleflow vóór
en na de refactor, inclusief mobiel, toetsenbord, lege toestand en opgeslagen status.
Rapporteer welke duplicatie of complexiteit is verwijderd en lever regressiebewijs.
```

## Voorbeeld

Centraliseer dubbele schermwissellogica zonder de flashcardflow of opslag te veranderen.

## Verwachte uitvoer

- Intern verbeterde module.
- Ongewijzigde externe werking.
- Voor/na-uitleg en regressietests.
