# Academy Module Checklist

**Versie:** 1.0.0  
**Gebruik:** verplicht vóór status `available`

## Modulegegevens

| Gegeven | In te vullen |
|---|---|
| Module-id | `[id]` |
| Moduleversie | `[versie]` |
| Factory-versie | `1.0.0` |
| Controleur | `[naam]` |
| Controledatum | `[YYYY-MM-DD]` |
| Geteste browser(s) | `[browser en versie]` |

Markeer een punt pas als het aantoonbaar is gecontroleerd. Noteer `n.v.t.` met reden; laat een verplicht punt niet stilzwijgend leeg.

## A. Inhoud en onderwijs

- [ ] Leerdoel en doelgroep zijn expliciet.
- [ ] Alle vragen en antwoorden zijn herleidbaar tot goedgekeurd bronmateriaal.
- [ ] Vakinhoud is door een bevoegde inhoudseigenaar gecontroleerd.
- [ ] Taalniveau en instructies passen bij mbo-studenten.
- [ ] De oefenvorm ondersteunt het leerdoel.
- [ ] Feedback is inhoudelijk en helpt de student verder.
- [ ] Er staat geen placeholder-, demo- of testinhoud in de release.

## B. Bestand en architectuur

- [ ] De module staat als zelfstandig HTML-bestand in `modules/`.
- [ ] De bestandsnaam is uniek, beschrijvend en kebab-case.
- [ ] De module is niet afhankelijk van `app.js` of `style.css`.
- [ ] Er zijn geen frameworks, externe libraries, CDN's of buildstappen.
- [ ] Er zijn geen netwerkrequests of backendafhankelijkheden.
- [ ] De launcher bevat geen modulelogica of volledige oefeninhoud.
- [ ] Bestaande modules en launcherroutes zijn niet onbedoeld gewijzigd.

## C. Functionele flow

- [ ] Startscherm toont titel, uitleg, doel, duur en startactie.
- [ ] Starten opent de juiste oefenstatus.
- [ ] Alle vragen, kaarten of opdrachten zijn bereikbaar.
- [ ] Antwoorden worden één keer verwerkt, ook bij snel dubbelklikken.
- [ ] Feedback en volgende actie zijn duidelijk.
- [ ] Voortgang en score zijn correct.
- [ ] Eindscherm toont een begrijpelijk resultaat of samenvatting.
- [ ] Opnieuw oefenen werkt.
- [ ] Lege en ongeldige inhoud levert een nette toestand op.
- [ ] Er zijn geen dode knoppen of links.
- [ ] De module bevat een werkende `← Terug`-knop met periodefallback.
- [ ] Academy-logo en/of Academy-naam opent altijd Academy Home.
- [ ] Opleiding, leerjaar en periode zijn afzonderlijk klikbaar in de breadcrumb.

## D. Responsive ontwerp

- [ ] Getest op mobiel, minimaal rond 360–390 px.
- [ ] Getest op tablet, rond 768 px.
- [ ] Getest op desktop, rond 1280 px.
- [ ] Eénkolomsweergave is bruikbaar op mobiel.
- [ ] Er is geen horizontale overflow.
- [ ] Tekst, kaarten en knoppen overlappen niet.
- [ ] De module blijft bruikbaar bij 200% tekstzoom.
- [ ] Essentiële informatie is niet afhankelijk van hover.

## E. Toegankelijkheid

- [ ] Semantische HTML en logische kopniveaus zijn gebruikt.
- [ ] Alle functies zijn met toetsenbord bereikbaar en bedienbaar.
- [ ] Focusvolgorde is logisch en focus is duidelijk zichtbaar.
- [ ] Klik- en tikdoelen zijn voldoende groot.
- [ ] Tekst en bediening voldoen aan voldoende kleurcontrast.
- [ ] Betekenis wordt niet alleen met kleur aangegeven.
- [ ] Formuliervelden hebben gekoppelde labels.
- [ ] Afbeeldingen hebben correcte alternatieve tekst.
- [ ] Dynamische feedback wordt passend aangekondigd.
- [ ] `prefers-reduced-motion` wordt gerespecteerd.
- [ ] Licht en donker hebben voldoende contrast voor tekst, bediening, borders en focus.
- [ ] Themakeuze is niet uitsluitend door kleur herkenbaar.

