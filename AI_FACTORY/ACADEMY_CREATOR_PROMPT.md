# Academy Creator Prompt

**Versie:** 1.0.0  
**Doel:** met alleen dit document een complete, launchercompatibele Academy-module ontwikkelen

> Gebruik deze tekst als uitvoeringsopdracht voor ChatGPT, Gemini, Claude, Copilot, Codex of een menselijke ontwikkelaar. Vervang alle waarden tussen `[blokhaken]`. Stop en vraag om ontbrekende leerinhoud wanneer inhoudelijke aannames de betrouwbaarheid zouden aantasten.

## 1. Opdracht

Ontwerp, bouw, controleer en lever één zelfstandige oefenmodule op voor Academy Oefenplein.

| Onderdeel | Opdrachtwaarde |
|---|---|
| Opleiding | `[Traiteur / BOL Allround Food Expert / Hospitality / Burgerschap / Rekenen / Nederlands]` |
| Leerjaar | `[1 of 2]` |
| Periode | `[1, 2, 3 of 4]` |
| Thema/sectiekop | `[thema]` |
| Titel | `[moduletitel]` |
| Oefenvorm | `[Flashcardgame / Quiz / Memory / Oefentoets / Escape Room / anders]` |
| Doelgroep | `[mbo-niveau en relevante kenmerken]` |
| Geschatte duur | `[duur]` |
| Bronmateriaal | `[aangeleverde en goedgekeurde bron]` |
| Gewenste bestandsnaam | `[kebab-case].html` |

Leerdoelen:

1. `[leerdoel 1]`
2. `[leerdoel 2]`
3. `[leerdoel 3]`

## 2. Visie van Academy Oefenplein

Academy Oefenplein biedt mbo-studenten een rustige, directe route naar doelgerichte oefeningen:

**Opleiding → Leerjaar → Periode → Modules**

De launcher is geen centrale oefenengine. Zij toont metadata, groepeert modules onder themakopjes en opent zelfstandige HTML-bestanden. Een module bezit daarom haar eigen inhoud, interface, status, feedback en eventuele lokale voortgang.

Deze scheiding bestaat om drie redenen:

- een module kan afzonderlijk worden gemaakt, getest en vervangen;
- fouten in één module verstoren andere oefeningen niet;
- ieder AI-systeem kan een overdraagbaar bestand opleveren zonder projectspecifieke toolchain.

## 3. Doelgroep

De primaire doelgroep bestaat uit mbo-studenten met uiteenlopende taalvaardigheid, digitale ervaring, concentratie en ondersteuningsbehoeften. Schrijf daarom in helder Nederlands:

- korte zinnen en concrete werkwoorden;
- één opdracht per stap;
- vaktermen alleen wanneer ze worden geleerd of al bekend horen te zijn;
- voorbeelden uit herkenbare opleiding- en beroepssituaties;
- respectvolle, volwassen taal zonder kinderachtige toon.

De secundaire doelgroep bestaat uit docenten en beheerders die inhoud moeten kunnen controleren en onderhouden zonder een nieuw framework te leren.

## 4. Onderwijsfilosofie

Ontwerp vanuit aantoonbaar leren, niet vanuit visueel effect.

- **Actief ophalen:** laat studenten kennis zelf reproduceren voordat het antwoord verschijnt.
- **Gerichte oefening:** ieder item ondersteunt minimaal één opgegeven leerdoel.
- **Directe feedback:** leg waar passend uit waarom een antwoord klopt of niet klopt.
- **Veilig proberen:** fouten zijn informatie en leiden naar opnieuw oefenen.
- **Behapbare stappen:** voorkom lange schermen met meerdere concurrerende opdrachten.
- **Beroepscontext:** laat toepassing aansluiten bij echte situaties, zonder onbewezen details te verzinnen.
- **Zelfregulatie:** toon voortgang en geef na afloop een bruikbare vervolgstap.

Vermijd willekeurige gamification, strafmechanismen en tijdsdruk tenzij deze aantoonbaar bij het leerdoel horen.

## 5. Ontwerpfilosofie

- Eén scherm heeft één duidelijke primaire actie.
- De student begrijpt binnen enkele seconden waar de oefening over gaat.
- Inhoud heeft voorrang op decoratie.
- Interactie is voorspelbaar en herstelbaar.
- Het ontwerp is rustig, consistent en mobiel bruikbaar.
- De module werkt zonder docent, account of netwerkverbinding.
- Bouw uitsluitend wat voor de opdracht nodig is.

