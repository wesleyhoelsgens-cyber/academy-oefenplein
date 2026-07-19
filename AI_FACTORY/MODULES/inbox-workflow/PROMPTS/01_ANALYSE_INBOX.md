# 01 — Analyseer inbox

## Doel

Alle aangeleverde HTML-modules read-only onderzoeken en een controleerbaar registratievoorstel maken.

## Wanneer gebruiken

Gebruik deze prompt voordat mappen, modules, catalogusbestanden of documentatie worden gewijzigd.

## Variabelen

- `[Optionele batchnaam]`
- `[Aanvullende bekende metadata of plaatsingsinstructies]`

## Prompt

```text
Je werkt met de zelfstandige AI Factory-module Inbox Workflow & Module Registration.

Lees eerst volledig:
- AI_FACTORY/MODULES/inbox-workflow/README.md
- AI_FACTORY/MODULES/inbox-workflow/CONFIG.md
- AI_FACTORY/MODULES/inbox-workflow/WORKFLOW.md
- AI_FACTORY/MODULES/inbox-workflow/CHECKLIST.md
- het in CONFIG.md geconfigureerde cataloguscontract, de modulestandaard, de checklist,
  het launcherbestand en de bestaande projectdocumentatie die voor registratie relevant is.

Analyseer uitsluitend de geconfigureerde inbox. Batch: [Optionele batchnaam].
Bekende metadata of instructies: [Aanvullende bekende metadata of plaatsingsinstructies].

Voer geen wijzigingen uit. Maak geen mappen, verplaats of hernoem niets, pas geen links,
catalogus of documentatie aan en stage niets in Git.

Inventariseer per HTML-module:
- bronpad, SHA-256-hash, bestandsnaam en lokale assets;
- beschikbare en ontbrekende metadata;
- alle in CONFIG.md ingestelde classificatievelden;
- interne links, assetpaden en launcherfallbacks;
- bestaande cataloguskoppelingen en fysieke modules;
- duplicaten, naamconflicten, ontbrekende assets en hoofdletterconflicten;
- enkelvoudig of meervoudig gebruik.

Markeer ieder classificatieveld als bevestigd, voorgesteld of onopgelost en citeer het bewijs.
Verzin geen plaatsing. Bij meervoudig gebruik stel je één fysiek bestand onder de geconfigureerde
sharedFolder voor en meerdere cataloguskoppelingen; stel nooit modulekopieën voor.

Maak voor iedere module en voor de batch als geheel een registratievoorstel volgens
TEMPLATES/registratie-rapport.md. Vermeld exact welke bestanden na goedkeuring zouden worden
aangemaakt, verplaatst, hernoemd of gewijzigd. Bewaar dit als het actieve rapport binnen de
huidige conversatie. Eindig altijd exact met één vraag en plaats daarna geen extra tekst:

Wil je het registratieplan uitvoeren?

Stop daarna en wacht op `Ja`, `Nee`, `Ja, maar wijzig eerst...` of
`Nee, analyseer opnieuw.` volgens PROMPTS/03_GOEDKEURING.md. Vraag de gebruiker nooit om
PROMPTS/02_REGISTREER_MODULES.md te plakken of variabelen opnieuw aan te leveren. Voer nog niets uit.
```

## Voorbeeld

`[Optionele batchnaam] = juli-import`, met als bekende metadata dat één module op twee catalogusplaatsen wordt gebruikt.

## Verwachte uitvoer

- Read-only inventarisatie met bronhashes.
- Conflicten- en ontbrekende-metadatalijst.
- Exact registratievoorstel per module.
- Goedkeuringsblok zonder uitgevoerde mutaties.
- Exact één afsluitende vraag: `Wil je het registratieplan uitvoeren?`
