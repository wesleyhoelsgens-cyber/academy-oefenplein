# 13 — Maak Memory

## Doel

Een toegankelijk memoryspel bouwen waarin betekenisvolle paren worden geoefend.

## Wanneer gebruiken

Gebruik deze prompt voor relaties zoals begrip–definitie, product–eigenschap of situatie–handeling.

## Variabelen

- `[Bestandsnaam]`, `[Opleiding]`, `[Leerjaar]`, `[Periode]`, `[Thema]`
- `[Titel]`, `[Duur]`, `[Aantal paren]`, `[Paartype]`
- `[Bronmateriaal]`, `[Feedback na match]`

## Prompt

```text
Bouw modules/[Bestandsnaam] als zelfstandig Memory voor [Opleiding], Leerjaar [Leerjaar],
Periode [Periode], thema [Thema]. Titel: [Titel]. Duur: [Duur].
Maak [Aantal paren] betekenisvolle paren van type [Paartype] uit [Bronmateriaal].
Feedback na een match: [Feedback na match].

Schud kaarten met Fisher-Yates. Iedere kaart heeft een unieke technische id en een expliciete
pair-id; match nooit alleen op zichtbare tekst. Blokkeer invoer terwijl twee kaarten worden
beoordeeld en voorkom raceconditions bij snel klikken. Maak kaarten met toetsenbord selecteerbaar
en kondig matches begrijpelijk aan. Gebruik niet alleen kleur of positie om paren te herkennen.
Toon zetten, gevonden paren, voortgang, eindresultaat en opnieuw spelen. Zorg voor een bruikbaar
alternatief op smalle schermen, een lege toestand en offline werking. Lever metadata, parenlijst
en tests; integreer alleen na toestemming.
```

## Voorbeeld

Twaalf paren waarin voedingsstoffen aan hun belangrijkste functie worden gekoppeld.

## Verwachte uitvoer

- Zelfstandig memoryspel.
- Gevalideerde paren en matchlogica.
- Metadata, toegankelijkheids- en regressietests.

