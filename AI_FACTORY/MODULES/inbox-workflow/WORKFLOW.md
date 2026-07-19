# Inbox Workflow

**Normatief:** ja
**Workflowversie:** 1.1.0

## 1. Reikwijdte

Deze workflow registreert bestaande HTML-modules vanuit de in `CONFIG.md` ingestelde inbox.
Zij maakt geen leerinhoud, wijzigt geen modulefunctionaliteit en publiceert niets. Alle paden,
catalogusvelden, classificatiedimensies en projectdocumenten worden uitsluitend uit de configuratie gelezen.

## 2. Rollen en beslismomenten

| Rol | Verantwoordelijkheid |
|---|---|
| Aanleveraar | Plaatst module en assets in de inbox en levert bekende metadata |
| Analist | Voert alleen read-only inspectie uit en maakt een registratievoorstel |
| Goedkeurder | Bevestigt plaatsing, naam, gedeeld gebruik en toegestane wijzigingen |
| Registrator | Voert uitsluitend het goedgekeurde plan uit en verzamelt bewijs |

Dezelfde AI mag analist en registrator zijn, maar mag de goedkeuringspoort nooit overslaan.
De analyse, goedkeuring en eventuele uitvoering vormen standaard één doorlopende conversatie.
De gebruiker hoeft na het rapport geen tweede uitvoeringsprompt te plakken.

## 3. Statusmodel

```text
inbox
  -> geanalyseerd
  -> voorstel-gereed
  -> goedgekeurd
  -> registratie-bezig
  -> gevalideerd
  -> geregistreerd
```

Alternatieve eindstatussen zijn `geblokkeerd` en `afgewezen`. Een geblokkeerde of afgewezen
module blijft in de inbox en wordt niet gedeeltelijk geregistreerd.

## 4. Fase A — configuratie en inventarisatie

1. Lees `CONFIG.md` volledig.
2. Valideer alle geconfigureerde paden binnen de projectroot.
3. Lees het geconfigureerde launcherbestand, cataloguscontract, modulestandaard en checklist.
4. Inventariseer recursief uitsluitend toegestane module-extensies in de inbox.
5. Inventariseer de bestaande catalogus en alle fysieke modules onder `catalogRoot` buiten de inbox.
6. Registreer per inboxitem een SHA-256-bronhash, bestandsgrootte en bijbehorende lokale assets.

Als configuratie of broninventarisatie niet betrouwbaar is, stopt de analyse zonder wijzigingen.

## 5. Fase B — read-only moduleanalyse

Onderzoek per module:

- titel, beschrijving, type, duur en andere beschikbare metadata;
- bestandsnaam en naamgevingsconventie;
- de in `classificationFields` geconfigureerde plaatsingsgegevens;
- verwijzingen naar lokale assets, scripts, stylesheets en andere bestanden;
- interne home-, breadcrumb-, terug- en fallbacklinks;
- mogelijk gebruik op meerdere catalogusplaatsen;
- overeenkomsten met bestaande modules op pad, id, titel, inhoud en SHA-256-hash.

Gebruik bewijs in deze volgorde:

1. expliciete, valide metadata in of naast de module;
2. een meegeleverde registratieopdracht;
3. bestaande projectcatalogus en conventies;
4. zichtbare moduletekst en bestandsnaam als voorstel, nooit als bevestigd feit.

Ken ieder afgeleid veld één status toe:

- `bevestigd`: expliciet en eenduidig aangetoond;
- `voorgesteld`: aannemelijk, maar goedkeuring vereist;
- `onopgelost`: onvoldoende of tegenstrijdig bewijs.

Een `onopgelost` verplicht veld blokkeert registratie.

## 6. Fase C — conflictcontrole

Controleer minimaal:

- identieke hash op een andere locatie;
- gelijk module-id of gelijk cataloguspad;
- bestandsnaamconflict, ook wanneer alleen hoofdletters verschillen;
- bestaand bestand op het doelpad;
- ontbrekende of buiten de inbox verwijzende assets;
- onveilige `..`, absolute schijfpaden of externe verplichte bronnen;
- metadata die strijdig is met het cataloguscontract;
- meerdere gewenste plaatsingen die één gedeeld bestand vereisen.

Bij twee of meer plaatsingen stelt de workflow conform `sharedUseMinimumPlacements` één doel
onder `sharedFolder` voor. Er worden nooit kopieën per plaatsing voorgesteld.

## 7. Fase D — registratievoorstel

Maak per module een rapport op basis van `TEMPLATES/registratie-rapport.md` met:

- bronbestand en bronhash;
- gevonden en ontbrekende metadata;
- voorgestelde classificatie met bewijsstatus;
- voorgesteld doelpad;
- gedeeld of projectspecifiek gebruik;
- benodigde cataloguskoppelingen;
- te herstellen interne links en mee te verplaatsen assets;
- documentatiewijzigingen;
- conflicten, risico's en niet-uitgevoerde controles;
- exact overzicht van voorgenomen bestandswijzigingen.

