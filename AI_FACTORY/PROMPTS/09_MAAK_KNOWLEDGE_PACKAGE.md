# 09 — Maak een Knowledge Package

## Doel

Ruwe, goedgekeurde lesinhoud structureren tot een controleerbare bron voor één of meer oefeningen.

## Wanneer gebruiken

Gebruik deze prompt vóór modulebouw wanneer broninhoud omvangrijk of ongestructureerd is.

## Variabelen

- `[Pakketnaam]`, `[Opleiding]`, `[Leerjaar]`, `[Periode]`, `[Thema]`
- `[Bronmateriaal]`, `[Leerdoelen]`, `[Gewenste onderdelen]`
- `[Niet afleiden]`

## Prompt

```text
Maak een Knowledge Package met naam [Pakketnaam] voor [Opleiding], Leerjaar [Leerjaar],
Periode [Periode], thema [Thema]. Gebruik uitsluitend [Bronmateriaal].
Leerdoelen: [Leerdoelen]. Gewenste onderdelen: [Gewenste onderdelen].
Leid niet zelfstandig af: [Niet afleiden].

Behoud bronbetekenis en maak onderscheid tussen letterlijk aangeleverde feiten, genormaliseerde
formuleringen en ontbrekende informatie. Structureer begrippen, definities, voorbeelden,
misvattingen, toepassingsvragen, relaties en bronverwijzingen. Dedupliceer alleen wanneer
betekenissen aantoonbaar gelijk zijn. Signaleer tegenstrijdigheden; los ze niet stilzwijgend op.
Lever Markdown en een machinevriendelijk JavaScript-datavoorbeeld, maar bouw nog geen module
en wijzig de launcher niet. Voeg een inhoudelijke reviewchecklist en dekkingsmatrix per leerdoel toe.
```

## Voorbeeld

Zet een lesdocument over microbiologie om naar begrippen, voorbeelden en toetsbare relaties.

## Verwachte uitvoer

- Herleidbaar kennispakket.
- Dekkingsmatrix en open inhoudsvragen.
- Herbruikbaar datavoorbeeld zonder modulecode.