## 6. UX-richtlijnen

### Startscherm

Toon titel, korte uitleg, leerdoel, geschatte duur en `Start oefenen`. Meld eventueel hoeveel vragen of kaarten de ronde bevat.

### Oefenscherm

Toon:

- een duidelijke opdracht;
- het huidige item;
- voortgang, bijvoorbeeld `Vraag 3 van 10`;
- één herkenbare primaire actie;
- inhoudelijke feedback na beantwoording;
- een veilige route naar het volgende item.

### Eindscherm

Toon een eerlijk resultaat, wat al goed gaat, wat nog aandacht vraagt en `Opnieuw oefenen`. Een percentage is alleen zinvol wanneer duidelijk is waarop het is gebaseerd.

### Interactie

- Voorkom dubbele verwerking bij snel klikken.
- Bevestig een destructieve actie zoals voortgang wissen.
- Verberg geen essentiële bediening achter hover.
- Laat knoppen niet onverwacht verspringen.
- Gebruik minimaal ongeveer 44 bij 44 pixels voor klik- en tikdoelen.

## 7. UI-richtlijnen

Gebruik een rustige Academy-uitstraling met een lichte achtergrond, witte panelen, donkergroene primaire kleur, duidelijke donkere tekst en subtiele randen. Een module mag een passende eigen identiteit hebben zolang leesbaarheid en voorspelbaarheid behouden blijven.

Aanbevolen basisvariabelen:

```css
:root {
    --background: #f4f7f6;
    --panel: #ffffff;
    --text: #19302a;
    --muted: #60736d;
    --primary: #1f6b57;
    --primary-dark: #174f41;
    --border: #cfddd8;
}
```

Richtlijnen:

- gebruik een systeemfont;
- beperk de tekstbreedte voor leesbaarheid;
- gebruik een consistente ruimteschaal;
- maak actieve, hover-, focus- en disabledstatussen herkenbaar;
- gebruik geen emoji als functioneel icoon, tenzij de opdracht dat bewust vraagt;
- geef status naast kleur ook met tekst aan.

Iedere moduleheader bevat standaard een duidelijke `← Terug`-knop, een klikbare Academy
Home-link en een klikbare breadcrumb naar opleiding, leerjaar en periode. Gebruik relatieve
links via `../index.html` met de bestaande launcherhashes. De Terug-knop gebruikt
`window.history.back()` wanneer geschiedenis beschikbaar is en anders de huidige periodepagina.
Maak deze navigatie volledig met toetsenbord bedienbaar en laat de header op mobiel afbreken.

## 8. Responsive ontwerp

Ontwerp mobile-first. Controleer minimaal:

| Formaat | Richtbreedte | Verwachting |
|---|---:|---|
| Mobiel | 360–390 px | één kolom, grote bediening, geen horizontale overflow |
| Tablet | circa 768 px | comfortabele marges, bruikbare kaarten en bediening |
| Desktop | circa 1280 px | begrensde inhoudsbreedte, geen onnodig uitgerekte tekst |

Gebruik flexbox of grid, relatieve maten en `clamp()` waar dit de schaalbaarheid helpt. De module moet bruikbaar blijven bij 200% tekstzoom. Essentiële inhoud mag niet verdwijnen op een klein scherm.

## 9. HTML-standaard

Het bestand bevat minimaal:

```html
<!doctype html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>[Titel] – Academy Oefenplein</title>
    <style>
        /* Zelfstandige modulestijlen */
    </style>
</head>
<body>
    <main>
        <!-- Start-, oefen-, eind- en fouttoestand -->
    </main>
    <script>
        "use strict";
        // Zelfstandige modulelogica
    </script>
</body>
</html>
```

Gebruik semantische elementen, één `main`, logische kopniveaus, echte knoppen voor gedrag en links voor navigatie. Alle id's zijn uniek. Gebruik geen inline eventhandlers.

## 10. CSS-richtlijnen

- Neem CSS op in het zelfstandige modulebestand.
- Begin met `box-sizing: border-box`.
- Gebruik custom properties voor kleuren en herhaalde maten.
- Gebruik geen externe fonts of stylesheet.
- Zorg voor zichtbare `:focus-visible`.
- Gebruik voldoende contrast volgens WCAG 2.1 AA.
- Vermijd vaste hoogtes voor tekstcontainers.
- Ondersteun `prefers-reduced-motion`.
- Gebruik geen `!important` om normale cascadeproblemen te verbergen.

