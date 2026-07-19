# 02 — Registreer goedgekeurde modules

## Doel

Uitsluitend een expliciet goedgekeurd en ongewijzigd registratieplan uitvoeren.

## Wanneer gebruiken

Gebruik deze prompt intern nadat de analyseprompt een volledig rapport heeft opgeleverd en de
projecteigenaar in dezelfde conversatie exact `Ja` heeft geantwoord. De gebruiker hoeft dit
bestand nooit te plakken, in te vullen of opnieuw te noemen.

## Variabelen

- `[Meest recente actieve registratierapport uit de huidige conversatie]`
- `[Goedkeurder uit het korte antwoord]`
- `[Goedkeuringsdatum]`

## Prompt

```text
Je werkt met de zelfstandige AI Factory-module Inbox Workflow & Module Registration.

Lees eerst volledig:
- AI_FACTORY/MODULES/inbox-workflow/README.md
- AI_FACTORY/MODULES/inbox-workflow/CONFIG.md
- AI_FACTORY/MODULES/inbox-workflow/WORKFLOW.md
- AI_FACTORY/MODULES/inbox-workflow/CHECKLIST.md
- het meest recente actieve registratierapport uit de huidige conversatie
- de in CONFIG.md geconfigureerde projectcontracten en actuele launcher.

Goedkeurder: [Goedkeurder uit het korte antwoord]. Goedkeuringsdatum: [Goedkeuringsdatum].
Voer uitsluitend de rapport-id's uit het actieve rapport uit. Gebruik de eerdere analyse als bron;
vraag de gebruiker niet om het rapport, de hash, het doelpad of deze prompt opnieuw te plakken.

Controleer vóór iedere mutatie:
- dat rapport-id, bronpad, SHA-256-bronhash, doelpad en catalogusplaatsing exact overeenkomen;
- dat geen verplicht veld onopgelost is;
- dat doelpaden binnen de geconfigureerde projectroot en catalogRoot liggen;
- dat gedeeld gebruik naar één bestand onder sharedFolder leidt;
- dat geen nieuw conflict is ontstaan sinds de analyse.

Stop zonder wijzigingen en rapporteer de afwijking wanneer één controle faalt.
Start bij een ontbrekend, onvolledig of dubbelzinnig actief rapport opnieuw met de analyseprompt.

Bij een geldige goedkeuring voer je WORKFLOW.md fase E exact uit. Maak alleen goedgekeurde
mappen, verplaats module en assets zonder HTML-kopieën, herstel goedgekeurde interne links,
werk uitsluitend de goedgekeurde cataloguskoppelingen en documentatie bij en voer CHECKLIST.md uit.

Controleer fysieke paden, oude verwijzingen, duplicaten, hoofdlettergebruik, directe opening,
launcherroutes, browserconsole en regressie. Maak de inbox buiten de geconfigureerde marker
alleen leeg wanneer iedere registratie is geslaagd.

Vul TEMPLATES/registratie-rapport.md aan met werkelijke wijzigingen, bewijs, tests en resterende
waarschuwingen. Commit, push, release of publiceer niet zonder afzonderlijke expliciete opdracht.
```

## Voorbeeld

De AI toont rapport `REG-2026-001`; de gebruiker antwoordt `Ja`; de AI voert dit bestand daarna intern uit.

## Verwachte uitvoer

- Alleen goedgekeurde bestands- en cataloguswijzigingen.
- Geen dubbele HTML-module.
- Lege inbox buiten de marker na volledig succes.
- Voltooid registratierapport met werkelijk testbewijs.
