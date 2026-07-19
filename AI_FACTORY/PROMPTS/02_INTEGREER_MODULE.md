# 02 — Integreer een module

## Doel

Een bestaand, werkend HTML-bestand via de officiële Inbox Workflow laten registreren.

## Wanneer gebruiken

Gebruik deze prompt als ingang voor registratie. De feitelijke analyse en uitvoering worden
uitsluitend gedelegeerd aan `AI_FACTORY/MODULES/inbox-workflow/`.

## Variabelen

- `[Bestandsnaam in inbox]`
- `[Bekende metadata en gewenste plaatsing]`

## Prompt

```text
Lees AI_FACTORY/MODULES/inbox-workflow/README.md en CONFIG.md volledig.
Te registreren inboxbestand: [Bestandsnaam in inbox].
Bekende metadata en gewenste plaatsing: [Bekende metadata en gewenste plaatsing].
Gebruik AI_FACTORY/MODULES/inbox-workflow/PROMPTS/01_ANALYSE_INBOX.md. Toon het volledige
actieve rapport en eindig exact met: Wil je het registratieplan uitvoeren?

Verwerk het korte antwoord volgens PROMPTS/03_GOEDKEURING.md. Bij `Ja` voer je automatisch en
intern PROMPTS/02_REGISTREER_MODULES.md uit op basis van de eerdere analyse. Vraag de gebruiker
nooit om de uitvoeringsprompt, het rapport of variabelen opnieuw te plakken.

Kopieer de workflow niet in deze uitvoering, omzeil de goedkeuringspoort niet en integreer nooit
rechtstreeks vanuit de inbox. Rapporteer uitsluitend werkelijk uitgevoerde controles.
```

## Voorbeeld

Analyseer inboxbestand `flashcards-les-3.html` met de bekende gewenste plaatsing uit de opdracht.

## Verwachte uitvoer

- Zonder goedkeuring: alleen een read-only registratierapport.
- Met antwoord `Ja`: automatische gecontroleerde registratie volgens het actieve rapport.