## 11. JavaScript-richtlijnen

- Gebruik vanilla JavaScript ES6 met `"use strict"`.
- Houd inhoud, state, rendering en events logisch gescheiden.
- Gebruik kleine functies met duidelijke namen.
- Valideer brondata voordat een ronde start.
- Gebruik `textContent` voor dynamische tekst uit data.
- Behandel ontbrekende elementen of lege arrays veilig.
- Voorkom dubbele listeners en dubbele scoreverwerking.
- Verwijder debuglogging en tijdelijke code.
- Gebruik geen `eval`, dynamische scriptinjectie of externe requests.

Voor een module met meerdere schermen is één state-object aanbevolen:

```js
const state = {
    items: [],
    index: 0,
    score: 0,
    answered: false
};
```

## 12. Offline werking en afhankelijkheden

De module moet volledig werken wanneer de internetverbinding ontbreekt. Gebruik daarom:

- geen frameworks;
- geen externe libraries;
- geen CDN's;
- geen externe API's;
- geen externe fonts;
- geen verplichte downloads na het openen.

De standaardoplevering is één bestand in `modules/`. Wanneer lokale media noodzakelijk zijn, lever alle bestanden mee, gebruik relatieve paden en documenteer de aanvullende submap.

## 13. Toegankelijkheid

- Alle acties werken met toetsenbord.
- Focus is zichtbaar en volgt een logische volgorde.
- Kleur is nooit de enige informatiedrager.
- Labels, knoppen en foutmeldingen zijn begrijpelijk.
- Afbeeldingen hebben passende alt-tekst; decoratie gebruikt `alt=""`.
- Dynamische feedback gebruikt alleen indien nodig een passend `aria-live`-gebied.
- Verborgen schermen zijn ook voor hulptechnologie verborgen.
- Bewegende effecten zijn niet noodzakelijk voor begrip en kunnen worden verminderd.
- Tijdslimieten worden vermeden of hebben een toegankelijk alternatief.

## 14. LocalStorage-richtlijnen

Gebruik LocalStorage alleen voor aantoonbare gebruikerswaarde. Sla geen persoonsgegevens op.

```js
const STORAGE_KEY = "academy.[module-id].v1";

function saveState(value) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (_) {
        // De module blijft zonder opslag bruikbaar.
    }
}
```

Valideer geladen data, bied een resetmogelijkheid en verhoog de schemaversie bij incompatibele wijzigingen. Een opslagfout mag de oefening nooit blokkeren.

## 15. Foutafhandeling

Ontwerp expliciet voor:

- geen geldige vragen of kaarten;
- ontbrekende optionele velden;
- beschadigde LocalStorage-data;
- opslag die door de browser wordt geweigerd;
- herhaald klikken;
- een scoreberekening zonder beantwoorde items.

Toon een korte, menselijke melding met een veilige vervolgstap. Laat geen lege kaart, `undefined`, stacktrace of vastgelopen scherm zien.

## 16. Prestatie-eisen

- De interface reageert zonder merkbare vertraging.
- De module doet geen netwerkrequests.
- Streef naar minder dan 500 KB zonder media.
- Optimaliseer lokale afbeeldingen.
- Werk DOM-elementen gericht bij en bouw niet onnodig het hele scherm opnieuw op.
- Voorkom zware animaties en langdurige synchrone lussen.
- Lever zonder consolefouten en ongewenste logging op.

## 17. Metadata

Lever naast het HTML-bestand een volledig metadata-object op:

```js
{
    id: "[unieke-kebab-case-id]",
    title: "[titel]",
    type: "[type]",
    description: "[korte beschrijving]",
    estimatedDuration: "[duur]",
    education: "[opleidings-id]",
    year: [1 of 2],
    period: [1, 2, 3 of 4],
    theme: "[zichtbare sectiekop]",
    difficulty: "[basis / gemiddeld / verdieping]",
    tags: ["[tag-1]", "[tag-2]"],
    status: "available",
    file: "modules/[bestandsnaam].html",
    version: "1.0.0",
    factoryVersion: "1.0.0",
    author: "[maker]",
    lastUpdated: "[YYYY-MM-DD]"
}
```

Een themanaam is een visuele sectiekop en geen extra route. Gebruik alleen `status: "available"` nadat alle controles zijn afgerond.

## 18. Integratie in de Academy Launcher

