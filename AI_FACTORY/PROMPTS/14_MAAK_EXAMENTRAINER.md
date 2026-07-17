# 14 — Maak een examentrainer

## Doel

Een zelfstandige oefenomgeving maken die examenvragen realistisch en transparant traint.

## Wanneer gebruiken

Gebruik deze prompt voor een goedgekeurde set examengerichte vragen met bekende beoordelingsregels.

## Variabelen

- `[Bestandsnaam]`, `[Opleiding]`, `[Leerjaar]`, `[Periode]`, `[Thema]`
- `[Titel]`, `[Duur]`, `[Aantal vragen]`, `[Vraagtypen]`
- `[Bronmateriaal]`, `[Beoordelingsmodel]`, `[Tijdslimiet]`

## Prompt

```text
Bouw modules/[Bestandsnaam] als zelfstandige examentrainer voor [Opleiding], Leerjaar
[Leerjaar], Periode [Periode], thema [Thema]. Titel: [Titel]. Duur: [Duur].
Gebruik [Aantal vragen] van type [Vraagtypen] uit [Bronmateriaal].
Beoordelingsmodel: [Beoordelingsmodel]. Tijdslimiet: [Tijdslimiet].

Maak duidelijk dat dit een oefening is en geen officieel examenresultaat. Implementeer het
beoordelingsmodel deterministisch en leg score, maximum en cesuur uit. Geef in oefenmodus
inhoudelijke feedback; scheid die zichtbaar van een eventuele toetsmodus. Behandel onbeantwoorde
vragen, hervatten, afronden en opnieuw starten veilig. Gebruik LocalStorage alleen wanneer
hervatten is gevraagd, met unieke key en reset. Een tijdslimiet krijgt waarschuwingen en een
toegankelijk alternatief. Toon een eindoverzicht per leerdoel. Werk offline, responsive en met
toetsenbord. Lever metadata, beoordelingscontract en tests; integreer alleen na toestemming.
```

## Voorbeeld

Twintig vragen in 30 minuten met een cesuur van 70% en feedback na afloop.

## Verwachte uitvoer

- Zelfstandige examentrainer.
- Transparant beoordelingscontract.
- Metadata en bewijs voor score-, timer- en opslagtests.

