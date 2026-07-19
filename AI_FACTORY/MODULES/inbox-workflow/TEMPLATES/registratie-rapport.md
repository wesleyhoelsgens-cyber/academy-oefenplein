# Registratierapport

## Batch

| Veld | Waarde |
|---|---|
| Project | `[CONFIG.projectName]` |
| Batch | `[batch-id]` |
| Analysedatum | `[YYYY-MM-DD]` |
| Analist | `[naam of systeem]` |
| Configuratieversie | `[versie]` |
| Status | `[analyse / wacht op goedkeuring / goedgekeurd / geregistreerd / geblokkeerd]` |

## Modulevoorstel `[rapport-id]`

### Bron

| Veld | Waarde |
|---|---|
| Inboxbestand | `[relatief bronpad]` |
| SHA-256 | `[hash]` |
| Bestandsgrootte | `[bytes]` |
| Assets | `[lijst of geen]` |

### Metadata en classificatie

| Veld | Waarde | Bewijsstatus | Bewijs |
|---|---|---|---|
| Titel | `[waarde]` | `[bevestigd/voorgesteld/onopgelost]` | `[bron]` |
| Type | `[waarde]` | `[status]` | `[bron]` |
| Duur | `[waarde]` | `[status]` | `[bron]` |
| Beschrijving | `[waarde]` | `[status]` | `[bron]` |
| `[CONFIG.classificationField]` | `[waarde]` | `[status]` | `[bron]` |

### Conflicten

- Duplicaatcontrole: `[resultaat]`
- Naamconflict: `[resultaat]`
- Ontbrekende assets: `[resultaat]`
- Ontbrekende metadata: `[resultaat]`
- Hoofdlettergevoeligheid: `[resultaat]`

### Registratievoorstel

| Veld | Voorstel |
|---|---|
| Gebruik | `[enkelvoudig/gedeeld]` |
| Doelpad | `[relatief pad]` |
| Catalogusplaatsing(en) | `[lijst]` |
| Interne links aanpassen | `[exacte lijst]` |
| Documentatie aanpassen | `[exacte lijst]` |

### Voorgenomen mutaties

- Aanmaken: `[mappen/bestanden of geen]`
- Verplaatsen: `[bron -> doel]`
- Hernoemen: `[oud -> nieuw of geen]`
- Wijzigen: `[bestanden en reden]`
- Verwijderen: `[alleen lege inboxmappen; geen modulekopieën]`

### Risico's en blokkades

`[bevindingen]`

## Goedkeuring

| Veld | Waarde |
|---|---|
| Besluit | `[goedgekeurd/afgewezen/aanpassing gevraagd]` |
| Kort antwoord | `[Ja/Nee/Ja, maar wijzig eerst.../Nee, analyseer opnieuw.]` |
| Goedgekeurde rapport-id | `[id]` |
| Goedgekeurde bronhash | `[hash]` |
| Goedkeurder | `[naam]` |
| Datum | `[YYYY-MM-DD]` |
| Opmerkingen | `[tekst]` |

## Uitvoering

| Controle | Resultaat | Bewijs |
|---|---|---|
| Bronhash opnieuw gecontroleerd | `[geslaagd/mislukt]` | `[bewijs]` |
| Bestand en assets verplaatst | `[resultaat]` | `[paden]` |
| Catalogus bijgewerkt | `[resultaat]` | `[bestand/regels]` |
| Interne links hersteld | `[resultaat]` | `[bewijs]` |
| Documentatie gesynchroniseerd | `[resultaat]` | `[bestanden]` |
| Duplicaten afwezig | `[resultaat]` | `[bewijs]` |
| GitHub Pages-paden correct | `[resultaat]` | `[bewijs]` |
| Eindtest | `[resultaat]` | `[tests]` |
| Inbox leeg buiten marker | `[resultaat]` | `[bewijs]` |

## Eindstatus

- Status: `[geregistreerd/geblokkeerd]`
- Gewijzigde bestanden: `[lijst]`
- Niet-uitgevoerde controles: `[lijst of geen]`
- Resterende waarschuwingen: `[lijst of geen]`
- Commit/push uitgevoerd: `nee`, tenzij afzonderlijk expliciet geautoriseerd

## Goedkeuringsvraag bij analyse

Laat bij een read-only analyse de nog niet uitgevoerde uitvoeringsvelden als voorgenomen controles
herkenbaar staan. De gebruiker antwoordt met `Ja`, `Nee`, `Ja, maar wijzig eerst...` of
`Nee, analyseer opnieuw.`. Alleen `Ja` activeert automatische uitvoering van dit actieve rapport.
Toon het rapport volledig en eindig daarna exact met deze laatste regel:

> Wil je het registratieplan uitvoeren?
