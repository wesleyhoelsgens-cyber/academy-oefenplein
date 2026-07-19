# Installatie in een ander project

De Inbox Workflow vereist geen package manager, scriptinstallatie, backend of externe service.

## Installatie

1. Kopieer de volledige map:

   ```text
   AI_FACTORY/MODULES/inbox-workflow/
   ```

   naar de AI Factory-map van het doelproject.

2. Pas uitsluitend `CONFIG.md` aan:

   - projectnaam en projectroot;
   - inbox-, catalogus- en gedeelde map;
   - launcher- en documentatiebestand(en);
   - classificatievelden;
   - catalogusveldvertaling;
   - deployment- en hoofdletterbeleid.

3. Maak het geconfigureerde `inboxPath` aan en voeg zo nodig de ingestelde lege marker toe.

4. Controleer dat de in `CONFIG.md` genoemde contracten en standaarden bestaan.

5. Link deze module vanuit de centrale AI Factory-documentatie van het doelproject. Kopieer de
   workflowtekst niet naar een tweede locatie.

6. Gebruik direct:

   - `PROMPTS/01_ANALYSE_INBOX.md` voor read-only analyse;
   - `PROMPTS/03_GOEDKEURING.md` als besliscontract voor het korte gebruikersantwoord;
   - `PROMPTS/02_REGISTREER_MODULES.md` uitsluitend intern na antwoord `Ja`.

   De gebruiker krijgt na de analyse altijd de vraag `Wil je het registratieplan uitvoeren?`
   en hoeft daarna alleen `Ja`, `Nee`, `Ja, maar wijzig eerst...` of
   `Nee, analyseer opnieuw.` te antwoorden. Laat de gebruiker nooit de uitvoeringsprompt kopiëren.

## Optionele VS Code-bedieningslaag

Voor een Windows-project kunnen daarnaast deze bestanden worden overgenomen:

```text
.vscode/tasks.json
scripts/inbox-workflow/Invoke-InboxWorkflow.ps1
```

De taken worden gestart via **Terminal > Run Task...** of **Tasks: Run Task**. Het script leest
`inboxPath` uit `CONFIG.md`; pas daarom geen inboxpad in het script zelf aan.

Beschikbare taken:

- `Analyseer Inbox`: valideert de inbox en wijst naar `PROMPTS/01_ANALYSE_INBOX.md`;
- `Registreer Goedgekeurd Plan`: wijst naar `PROMPTS/03_GOEDKEURING.md` en toont
  `PROMPTS/02_REGISTREER_MODULES.md` als interne uitvoeringsprompt;
- `Controleer Inboxstatus`: rapporteert inboxbestanden en aanwezige workflowrapporten.

Deze eerste versie start geen AI of Codex-proces, bewaart geen conversatiestatus en registreert
geen bestanden. De gebruiker voert de getoonde vervolgstap handmatig uit in dezelfde
Codex-conversatie. Daardoor blijft de expliciete goedkeuringspoort normatief leidend.

## Migratievoorbeelden

### EduTrack

Configureer bijvoorbeeld een inbox onder `learning-modules/_inbox`, een catalogus onder
`learning-modules/catalog` en classificatievelden zoals opleiding, cohort en onderwerp.

### Vakantieproof

Configureer een contentinbox, een activiteitenregister en velden zoals bestemming, doelgroep
en activiteitstype. De workflow zelf blijft ongewijzigd.

### Stage Simulator

Configureer een scenariomap, launcherbestand en velden zoals sector, niveau en scenariofase.

### Traiteur-app

Configureer het bestaande modulepad, de actuele routercatalogus en de projectdocumentatiemap.
Gedeelde leermodules blijven één fysiek bestand.

## Acceptatie na installatie

- Voer eerst een analyse uit met een kleine testmodule.
- Controleer dat fase A tot en met D geen bestanden wijzigt.
- Controleer dat de analyse exact met de vaste goedkeuringsvraag eindigt.
- Antwoord `Ja` en controleer dat de AI zonder tweede prompt het actieve rapport registreert.
- Test ook `Nee`, `Ja, maar wijzig eerst...` en `Nee, analyseer opnieuw.` zonder mutaties.
- Controleer de volledige registratiechecklist.
- Verwijder de testmodule alleen via de normale projectworkflow.

Als naast `CONFIG.md` nog workflowbestanden moeten worden aangepast, is de installatie niet
projectonafhankelijk genoeg en moet de configuratie worden uitgebreid.
