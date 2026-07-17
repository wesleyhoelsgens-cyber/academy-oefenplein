# 01 — Maak een nieuwe module

## Doel

Een complete, zelfstandige Academy-module bouwen op basis van goedgekeurde leerinhoud.

## Wanneer gebruiken

Gebruik deze prompt wanneer nog geen modulebestand bestaat en de oefenvorm al is gekozen.

## Variabelen

- `[Bestandsnaam]`
- `[Opleiding]`, `[Leerjaar]`, `[Periode]`, `[Thema]`
- `[Titel]`, `[Type]`, `[Duur]`, `[Niveau]`
- `[Leerdoelen]`, `[Bronmateriaal]`, `[Aanvullende eisen]`

## Prompt

```text
Je werkt aan Academy Oefenplein. Lees eerst AI_FACTORY/ACADEMY_CREATOR_PROMPT.md,
MODULE_STANDARD.md, MODULE_CATALOG_STANDARD.md en MODULE_CHECKLIST.md plus de actuele
projectbestanden. Bouw één zelfstandige module: modules/[Bestandsnaam].

Plaatsing: [Opleiding] / Leerjaar [Leerjaar] / Periode [Periode] / [Thema].
Titel: [Titel]. Type: [Type]. Duur: [Duur]. Niveau: [Niveau].
Leerdoelen: [Leerdoelen]. Gebruik uitsluitend: [Bronmateriaal].
Aanvullende eisen: [Aanvullende eisen].

Gebruik HTML, interne CSS en vanilla JavaScript. Gebruik geen frameworks, externe
libraries, CDN, backend of verplichte netwerkverbinding. Maak een start-, oefen-,
eind- en fouttoestand. Zorg voor toetsenbordbediening, zichtbare focus en responsive
weergave. Integreer de module alleen wanneer dat expliciet in deze opdracht staat.
Lever canonieke metadata, een compacte catalogus-entry en een eerlijk testverslag.
Verzin geen ontbrekende vakinhoud; meld een inhoudelijke blokkade voordat je bouwt.
```

## Voorbeeld

`[Bestandsnaam] = quiz-voedingsstoffen.html`, `[Type] = Quiz`, `[Duur] = 10 minuten`.

## Verwachte uitvoer

- Eén zelfstandig HTML-bestand.
- Volledige metadata en catalogus-entry.
- Overzicht van wijzigingen, tests en aandachtspunten.

