# VS Code taken

## Waar staan de taken?

Open in VS Code:

**Terminal > Run Task...**

Je kunt ook het opdrachtenmenu openen.

Kies daarna **Tasks: Run Task**.

## Hoe start je een taak?

1. Open de juiste projectmap.
2. Kies **Terminal > Run Task...**.
3. Klik op de gewenste taak.
4. Lees de melding in de terminal.
5. Stop bij een foutmelding.

## Git Assistent

Je vindt deze taak via:

**Terminal > Run Task... > Git Assistent**

De taak opent het interactieve Git Dashboard.

Hij toont de branch, wijzigingen, staging en de koppeling met GitHub.

Kies in het menu:

- `1` voor Git-status;
- `2` voor wijzigingen;
- `3` voor aanbevolen stappen;
- `4` om te vernieuwen;
- `5` voor Git-uitleg;
- `6` voor repositorycontrole;
- `7` voor één duidelijk advies over wat je nu moet doen;
- `0` of `Q` om af te sluiten.

Na iedere actie blijft het dashboard actief. De taak geeft alleen advies en verandert niets.

De bestaande Inbox Workflow-taken blijven beschikbaar.

## Project Health Check

Je vindt deze taak via:

**Terminal > Run Task... > Project Health Check**

De taak controleert de projectbasis, documentatie en modulecatalogus. Hij meldt ontbrekende
bestanden, dubbele module-ID's en HTML-modules die niet goed geregistreerd zijn.

De taak is volledig read-only. Hij maakt, herstelt, verplaatst of verwijdert niets.

## Hoe worden nieuwe taken toegevoegd?

Een module kan een voorbeeld leveren in:

```text
vscode/tasks.json.fragment
```

Een ontwikkelaar voegt de juiste taak daarna toe aan:

```text
.vscode/tasks.json
```

Bestaande taken mogen niet worden overschreven.

Een taak wordt pas toegevoegd nadat duidelijk is wat hij doet.

## Belangrijk

Een taak starten is niet hetzelfde als toestemming geven.

Lees altijd eerst het plan.
