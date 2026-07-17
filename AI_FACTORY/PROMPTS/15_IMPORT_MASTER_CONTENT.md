# 15 — Importeer mastercontent

## Doel

Een officiële inhoudsbron gecontroleerd verwerken in een bestaande module of een voorbereid datapakket.

## Wanneer gebruiken

Gebruik deze prompt wanneer mastercontent leidend is en bestaande oefeninhoud daarmee moet worden gesynchroniseerd.

## Variabelen

- `[Masterbestand]`, `[Doelbestand]`, `[Importscope]`
- `[Unieke sleutel]`, `[Veldmapping]`, `[Conflictregel]`
- `[Verwijderen ontbrekende items: ja/nee]`, `[Niet wijzigen]`

## Prompt

```text
Importeer content uit [Masterbestand] naar [Doelbestand]. Scope: [Importscope].
Gebruik [Unieke sleutel] voor identiteit. Veldmapping: [Veldmapping].
Conflictregel: [Conflictregel]. Ontbrekende items verwijderen: [Verwijderen ontbrekende items: ja/nee].
Niet wijzigen: [Niet wijzigen].

Lees beide bronnen volledig. Maak eerst een inventaris met aantallen, duplicaten, ontbrekende
sleutels, ongeldige velden en conflicten. Behoud mastercontent inhoudelijk; verbeter spelling of
betekenis niet stilzwijgend. Maak vóór uitvoering een beslijstabel voor toevoegen, bijwerken,
ongewijzigd laten en eventueel verwijderen. Verwijder alleen bij expliciet "ja" en rapporteer
ieder verwijderd item. Behoud modulelogica, id-stabiliteit, catalogusroute en opslagcontract.
Valideer na import aantallen, unieke sleutels, lege verplichte velden, JavaScript-syntax en de
volledige moduleflow. Rapporteer een importoverzicht en alle onopgeloste inhoudsvragen.
```

## Voorbeeld

Synchroniseer 40 begrippen uit een goedgekeurde lesbron met een bestaande flashcardarray op `id`.

## Verwachte uitvoer

- Voorafgaande importanalyse en beslijstabel.
- Gecontroleerd bijgewerkte content.
- Aantallen, validatieresultaten en conflictlog.

