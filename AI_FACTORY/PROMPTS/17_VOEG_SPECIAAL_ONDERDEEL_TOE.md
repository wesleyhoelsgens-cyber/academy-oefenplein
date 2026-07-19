# 17 — Voeg een speciaal onderdeel toe

## Doel

Een toets-, examen- of PVB-onderdeel configureerbaar aan een leerjaar toevoegen, buiten de reguliere periodenavigatie.

## Wanneer gebruiken

Gebruik deze prompt wanneer een leerjaar een afzonderlijk overzicht nodig heeft voor toetsvoorbereiding, examens of proeven van bekwaamheid.

## Variabelen

- `[Opleiding]`
- `[Leerjaar]`
- `[Onderdeel-id]`
- `[Titel]`
- `[Beschrijving]`
- `[Thema]` indien direct een bestaande module wordt geplaatst
- `[Modulepad]` (relatief onder `modules/`, inclusief bestandsnaam) indien direct een bestaande module wordt geplaatst

## Prompt

```text
Lees eerst app.js, de bestaande hashrouter en AI_FACTORY/MODULE_CATALOG_STANDARD.md.
Voeg onder [Opleiding] / Leerjaar [Leerjaar] een speciaal onderdeel toe met id
[Onderdeel-id], titel [Titel] en beschrijving [Beschrijving].

Sla het onderdeel op in de configureerbare array specialeOnderdelen van het leerjaar.
Plaats het buiten de reguliere perioden en toon de tegel direct na de periodekaarten.
Gebruik de bestaande hashrouter en een eigen route volgens het aanwezige routepatroon.
Zorg voor een eigen overzicht, breadcrumb, Terug-link en directe bereikbaarheid via de hash.

Als [Modulepad] is ingevuld, integreer uitsluitend die bestaande module onder
themakop [Thema] en gebruik de modulemetadata. Als geen module is opgegeven, toon alleen
de vastgelegde lege toestand en verzin geen voorbeeldmodule.

Maak geen hardcoded UI-knop of opleiding-specifieke routeruitzondering. Wijzig geen
bestaande perioden, modules of zelfstandige modulelogica. Controleer syntax, routes,
browser Terug, breadcrumb, desktop, tablet, mobiel en regressie van bestaande modules.
Rapporteer uitsluitend controles die werkelijk zijn uitgevoerd.
```

## Voorbeeld

Voeg onder Hospitality / Leerjaar 1 het onderdeel `eindtoets-proeve-van-bekwaamheid` toe met titel `Eindtoets & Proeve van bekwaamheid` en zonder modules.

## Verwachte uitvoer

- Eén generieke configuratie-entry in `specialeOnderdelen`.
- Een speciale tegel na de perioden en een rechtstreeks bereikbare overzichtsroute.
- Een correcte lege toestand of uitsluitend echte geïntegreerde modules.
- Een kort testverslag en een lijst van gewijzigde bestanden.
