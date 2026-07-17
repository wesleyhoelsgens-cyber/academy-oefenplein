# 10 — Maak flashcards

## Doel

Een zelfstandige flashcardmodule maken voor actief ophalen en zelfbeoordeling.

## Wanneer gebruiken

Gebruik deze prompt voor begrippen, definities, kenmerken, procedures of beroepsvoorbeelden.

## Variabelen

- `[Bestandsnaam]`, `[Opleiding]`, `[Leerjaar]`, `[Periode]`, `[Thema]`
- `[Titel]`, `[Duur]`, `[Aantal kaarten]`, `[Bronmateriaal]`
- `[Kaartvelden]`, `[Opslag gewenst: ja/nee]`

## Prompt

```text
Bouw modules/[Bestandsnaam] als zelfstandige flashcardmodule voor [Opleiding], Leerjaar
[Leerjaar], Periode [Periode], thema [Thema]. Titel: [Titel]. Duur: [Duur].
Maak [Aantal kaarten] kaarten uitsluitend uit [Bronmateriaal].
Kaartvelden: [Kaartvelden]. Opslag gewenst: [Opslag gewenst: ja/nee].

Laat eerst de voorkant zien en pas na een bewuste actie de uitleg. Laat studenten daarna
kiezen tussen "Ken ik" en "Nog oefenen". Toon voortgang, resultaat, moeilijke kaarten en
een gerichte herhaalronde. Voorkom dat een kaart vóór omdraaien wordt beoordeeld. Ondersteun
muis, aanraking en toetsenbord; voorkom dubbele beoordeling. Gebruik LocalStorage alleen bij
"ja", met een unieke versieerbare key en veilige reset. Bouw start-, oefen-, eind- en lege
toestand volgens de AI Factory. Lever metadata en tests; integreer alleen na toestemming.
```

## Voorbeeld

26 kaarten over diëten, microbiologie, eetwensen en voedselveiligheid.

## Verwachte uitvoer

- Zelfstandige flashcardgame.
- Controleerbare kaartenset en metadata.
- Functionele, responsive en toetsenbordtests.

