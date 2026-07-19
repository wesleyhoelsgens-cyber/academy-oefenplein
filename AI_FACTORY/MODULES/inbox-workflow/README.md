# Inbox Workflow & Module Registration

**Versie:** 1.1.0
**Type:** zelfstandige AI Factory-module
**Status:** gereed voor projectconfiguratie

## Doel

Deze module biedt een gecontroleerde workflow om nieuwe zelfstandige HTML-modules vanuit
een tijdelijke inbox te analyseren, voor registratie voor te stellen en na expliciete
goedkeuring in een projectcatalogus op te nemen.

De module bevat geen projectspecifieke workflowlogica. Alle waarden die per project verschillen
staan uitsluitend in [CONFIG.md](CONFIG.md). Daardoor kan de volledige map zonder herontwerp
naar een andere AI Factory worden gekopieerd.

## Principes

- Analyse en uitvoering zijn twee strikt gescheiden fasen.
- De analysefase is volledig read-only.
- Registratie begint alleen met een expliciet goedgekeurd registratieplan.
- Het rapport eindigt altijd met `Wil je het registratieplan uitvoeren?`.
- Een kort antwoord `Ja` start automatisch de interne registratie; een tweede lange prompt is verboden.
- Onzekere onderwijs- of catalogusplaatsing wordt nooit als feit behandeld.
- Eén bronmodule leidt tot één fysiek HTML-bestand.
- Meervoudig gebruik leidt tot één gedeeld bestand en meerdere cataloguskoppelingen.
- Bestanden worden pas uit de inbox verplaatst nadat conflicten en ontbrekende assets zijn opgelost.
- Git-commit, push, release en publicatie blijven buiten deze workflow, tenzij een afzonderlijke opdracht ze expliciet autoriseert.

## Inhoud

| Bestand | Functie |
|---|---|
| [CONFIG.md](CONFIG.md) | Enige plaats voor projectspecifieke instellingen |
| [WORKFLOW.md](WORKFLOW.md) | Normatieve analyse-, goedkeurings- en registratiestappen |
| [CHECKLIST.md](CHECKLIST.md) | Verplichte kwaliteits- en eindcontrole |
| [INSTALL.md](INSTALL.md) | Kopieer- en configuratiehandleiding voor andere projecten |
| [PROMPTS/01_ANALYSE_INBOX.md](PROMPTS/01_ANALYSE_INBOX.md) | Read-only inboxanalyse en registratievoorstel |
| [PROMPTS/02_REGISTREER_MODULES.md](PROMPTS/02_REGISTREER_MODULES.md) | Uitvoering van uitsluitend een goedgekeurd plan |
| [PROMPTS/03_GOEDKEURING.md](PROMPTS/03_GOEDKEURING.md) | Verwerking van `Ja`, `Nee` en de twee herzieningsantwoorden |
| [TEMPLATES/registratie-rapport.md](TEMPLATES/registratie-rapport.md) | Vast rapport voor analyse, goedkeuring en bewijs |

## Gebruik

1. Controleer en vul `CONFIG.md` voor het doelproject.
2. Plaats nieuwe HTML-modules en bijbehorende lokale assets in de geconfigureerde inbox.
3. Gebruik `01_ANALYSE_INBOX.md`; de AI toont het rapport en vraagt: `Wil je het registratieplan uitvoeren?`
4. Antwoord uitsluitend met `Ja`, `Nee`, `Ja, maar wijzig eerst...` of `Nee, analyseer opnieuw.`
5. Bij `Ja` gebruikt de AI automatisch het meest recente rapport en voert intern `02_REGISTREER_MODULES.md` uit.
6. De AI doorloopt `CHECKLIST.md` en bewaart het voltooide registratierapport.

Zonder `Ja` stopt de workflow vóór iedere mutatie. De gebruiker plakt nooit een tweede lange uitvoeringsprompt.

## VS Code Tasks

Academy Oefenplein bevat een kleine, read-only bedieningslaag in `.vscode/tasks.json` met het
PowerShell-script `scripts/inbox-workflow/Invoke-InboxWorkflow.ps1`.

Start een taak in VS Code via **Terminal > Run Task...** of via het opdrachtenpalet
**Tasks: Run Task**. Kies daarna:

| Taak | Functie |
|---|---|
| `Analyseer Inbox` | Controleert de geconfigureerde inbox en toont het pad naar `01_ANALYSE_INBOX.md`. |
| `Registreer Goedgekeurd Plan` | Toont `03_GOEDKEURING.md` en de interne `02_REGISTREER_MODULES.md`; voert zelf geen registratie uit. |
| `Controleer Inboxstatus` | Toont aantallen, bestandsnamen, groottes, wijzigingsdatums en aanwezige analyse- of registratierapporten. |

De taken lezen `inboxPath` uit `CONFIG.md`, controleren vereiste mappen en prompts en geven bij
een ontbrekend pad een duidelijke fout met een niet-succesvolle exitcode.

### Wat blijft handmatig in Codex?

- Open of gebruik de getoonde analyseprompt in een Codex-conversatie.
- Beoordeel het volledige registratierapport.
- Antwoord in dezelfde conversatie met `Ja`, `Nee`, `Ja, maar wijzig eerst...` of
  `Nee, analyseer opnieuw.`.
- Laat Codex bij `Ja` de hashcontrole, registratie en technische validatie uitvoeren.

### Beperkingen van versie 1

- De taken sturen Codex niet automatisch aan en kopiëren geen prompt naar een chat.
- De registratietaak voert geen mutaties uit en kan niet zelfstandig vaststellen welk
  conversatierapport actief of goedgekeurd is.
- Rapportdetectie gebruikt Markdown-bestanden in de workflowmap en een eenvoudige statusherkenning.
- De bedieningslaag is gericht op Windows en gebruikt `powershell.exe` zonder externe dependencies.