Integreer alleen wanneer de opdracht daarvoor toestemming geeft. Voeg de compacte entry toe onder de juiste opleiding, het juiste leerjaar, de juiste periode en het juiste thema in het bestaande object in `app.js`:

```js
{
    id: "[id]",
    titel: "[titel]",
    type: "[zichtbare typeaanduiding]",
    duur: "[duur]",
    beschrijving: "[beschrijving]",
    bestand: "modules/[bestandsnaam].html",
    beschikbaar: true
}
```

Maak geen JSON-bestand, nieuwe databron, automatische scanner of extra themaroute. Verplaats geen modulelogica naar de launcher. Controleer na integratie de volledige hashroute, Terug-knoppen, browserknop Terug en de startlink.

Controleer voor de moduleheader afzonderlijk Academy Home, opleiding, leerjaar en periode.
Open de module ook rechtstreeks vanuit `modules/` om relatieve paden en de periodefallback
te verifiëren. Gebruik het herbruikbare navigatievoorbeeld uit `MODULE_STANDARD.md`.

## 19. Workflow voor het ontwikkelen van een nieuwe module

### Stap 1 — AI maakt een zelfstandig HTML-bestand

De AI gebruikt goedgekeurde leerinhoud en bouwt één compleet bestand volgens deze standaard. De module wordt eerst rechtstreeks getest.

### Stap 2 — AI levert een complete catalogus-entry

De AI levert canonieke metadata én de compacte launchervertaling. Status blijft `review` of `beschikbaar: false` zolang acceptatie niet is afgerond.

### Stap 3 — Gebruiker plaatst het HTML-bestand in `modules/`

De gebruiker controleert bestandsnaam en locatie en stelt het bestand beschikbaar in de projectworkspace.

### Stap 4 — Codex integreert de module in de Academy Launcher

Codex leest de actuele code, voegt uitsluitend de benodigde catalogus-entry toe en behoudt de bestaande structuur en werking.

### Stap 5 — Gebruiker test de module

De gebruiker doorloopt de module inhoudelijk en functioneel op relevante apparaten. Bevindingen worden hersteld en opnieuw gecontroleerd.

### Stap 6 — Module is direct beschikbaar voor studenten

Na acceptatie wordt de status `available`/`beschikbaar: true`. De startknop opent het zelfstandige bestand vanuit de juiste periodepagina.

## 20. Workflow voor AI-systemen

Deze standaard is modelonafhankelijk. ChatGPT, Gemini, Claude, Copilot en Codex volgen dezelfde volgorde:

1. lees deze volledige prompt en de concrete opdracht;
2. inventariseer bronmateriaal en bestaande projectbestanden;
3. benoem ontbrekende inhoud die niet veilig kan worden aangenomen;
4. ontwerp leerflow en states vóór implementatie;
5. bouw één zelfstandig HTML-bestand;
6. controleer techniek, toegankelijkheid en responsive gedrag;
7. lever volledige metadata en testresultaten;
8. wijzig alleen bestanden waarvoor expliciete toestemming bestaat.

Specifieke aandachtspunten:

| Systeemrol | Gedrag |
|---|---|
| ChatGPT / Gemini / Claude | Lever een compleet bestand en metadata; claim geen lokale tests die niet zijn uitgevoerd |
| Copilot | Volg bestaande patronen, maar kopieer geen ongewenste afhankelijkheden of globale state |
| Codex | Lees actuele bestanden, implementeer in scope, voer proportionele lokale controles uit en rapporteer bewijs |
| Ieder AI-systeem | Verzin geen broninhoud, routes, bestanden of testresultaten |

Wanneer een tool of browser niet beschikbaar is, rapporteer exact welke controle niet is uitgevoerd. Vervang feitelijk bewijs niet door een aanname.

## 21. Verwachte oplevering

Lever in deze volgorde:

1. `modules/[bestandsnaam].html`;
2. het volledige canonieke metadata-object;
3. de compacte launcher-entry;
4. overzicht van gewijzigde bestanden;
5. uitgevoerde functionele, responsive en toegankelijkheidscontroles;
6. bekende problemen en niet-uitgevoerde controles.

Wijzig geen bestaande module, launcherbestand of documentatie buiten de afgesproken scope. Maak geen extra voorbeeldmodule.

## 22. Veelgemaakte fouten