De analysefase maakt geen mappen, verplaatst niets en wijzigt geen catalogus of documentatie.
Na het volledige rapport eindigt de AI altijd exact met deze ene vraag:

> Wil je het registratieplan uitvoeren?

Daarna wacht de AI op een van de vier vastgelegde korte antwoorden uit fase 8.

## 8. Goedkeuringspoort

Registratie vereist een expliciet goedgekeurd rapport met minimaal:

- rapport-id;
- bronpad en SHA-256-hash;
- exact doelpad;
- exacte catalogusplaatsing(en);
- toestemming voor interne link- en documentatieaanpassingen;
- naam of aanduiding van de goedkeurder en goedkeuringsdatum.

Wijkt de actuele bronhash af van de goedgekeurde hash, dan vervalt de goedkeuring en begint de
workflow opnieuw bij analyse.

### 8.1 Korte antwoorden

De AI verwerkt het eerstvolgende gebruikersantwoord volgens deze beslisregels:

| Antwoord | Verplichte vervolgstap |
|---|---|
| `Ja` | Keur het meest recente volledige registratieplan in de huidige conversatie goed en voer fase E automatisch uit. Vraag niet om een tweede prompt. |
| `Nee` | Voer niets uit, markeer het voorstel als niet goedgekeurd en laat de inbox ongewijzigd. |
| `Ja, maar wijzig eerst...` | Voer niets uit. Verwerk uitsluitend de genoemde wijziging in een herzien read-only voorstel, toon het volledige herziene rapport en stel opnieuw exact de vaste goedkeuringsvraag. |
| `Nee, analyseer opnieuw.` | Voer niets uit. Analyseer de actuele inbox opnieuw vanaf fase A, vervang het actieve voorstel door het nieuwe rapport en stel opnieuw exact de vaste goedkeuringsvraag. |

`Ja` verwijst uitsluitend naar het laatst getoonde, nog actieve rapport in dezelfde conversatie.
De AI gebruikt dat rapport, de daarin opgenomen bronhashes en de eerdere analyse als uitvoeringsbron.
Wanneer het rapport niet meer beschikbaar, onvolledig, gewijzigd of dubbelzinnig is, voert de AI
niets uit en start zij opnieuw bij fase A. De AI reconstrueert nooit een plan uit aannames.

`PROMPTS/03_GOEDKEURING.md` is de normatieve interpretatie van deze korte antwoorden.
`PROMPTS/02_REGISTREER_MODULES.md` blijft de interne uitvoeringsinstructie en hoeft niet door de
gebruiker te worden gekopieerd of opnieuw ingevuld.

## 9. Fase E — gecontroleerde registratie

Na een geldig antwoord `Ja` start de AI zonder nieuwe gebruikersprompt:

1. controleer configuratie, bronhash en doelpad opnieuw;
2. maak uitsluitend de goedgekeurde doelmappen;
3. verplaats module en gekoppelde assets; kopieer de HTML-module niet;
4. normaliseer alleen de expliciet goedgekeurde bestandsnaam;
5. herstel relatieve interne links voor de nieuwe mapdiepte;
6. voeg uitsluitend de goedgekeurde cataloguskoppeling(en) toe;
7. synchroniseer alleen de in het plan genoemde documentatie;
8. voer de volledige checklist en projectspecifieke tests uit;
9. controleer oude paden, duplicaten en hoofdlettergevoeligheid;
10. verwijder lege module-submappen uit de inbox, maar behoud de geconfigureerde inboxmarker.

Bij een fout stopt de registrator. Verberg geen gedeeltelijke uitvoering; rapporteer exact welke
stappen al zijn uitgevoerd en welke herstelactie nodig is.

## 10. Definitie van geregistreerd

Een module is pas geregistreerd wanneer:

- het doelbestand en alle vereiste assets bestaan;
- alle cataloguskoppelingen naar het exacte doelpad verwijzen;
- interne links en launcherroute aantoonbaar werken;
- geen ongewenst duplicaat of oud pad resteert;
- documentatie en rapport zijn bijgewerkt;
- de eindtest is geslaagd;
- de inbox buiten de marker leeg is.

Commit, push en release zijn geen onderdeel van deze definitie.

## 11. Optionele VS Code-bediening

Een project mag read-only VS Code Tasks aanbieden om de inboxstatus en de juiste promptpaden te
tonen. Zo'n taak is uitsluitend een bedieningslaag en mag fase A tot en met E niet vervangen,
geen conversatiegoedkeuring aannemen en geen module-, catalogus- of rapportbestand wijzigen.

De Academy-referentie-implementatie staat in `.vscode/tasks.json` en
`scripts/inbox-workflow/Invoke-InboxWorkflow.ps1`. Alleen een expliciet `Ja` in de actieve
Codex-conversatie kan fase E starten; het uitvoeren van een VS Code Task geldt nooit als goedkeuring.
