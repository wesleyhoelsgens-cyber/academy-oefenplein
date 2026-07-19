# 01 — Maak een nieuwe module

## Doel

Een complete, zelfstandige Academy-module bouwen op basis van goedgekeurde leerinhoud.

## Wanneer gebruiken

Gebruik deze prompt wanneer nog geen modulebestand bestaat en de oefenvorm al is gekozen.

## Variabelen

- `[Bestandsnaam]` (kebab-case, inclusief `.html`)
- `[Opleiding]`, `[Plaatsingstype]`, `[Leerjaar indien van toepassing]`, `[Periode of onderdeel]`, `[Thema]`
- `[Titel]`, `[Type]`, `[Duur]`, `[Niveau]`
- `[Leerdoelen]`, `[Bronmateriaal]`, `[Aanvullende eisen]`

## Prompt

```text
Je werkt aan Academy Oefenplein. Lees eerst AI_FACTORY/ACADEMY_CREATOR_PROMPT.md,
MODULE_STANDARD.md, MODULE_CATALOG_STANDARD.md en MODULE_CHECKLIST.md plus de actuele
projectbestanden en AI_FACTORY/MODULES/inbox-workflow/CONFIG.md. Bouw één zelfstandige module
als `[CONFIG.inboxPath]/[Bestandsnaam]`. Bepaal of maak nog geen definitieve catalogusmap;
die volgt uitsluitend via de Inbox Workflow na analyse en goedkeuring.

Plaatsing: [Opleiding] / [Plaatsingstype] / [Leerjaar indien van toepassing] /
[Periode of onderdeel] / [Thema].
Titel: [Titel]. Type: [Type]. Duur: [Duur]. Niveau: [Niveau].
Leerdoelen: [Leerdoelen]. Gebruik uitsluitend: [Bronmateriaal].
Aanvullende eisen: [Aanvullende eisen].

Gebruik HTML, interne CSS en vanilla JavaScript. Gebruik geen frameworks, externe
libraries, CDN, backend of verplichte netwerkverbinding. Maak een start-, oefen-,
eind- en fouttoestand. Zorg voor toetsenbordbediening, zichtbare focus en responsive
weergave. Integreer de module niet rechtstreeks. Lever canonieke metadata, een voorgestelde
catalogus-entry en een eerlijk testverslag voor de latere read-only inboxanalyse.
Verzin geen ontbrekende vakinhoud; meld een inhoudelijke blokkade voordat je bouwt.
```

## Voorbeeld

`[Bestandsnaam] = quiz-voedingsstoffen.html`, `[Type] = Quiz`, `[Duur] = 10 minuten`.

## Verwachte uitvoer

- Eén zelfstandig HTML-bestand.
- Volledige metadata en catalogus-entry.
- Overzicht van wijzigingen, tests en aandachtspunten.
