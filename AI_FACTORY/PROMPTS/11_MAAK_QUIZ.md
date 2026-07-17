# 11 — Maak een quiz

## Doel

Een zelfstandige quiz maken die kennis toetst en inhoudelijke feedback geeft.

## Wanneer gebruiken

Gebruik deze prompt voor gesloten vragen met aantoonbaar juiste antwoorden.

## Variabelen

- `[Bestandsnaam]`, `[Opleiding]`, `[Leerjaar]`, `[Periode]`, `[Thema]`
- `[Titel]`, `[Duur]`, `[Aantal vragen]`, `[Vraagtypen]`
- `[Bronmateriaal]`, `[Cesuur of scorewijze]`

## Prompt

```text
Bouw modules/[Bestandsnaam] als zelfstandige quiz voor [Opleiding], Leerjaar [Leerjaar],
Periode [Periode], thema [Thema]. Titel: [Titel]. Duur: [Duur].
Gebruik [Aantal vragen] vragen van type [Vraagtypen], uitsluitend gebaseerd op [Bronmateriaal].
Scorewijze: [Cesuur of scorewijze].

Toon één vraag per stap, voortgang en pas na inzending inhoudelijke feedback. Randomiseer
antwoordvolgorde alleen als de betekenis behouden blijft. Verwerk een antwoord exact één keer.
Maak scoreberekening transparant en veilig bij nul vragen. Sluit af met score, aandachtspunten
en opnieuw oefenen. Zorg voor een echte lege toestand, toetsenbordbediening, zichtbare focus,
responsive ontwerp en offline werking. Gebruik geen misleidende vragen, dubbele ontkenningen
of verzonnen afleiders. Lever metadata, bronherleidbaarheid en testresultaten; integreer alleen
na expliciete toestemming.
```

## Voorbeeld

Tien meerkeuzevragen over voedingsstoffen met uitleg per antwoord.

## Verwachte uitvoer

- Zelfstandig quizbestand.
- Vraagset met correcte antwoorden en feedback.
- Metadata, scorecontract en testverslag.