| Fout | Waarom onjuist? | Correctie |
|---|---|---|
| Modulelogica in `app.js` | Maakt de launcher een centrale engine | Houd alle werking in het modulebestand |
| Externe CDN of font | Breekt offline werking | Gebruik lokale code en systeemfonts |
| Niet-bestaand bestand bij beschikbare status | Levert een dode startlink op | Test bestand en route vóór `available` |
| Thema als extra klikscherm | Vertraagt de route | Gebruik thema alleen als sectiekop |
| Alleen kleur voor goed/fout | Niet toegankelijk | Voeg tekst en/of symbool toe |
| `innerHTML` met onbetrouwbare data | Kan onveilige markup verwerken | Gebruik `textContent` |
| LocalStorage zonder validatie | Beschadigde data kan de module blokkeren | Parse veilig en valideer schema |
| Alleen desktop getest | Mobiele studenten kunnen vastlopen | Test mobiel, tablet en desktop |
| Vage feedback zoals “Fout” | Leert de student weinig | Geef een korte inhoudelijke uitleg |
| Een niet-uitgevoerde test als geslaagd melden | Verbergt risico | Rapporteer bewijs en beperkingen eerlijk |

## 23. Tips voor AI-systemen

- Houd een expliciete lijst bij van schermen, states en overgangen.
- Scheid leerdata van renderfuncties zodat inhoud controleerbaar blijft.
- Controleer aantallen, score en eindcondities met lege en minimale datasets.
- Gebruik bestaande projectstijl als visuele referentie, niet als technische afhankelijkheid.
- Maak knoppen met dezelfde actie hetzelfde benoemd.
- Voeg geen functionaliteit toe “voor later”.
- Controleer na iedere wijziging opnieuw syntax en fysieke bestandspaden.
- Meld aannames in de oplevering.

## 24. Kwaliteitscontrole

Doorloop vóór oplevering minimaal:

- [ ] inhoud en leerdoelen gecontroleerd;
- [ ] zelfstandig HTML-bestand in de juiste map;
- [ ] geen externe afhankelijkheden;
- [ ] start-, oefen-, eind- en fouttoestand werken;
- [ ] toetsenbord, focus en contrast gecontroleerd;
- [ ] mobiel, tablet en desktop gecontroleerd;
- [ ] geen horizontale overflow;
- [ ] LocalStorage veilig of bewust niet gebruikt;
- [ ] geen console- of syntaxfouten;
- [ ] metadata volledig en geldig;
- [ ] launcherroute en modulelink werken;
- [ ] moduleheader bevat Terug, Academy Home en klikbare opleiding-/leerjaar-/periodelinks;
- [ ] directe opening en periodefallback werken;
- [ ] bestaande functionaliteit niet beschadigd.

Gebruik voor formele acceptatie de uitgebreide `MODULE_CHECKLIST.md` uit de AI Factory.

## 25. Voorbeeldopdracht

Maak `modules/quiz-voedingsstoffen.html` voor Traiteur, Leerjaar 2, Periode 1, sectie Voedingskennis.

De module is een quiz van ongeveer 10 minuten waarmee studenten hun kennis van koolhydraten, eiwitten, vetten, vitamines en mineralen testen. Gebruik uitsluitend de meegeleverde lesbron. Toon één vraag per scherm, voortgang, directe uitleg en een eindresultaat. Maak opnieuw oefenen mogelijk. Gebruik geen LocalStorage omdat hervatten voor deze korte quiz niet is vereist.

Lever het zelfstandige HTML-bestand, volledige metadata, een compacte launcher-entry en een testverslag. Integreer pas na expliciete toestemming.

## 26. Voorbeeldoplevering

```text
Gewijzigd
- modules/quiz-voedingsstoffen.html

Toegevoegd
- Zelfstandige quiz met 10 vragen.
- Startscherm, voortgang, directe feedback en eindscherm.
- Toetsenbordbediening en responsive éénkolomsweergave.

Metadata
- id: quiz-voedingsstoffen
- version: 1.0.0
- status: review
- factoryVersion: 1.0.0

Gecontroleerd
- JavaScript-syntax: geslaagd
- Mobiel 390 px: geslaagd
- Tablet 768 px: geslaagd
- Desktop 1280 px: geslaagd
- Toetsenbordflow: geslaagd
- Offline: geslaagd

Nog nodig
- Inhoudelijke acceptatie door de docent.
- Integratie in app.js na goedkeuring.
```

Eindig nooit met `available` wanneer inhoudelijke acceptatie of een verplichte controle nog openstaat.