## F. LocalStorage en privacy

- [ ] LocalStorage wordt alleen gebruikt wanneer dit functioneel nodig is, of: [ ] n.v.t.
- [ ] De sleutel volgt `academy.<module-id>.v<schema-versie>`.
- [ ] Lezen, parsen en schrijven hebben foutafhandeling.
- [ ] Opgeslagen data wordt gevalideerd.
- [ ] De module blijft werken als opslag is geblokkeerd.
- [ ] De student kan opgeslagen voortgang resetten.
- [ ] Er worden geen persoonsgegevens of gevoelige gegevens opgeslagen.
- [ ] Thema-overname accepteert uitsluitend `system`, `light` of `dark` onder `academy-theme-preference`, of: [ ] n.v.t.

## G. Codekwaliteit en prestaties

- [ ] HTML bevat UTF-8, Nederlandse taal en viewport-meta-tag.
- [ ] HTML-id's zijn uniek.
- [ ] JavaScript slaagt voor een syntaxcontrole.
- [ ] De browserconsole bevat geen fouten of ongewenste logging.
- [ ] Functies en variabelen hebben duidelijke namen.
- [ ] Er is geen ongebruikte of uitgecommentarieerde code.
- [ ] Dynamische onbetrouwbare tekst wordt veilig verwerkt.
- [ ] De module reageert direct op normale apparaten.
- [ ] Afbeeldingen en media zijn geoptimaliseerd.
- [ ] De module werkt offline en zonder externe fonts.

## H. Metadata en catalogus

- [ ] Alle verplichte canonieke metadata is aanwezig.
- [ ] `id`, versie, datum en enums zijn geldig.
- [ ] Opleiding, leerjaar, periode of speciaal onderdeel en thema kloppen.
- [ ] De module staat in precies een plaatsingstype: reguliere periode of speciaal onderdeel.
- [ ] Titel, type, duur en beschrijving komen overeen met de module.
- [ ] Het bestandspad bestaat en opent de juiste module.
- [ ] `status` is pas na acceptatie `available`.
- [ ] De huidige `app.js`-entry is correct vertaald.
- [ ] Er zijn geen dubbele id's of bestandspaden.
- [ ] Een niet-beschikbare module bevat geen startlink.

## I. Integratie en regressie

- [ ] De module opent rechtstreeks.
- [ ] De module opent via Opleiding → Leerjaar → Periode → Modules.
- [ ] Kruimelpad en Terug-knoppen van de launcher blijven werken.
- [ ] De browserknop Terug blijft logisch werken.
- [ ] Module Terug gebruikt browsergeschiedenis en valt bij directe opening veilig terug op de periodepagina.
- [ ] Academy Home-, opleiding-, leerjaar- en periodelinks gebruiken de bestaande launcherhashes.
- [ ] Andere opleidingen en lege perioden tonen een nette melding.
- [ ] Minimaal één bestaande module is als regressiecontrole geopend.
- [ ] Alleen noodzakelijke bestanden zijn gewijzigd.

## Acceptatie

| Resultaat | Waarde |
|---|---|
| Blokkerende fouten | `[aantal]` |
| Niet-blokkerende aandachtspunten | `[aantal]` |
| Besluit | `[afgekeurd / herstel nodig / goedgekeurd]` |
| Bewijs of notities | `[links, screenshots of korte toelichting]` |

Een module met een blokkerende fout of een niet-afgerond verplicht controlepunt krijgt geen status `available`.
