# 02 — Integreer een module

## Doel

Een bestaand, werkend HTML-bestand op de juiste plaats in de Academy Launcher registreren.

## Wanneer gebruiken

Gebruik deze prompt nadat een module in `modules/` is geplaatst en inhoudelijk gereed is.

## Variabelen

- `[Bestandsnaam]`
- `[Opleiding]`, `[Leerjaar indien van toepassing]`, `[Plaatsingstype: periode/speciaal onderdeel/opleidingsonderdeel]`, `[Periode of onderdeel]`, `[Thema]`
- `[Titel]`, `[Type]`, `[Duur]`, `[Beschrijving]`

## Prompt

```text
Lees eerst de bestaande module modules/[Bestandsnaam], app.js en de AI Factory-
catalogusstandaard. Integreer de module onder [Opleiding] / Leerjaar [Leerjaar indien van toepassing] /
[Plaatsingstype: periode/speciaal onderdeel/opleidingsonderdeel] [Periode of onderdeel], met themakop [Thema].

Gebruik metadata uit de module. Verwachte waarden: titel [Titel], type [Type],
duur [Duur], beschrijving [Beschrijving]. Meld verschillen voordat je ze overschrijft.
Voeg exact één beschikbare catalogus-entry toe. Maak de onderwijsstructuur generiek
configureerbaar als de gevraagde periode nog niet bestaat; voeg geen hardcoded route-
uitzondering toe. Wijzig geen modulelogica en geen andere catalogusitems.

Controleer syntax, fysieke bestandslink, volledige hashroute, browser Terug, kruimelpad,
desktop, tablet en mobiel. Open de module in een echte browser. Rapporteer uitsluitend
tests die werkelijk zijn uitgevoerd.
```

## Voorbeeld

Integreer `flashcards-les-3.html` onder Traiteur, Leerjaar 2, Periode 6, thema `Les 3`.

## Verwachte uitvoer

- Gerichte cataloguswijziging.
- Werkende tegel en link.
- Testverslag en lijst van gewijzigde bestanden.
