# 12 — Maak een Escape Room

## Doel

Een samenhangende, leerdoelgerichte puzzelmodule bouwen met een duidelijke voortgang.

## Wanneer gebruiken

Gebruik deze prompt wanneer studenten kennis in meerdere opeenvolgende beroepsgerichte opdrachten toepassen.

## Variabelen

- `[Bestandsnaam]`, `[Opleiding]`, `[Leerjaar indien van toepassing]`, `[Periode of onderdeel]`, `[Thema]`
- `[Titel]`, `[Duur]`, `[Verhaalcontext]`, `[Aantal puzzels]`
- `[Leerdoelen]`, `[Bronmateriaal]`, `[Hintsysteem]`

## Prompt

```text
Lees eerst AI_FACTORY/MODULES/inbox-workflow/CONFIG.md.
Bouw `[CONFIG.inboxPath]/[Bestandsnaam]` als zelfstandige educatieve Escape Room voor [Opleiding] op de werkelijk
geconfigureerde plaatsing [Leerjaar indien van toepassing] / [Periode of onderdeel] / [Thema]. Titel: [Titel], duur: [Duur].
Context: [Verhaalcontext]. Maak [Aantal puzzels] puzzels voor [Leerdoelen], uitsluitend
op basis van [Bronmateriaal]. Hintsysteem: [Hintsysteem].

Iedere puzzel moet inhoudelijk nodig zijn om verder te komen; gebruik geen willekeurige codes
zonder leerrelatie. Maak instructies, invoer, foutfeedback, hints en voortgang toegankelijk.
Voorkom een onherstelbare vastloper en bied een veilige herstart. Een tijdslimiet is optioneel
en mag toegankelijkheid niet blokkeren. Valideer antwoorden robuust zonder onbedoeld meerdere
goede formuleringen af te keuren. Bouw start-, spel-, voltooiings- en fouttoestand, volledig
offline en responsive. Lever een puzzel-leerdoelmatrix, metadata en tests. Integreer niet zonder
expliciete opdracht.
```

## Voorbeeld

Een voorraadkamer met vier voedselveiligheidspuzzels die samen een eindcode opleveren.

## Verwachte uitvoer

- Zelfstandige Escape Room.
- Puzzel-leerdoelmatrix en hints.
- Metadata en volledig flowtestverslag.
