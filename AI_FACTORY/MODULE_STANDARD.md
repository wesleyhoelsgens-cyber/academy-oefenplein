# Academy Module Standard

**Versie:** 1.0.0  
**Normatief:** ja

## 1. Reikwijdte

Deze standaard geldt voor iedere nieuwe of ingrijpend gewijzigde oefenmodule van Academy Oefenplein. Een module is een zelfstandige leeractiviteit die rechtstreeks én vanuit de launcher kan worden geopend.

## 2. Bestands- en mapstructuur

```text
Academy-Oefenplein/
├── index.html
├── app.js
├── style.css
└── modules/
    └── quiz-voedingsstoffen.html
```

- Lever standaard één HTML-bestand per module op.
- Plaats het bestand rechtstreeks in `modules/`.
- Gebruik een beschrijvende kebab-case bestandsnaam.
- Voeg geen algemene module-engine, nieuwe contentmap of duplicaat van launchercode toe.
- Extra lokale assets zijn alleen toegestaan wanneer inlining onredelijk is; plaats ze dan in een uniek benoemde submap onder `modules/` en documenteer ze.

## 3. Zelfstandigheid en afhankelijkheden

Een module bevat haar eigen HTML, CSS, JavaScript en oefendata. Zij mag niet afhankelijk zijn van `app.js`, `style.css`, globale launchervariabelen, een backend of internetverbinding.

Verboden:

- React, Vue, Angular, Bootstrap of andere frameworks;
- npm, bundlers en buildstappen;
- CDN's, externe fonts, analytics en externe libraries;
- runtime-import van lesinhoud uit een externe bron;
- verplaatsing van modulelogica naar de launcher.

## 4. Verplichte gebruikersflow

Iedere module heeft minimaal:

1. een startscherm met titel, doel, duur en primaire startactie;
2. een oefenscherm met instructie, inhoud, voortgang en feedback;
3. een eindscherm met resultaat of samenvatting en optie om opnieuw te oefenen;
4. een veilige lege of fouttoestand wanneer bruikbare inhoud ontbreekt.

Aanbevolen vaste labels:

| Actie | Label |
|---|---|
| Start | `Start oefenen` |
| Volgende item | `Volgende` |
| Antwoord tonen | `Toon antwoord` of een oefenvormspecifiek equivalent |
| Herstart | `Opnieuw oefenen` |
| Voortgang wissen | `Voortgang resetten` |

Gebruik een ander label wanneer dat inhoudelijk duidelijker is. Consistentie betekent voorspelbaarheid, niet blind dezelfde knop in iedere oefenvorm.

### 4.1 Universele modulenavigatie

Iedere module bevat boven de oefeninhoud:

- een tekstknop `← Terug`;
- een klikbaar Academy-logo en/of de tekst `Academy Oefenplein` naar Academy Home;
- een klikbare breadcrumb voor opleiding, leerjaar en periode;
- een veilige periodefallback wanneer geen bruikbare browsergeschiedenis beschikbaar is.

Gebruik altijd de bestaande launcherhashes. Een module in `modules/` verwijst met `../index.html`
naar de launcher, zodat navigatie ook werkt wanneer het HTML-bestand rechtstreeks wordt geopend.
Alle links openen in hetzelfde venster. De header breekt op mobiel af zonder horizontale overflow.

Herbruikbaar voorbeeld, met projectspecifieke waarden ingevuld:

```html
<header class="module-header">
    <button id="moduleBackButton" type="button">← Terug</button>
    <a href="../index.html" aria-label="Naar Academy Home">Academy Oefenplein</a>
    <nav aria-label="Modulelocatie">
        <ol>
            <li><a href="../index.html#/[opleiding-id]">[Opleiding]</a></li>
            <li><a href="../index.html#/[opleiding-id]/leerjaar-[nummer]">Leerjaar [nummer]</a></li>
            <li><a href="../index.html#/[opleiding-id]/leerjaar-[nummer]/periode-[nummer]">Periode [nummer]</a></li>
        </ol>
    </nav>
</header>

<script>
const PERIOD_FALLBACK = "../index.html#/[opleiding-id]/leerjaar-[nummer]/periode-[nummer]";

document.getElementById("moduleBackButton").addEventListener("click", () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = PERIOD_FALLBACK;
    }
});
</script>
```

Gebruik echte links en een echte knop, zichtbare focusstijlen en minimaal circa 44 bij 44 pixels
voor de Terug-knop. Voeg geen tweede router toe en bouw hashes niet dynamisch uit onbetrouwbare data.

## 5. HTML-standaard

- Gebruik `<!doctype html>`, UTF-8, `lang="nl"` en een viewport-meta-tag.
- Gebruik één `main`-landmark en een logische kopstructuur zonder niveaus over te slaan.
- Gebruik semantische elementen vóór generieke `div`-elementen.
- Gebruik `button` voor gedrag en `a` voor navigatie.
- Gebruik unieke id's en geldige labelrelaties.
- Plaats scripts bij voorkeur vlak voor `</body>` of gebruik `defer`.
- Zet geen onbetrouwbare tekst via `innerHTML`; gebruik `textContent` voor dynamische inhoud.

## 6. CSS-richtlijnen

- Definieer kleur-, ruimte- en radiuswaarden als CSS custom properties.
- Gebruik een systeemfont zodat de module offline blijft werken.
- Ontwerp mobile-first en voorkom vaste breedtes die overflow veroorzaken.
- Gebruik flexbox en grid doelgericht.
- Zorg voor klikdoelen van minimaal ongeveer 44 bij 44 pixels.
- Gebruik zichtbare `:focus-visible`-stijlen.
- Beperk animaties en ondersteun `prefers-reduced-motion`.
- Gebruik voldoende contrast volgens WCAG 2.1 AA als minimum.
- Scope stijlen logisch en vermijd `!important`, behalve bij een gemotiveerde toegankelijkheidsuitzondering.

