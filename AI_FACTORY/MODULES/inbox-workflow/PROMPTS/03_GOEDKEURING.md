# 03 — Verwerk goedkeuring

## Doel

Een kort gebruikersantwoord op het laatst getoonde registratieplan eenduidig verwerken, zonder
dat de gebruiker een tweede uitvoeringsprompt hoeft te plakken.

## Wanneer gebruiken

Gebruik dit besliscontract direct nadat `01_ANALYSE_INBOX.md` het volledige actieve rapport heeft
getoond en exact heeft gevraagd: `Wil je het registratieplan uitvoeren?`

## Variabelen

- `[Meest recente actieve registratierapport in de huidige conversatie]`
- `[Kort gebruikersantwoord]`

## Toegestane antwoorden

- `Ja`
- `Nee`
- `Ja, maar wijzig eerst...`
- `Nee, analyseer opnieuw.`

## Prompt

```text
Gebruik uitsluitend het meest recente volledige, nog actieve registratierapport uit deze
conversatie als bron. Vraag de gebruiker nooit om 02_REGISTREER_MODULES.md, het rapport of de
analyse opnieuw te plakken.

Verwerk het antwoord als volgt:

- Ja
  Markeer het actieve rapport als goedgekeurd. Controleer opnieuw rapport-id, bronpad,
  SHA-256-bronhash, doelpad, catalogusplaatsing en alle verplichte velden. Voer bij een geldige
  controle automatisch PROMPTS/02_REGISTREER_MODULES.md uit. Vraag geen tweede bevestiging.

- Nee
  Voer geen wijzigingen uit. Markeer het actieve voorstel als niet goedgekeurd en bevestig kort
  dat de inbox ongewijzigd blijft.

- Ja, maar wijzig eerst...
  Voer geen wijzigingen uit. Pas uitsluitend de expliciet genoemde wens toe op het read-only
  voorstel. Controleer het herziene plan opnieuw, toon het volledige herziene rapport en eindig
  opnieuw exact met: Wil je het registratieplan uitvoeren?

- Nee, analyseer opnieuw.
  Voer geen wijzigingen uit. Maak de eerdere analyse inactief, analyseer de actuele inbox opnieuw
  vanaf fase A, toon het volledige nieuwe rapport en eindig opnieuw exact met:
  Wil je het registratieplan uitvoeren?

Als geen volledig actief rapport in de huidige conversatie beschikbaar is, als meerdere rapporten
tegelijk actief lijken of als bronhash of verplichte velden afwijken, voer dan niets uit. Start een
nieuwe read-only analyse. Reconstrueer of verzin nooit een registratieplan.
```

## Voorbeeld

| Gebruikersantwoord | Resultaat |
|---|---|
| `Ja` | Het actuele rapport wordt zonder nieuwe prompt gevalideerd en uitgevoerd. |
| `Nee` | Geen mutaties; het voorstel wordt afgesloten. |
| `Ja, maar wijzig eerst de duur naar 20 minuten.` | Alleen het voorstel wordt aangepast en opnieuw ter goedkeuring getoond. |
| `Nee, analyseer opnieuw.` | De inbox wordt opnieuw read-only onderzocht. |

## Verwachte uitvoer

- Geen tweede lange gebruikersprompt.
- Geen mutatie zonder een ondubbelzinnig `Ja` op het actieve rapport.
- Automatische uitvoering na `Ja`.
- Een nieuw volledig rapport en dezelfde vaste vraag na iedere herziening of heranalyse.
