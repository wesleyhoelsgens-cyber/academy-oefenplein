# 05 — Bugfix

## Doel

De oorzaak van een reproduceerbaar defect vinden en met de kleinste veilige wijziging herstellen.

## Wanneer gebruiken

Gebruik deze prompt bij foutmeldingen, kapotte interactie, verkeerde score, opslag- of weergaveproblemen.

## Variabelen

- `[Bestandsnaam]`, `[Probleembeschrijving]`
- `[Reproductiestappen]`, `[Verwacht gedrag]`, `[Werkelijk gedrag]`
- `[Niet wijzigen]`

## Prompt

```text
Onderzoek het defect in [Bestandsnaam]. Probleem: [Probleembeschrijving].
Reproductie: [Reproductiestappen]. Verwacht: [Verwacht gedrag]. Werkelijk: [Werkelijk gedrag].
Niet wijzigen: [Niet wijzigen].

Lees eerst alle relevante code. Reproduceer het probleem indien mogelijk en leg de oorzaak
met concreet bewijs vast. Herstel alleen de oorzaak; voer geen opportunistische refactor of
nieuwe functionaliteit uit. Behoud offline werking, toegankelijkheid, metadata en bestaande
opslagcompatibiliteit. Voeg een gerichte regressiecontrole toe of beschrijf een herhaalbare
handmatige test. Controleer syntax, console, relevante viewport en aangrenzende flows.
Rapporteer oorzaak, wijziging, tests en resterende onzekerheid.
```

## Voorbeeld

Na `Opnieuw oefenen` blijft de vorige score zichtbaar terwijl een nieuwe ronde start.

## Verwachte uitvoer

- Oorzaakanalyse.
- Minimale codewijziging.
- Bewijs dat de fout en relevante regressies zijn gecontroleerd.