## 7. JavaScript-richtlijnen

- Gebruik vanilla JavaScript ES6 en `"use strict"`.
- Splits gedrag in kleine functies met één verantwoordelijkheid.
- Houd applicatiestatus in één herkenbaar state-object wanneer de flow meerdere schermen heeft.
- Registreer eventlisteners centraal en voorkom inline eventhandlers.
- Valideer arrays, objecten en opgeslagen data vóór gebruik.
- Behandel lege inhoud, ongeldige status en opslagfouten zonder crash.
- Gebruik Fisher-Yates wanneer eerlijke willekeurige volgorde nodig is.
- Laat logica deterministisch zijn wanneer beoordeling of scoring reproduceerbaar moet zijn.
- Verwijder debuglogging vóór oplevering.

## 8. Feedback en beoordeling

- Leg uit waarom een antwoord goed of onjuist is wanneer het leerdoel dat vereist.
- Straf een student niet voor technische fouten of dubbelklikken.
- Maak scoreberekening transparant en voorkom delen door nul.
- Geef geen misleidende nauwkeurigheid; toon een percentage alleen wanneer de basis duidelijk is.
- Maak opnieuw oefenen mogelijk zonder volledige paginareload, tenzij herladen bewust onderdeel van het ontwerp is.

## 9. LocalStorage

Gebruik LocalStorage alleen voor aantoonbare gebruikerswaarde, zoals hervatten of lokale voortgang.

Een sleutel heeft dit formaat:

```text
academy.<module-id>.v<schema-versie>
```

Regels:

- sla geen persoonsgegevens of gevoelige gegevens op;
- gebruik JSON met foutafhandeling rond lezen, parsen en schrijven;
- valideer het schema bij laden;
- bied een begrijpelijke resetmogelijkheid;
- beperk de hoeveelheid data;
- laat de module werken wanneer opslag niet beschikbaar is;
- verhoog de schemaversie bij een incompatibele opslagwijziging.

## 10. Foutafhandeling

| Situatie | Vereist gedrag |
|---|---|
| Geen geldige oefenitems | Toon een lege toestand, geen lege kaart of JavaScript-fout |
| Ongeldige opgeslagen status | Negeer of herstel veilig en start schoon |
| LocalStorage geblokkeerd | Werk door zonder persistente voortgang |
| Onverwachte gebruikersactie | Negeer dubbelklik of blokkeer herhaalde verwerking |
| Ontbrekende optionele tekst | Laat het onderdeel weg zonder lege placeholder |

Technische foutmeldingen horen niet als stacktrace in de interface. Geef de student een korte melding en een veilige vervolgstap.

## 11. Responsive en mobiel

Controleer minimaal op 360–390 px mobiel, circa 768 px tablet en 1280 px desktop. De module:

- heeft geen horizontale scrollbar;
- blijft bruikbaar bij 200% tekstzoom;
- vereist geen hover voor essentiële informatie;
- gebruikt geen bediening die alleen met een precieze muis werkt;
- houdt primaire acties binnen bereik en leesbaar.

## 12. Toegankelijkheid

- Alle bediening werkt met Tab, Shift+Tab, Enter en Spatie waar passend.
- Focusvolgorde volgt de visuele en logische volgorde.
- Statuswijzigingen worden alleen waar nodig met een passend live region aangekondigd.
- Kleur is nooit de enige informatiedrager.
- Afbeeldingen hebben passende alternatieve tekst; decoratie heeft `alt=""`.
- Formuliervelden hebben zichtbare labels.
- Verborgen inhoud is ook voor hulptechnologie correct verborgen.
- Bewegende of tijdgebonden interactie heeft een toegankelijk alternatief.

## 13. Prestaties en offline werking

- Een module werkt zonder netwerk nadat het lokale bestand is geladen.
- Streef naar een modulebestand onder 500 KB zonder ingesloten media.
- Optimaliseer afbeeldingen en laad grote media alleen wanneer nodig.
- Voorkom langdurige hoofddraadblokkades en overbodige DOM-updates.
- Er zijn geen netwerkrequests, trackingcalls of consolefouten.

## 14. Naamgeving en commentaar

- HTML-id's en JavaScriptnamen zijn beschrijvend en consistent.
- Gebruik werkwoorden voor functies, bijvoorbeeld `renderQuestion()`.
- Gebruik zelfstandige naamwoorden voor data, bijvoorbeeld `questions` en `state`.
- Commentaar legt een niet-zichtbare keuze of reden uit; het herhaalt niet letterlijk de code.
- Verwijder uitgecommentarieerde code, tijdelijke hacks en ongebruikte variabelen.

## 15. Onderhoudbaarheid

- Houd broninhoud herkenbaar gescheiden van render- en interactielogica.
- Centraliseer instellingen, opslagkey en DOM-selectors.
- Vermijd dubbele waarheden voor titel, aantal items of score.
- Een toekomstige beheerder moet leerinhoud kunnen vervangen zonder de hele flow te herschrijven.
- Documenteer alleen uitzonderingen die niet vanzelf uit de code blijken.

## 16. Definitie van gereed

Een module is pas gereed wanneer:

- de leerinhoud inhoudelijk is goedgekeurd;
- alle verplichte metadata geldig is;
- de volledige checklist is doorlopen;
- directe en launcheropening werken;
- mobiel, tablet, desktop en toetsenbord zijn getest;
- geen bekende blokkerende fout resteert;
- status pas daarna op `available` wordt gezet.
