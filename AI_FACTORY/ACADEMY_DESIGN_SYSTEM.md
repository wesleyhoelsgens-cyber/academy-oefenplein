# Academy Design System

**Status:** ontwerpstandaard in opbouw  
**Toepassing:** Academy Launcher, zelfstandige HTML-modules, nieuwe componenten en AI-gegenereerde Academy-interfaces  
**Besluitregel:** een leeg veld of `Nog vast te stellen` is geen impliciete ontwerpkeuze

Dit document legt de structuur vast waarin ontwerpbesluiten centraal worden geregistreerd. Waarden worden pas ingevuld nadat zij expliciet zijn beoordeeld en goedgekeurd. Tot dat moment blijven bestaande, werkende interfaces leidend en mogen placeholders niet als implementatiespecificatie worden geïnterpreteerd.

# 1 Doel

Het Academy Design System voorkomt visuele versnippering en dubbele ontwerpwaarheden. Het biedt één centrale referentie voor iedereen die een interface voor Academy Oefenplein ontwerpt, bouwt, beoordeelt of laat genereren.

Het document is bedoeld voor:

- ontwerpers en inhoudseigenaren;
- ontwikkelaars en reviewers;
- docenten en beheerders die modules laten maken;
- AI-systemen die launcher- of modulewerk uitvoeren;
- toekomstige leveranciers of samenwerkingspartners.

Binnen de AI Factory vormt dit document de ontwerpstandaard. `MODULE_STANDARD.md` blijft leidend voor technische modulekwaliteit, `MODULE_CATALOG_STANDARD.md` voor metadata en plaatsing, en `MODULE_CHECKLIST.md` voor acceptatie. Ontwerpbesluiten uit dit document vervangen die contracten niet, maar vullen ze aan.

# 2 Ontwerpvisie

Academy Oefenplein is een leeromgeving en geen marketingwebsite. Het ontwerp ondersteunt leren, oriëntatie en langdurig gebruik. Inhoud en voortgang krijgen voorrang op promotie, decoratie of visuele effecten.

De Academy is:

- rustig, zodat de student aandacht bij de leeractiviteit kan houden;
- professioneel en volwassen, passend bij mbo-onderwijs en beroepsvorming;
- overzichtelijk, met een herkenbare informatiehiërarchie;
- modern, zonder trends te volgen die bruikbaarheid verminderen;
- terughoudend in visuele prikkels en concurrerende acties;
- voorspelbaar tussen launcher en zelfstandige modules;
- prettig tijdens lange studiesessies, in licht en donker thema.

Nieuwe ontwerpbesluiten worden beoordeeld op leerwaarde, duidelijkheid, consistentie, toegankelijkheid en onderhoudbaarheid. Een visuele vernieuwing zonder aantoonbare gebruikerswaarde is geen doel op zichzelf.

# 3 Inspiratie

## Primaire referentie

### SVO Vakopleiding Food

Academy Oefenplein respecteert de identiteit, vakgerichtheid en professionele uitstraling van SVO Vakopleiding Food. De Academy mag herkenbaar aansluiten bij die context, maar kopieert de publieke website niet letterlijk. Een onderwijsapplicatie heeft andere eisen aan informatiedichtheid, interactie, toegankelijkheid en langdurig schermgebruik dan een marketingwebsite.

Bij toekomstig referentieonderzoek wordt vastgelegd welke principes bruikbaar zijn en welke bewust niet worden overgenomen. Logo-, merk- en huisstijlgebruik vereist altijd bevestiging door de verantwoordelijke eigenaar.

## Secundaire referenties

Secundaire referenties dienen uitsluitend als bron voor analyse van patronen. Zij zijn geen toestemming om vormgeving, componenten of merkdetails te kopiëren.

| Referentie | Mogelijk onderzoeksgebied | Over te nemen principe | Bewuste afwijking | Status |
|---|---|---|---|---|
| Microsoft Fluent | Interactiestaten, toegankelijkheid, schaalbaarheid | Nog vast te stellen | Nog vast te stellen | Niet onderzocht |
| GitHub | Informatiedichtheid, developer-achtige duidelijkheid, dark theme | Nog vast te stellen | Nog vast te stellen | Niet onderzocht |
| Canvas LMS | Onderwijsnavigatie, cursusstructuur, statuscommunicatie | Nog vast te stellen | Nog vast te stellen | Niet onderzocht |
| Notion | Rust, hiërarchie, contentgericht werken | Nog vast te stellen | Nog vast te stellen | Niet onderzocht |

# 4 Kleuren

Er zijn nog geen kleurwaarden vastgesteld in dit document. Iedere toekomstige waarde vereist controle in zowel Light Theme als Dark Theme, inclusief contrastmeting en beoordeling in echte componenten.

| Rol | Light Theme HEX | Light Theme RGB | Dark Theme HEX | Dark Theme RGB | Gebruik | Opmerking | Status |
|---|---|---|---|---|---|---|---|
| Primary |  |  |  |  |  |  | Nog vast te stellen |
| Secondary |  |  |  |  |  |  | Nog vast te stellen |
| Accent |  |  |  |  |  |  | Nog vast te stellen |
| Background |  |  |  |  |  |  | Nog vast te stellen |
| Background Subtle |  |  |  |  |  |  | Nog vast te stellen |
| Surface |  |  |  |  |  |  | Nog vast te stellen |
| Surface Hover |  |  |  |  |  |  | Nog vast te stellen |
| Card |  |  |  |  |  |  | Nog vast te stellen |
| Border |  |  |  |  |  |  | Nog vast te stellen |
| Border Strong |  |  |  |  |  |  | Nog vast te stellen |
| Heading |  |  |  |  |  |  | Nog vast te stellen |
| Text |  |  |  |  |  |  | Nog vast te stellen |
| Muted |  |  |  |  |  |  | Nog vast te stellen |
| Primary Contrast |  |  |  |  |  |  | Nog vast te stellen |
| Focus |  |  |  |  |  |  | Nog vast te stellen |
| Success |  |  |  |  |  |  | Nog vast te stellen |
| Warning |  |  |  |  |  |  | Nog vast te stellen |
| Error |  |  |  |  |  |  | Nog vast te stellen |
| Disabled |  |  |  |  |  |  | Nog vast te stellen |

# 5 Typografie

Er is nog geen lettertype, schaal, gewicht of regelhoogte vastgesteld. Typografische besluiten moeten offline werking, Nederlandse tekens, leesbaarheid voor mbo-studenten en langdurig gebruik ondersteunen.

| Token/rol | Lettertype | Fallback | Grootte | Gewicht | Regelhoogte | Letterafstand | Gebruik | Responsive gedrag | Status |
|---|---|---|---|---|---|---|---|---|---|
| Display |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Heading 1 |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Heading 2 |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Heading 3 |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Heading 4 |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Body Large |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Body |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Body Small |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Label |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Button |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Metadata |  |  |  |  |  |  |  |  | Nog vast te stellen |
| Code/Data |  |  |  |  |  |  |  |  | Nog vast te stellen |

# 6 Spacing

Spacing wordt later als één consistente schaal vastgesteld. Losse, componentgebonden maatkeuzes zijn niet toegestaan zodra de schaal is goedgekeurd.

| Token | Waarde | Primair gebruik | Uitzonderingen | Status |
|---|---:|---|---|---|
| Space 0 |  |  |  | Nog vast te stellen |
| Space 1 |  |  |  | Nog vast te stellen |
| Space 2 |  |  |  | Nog vast te stellen |
| Space 3 |  |  |  | Nog vast te stellen |
| Space 4 |  |  |  | Nog vast te stellen |
| Space 5 |  |  |  | Nog vast te stellen |
| Space 6 |  |  |  | Nog vast te stellen |
| Space 7 |  |  |  | Nog vast te stellen |
| Space 8 |  |  |  | Nog vast te stellen |

# 7 Border Radius

| Token | Waarde | Gebruik | Opmerking | Status |
|---|---:|---|---|---|
| Radius None |  |  |  | Nog vast te stellen |
| Radius Small |  |  |  | Nog vast te stellen |
| Radius Medium |  |  |  | Nog vast te stellen |
| Radius Large |  |  |  | Nog vast te stellen |
| Radius Pill |  |  |  | Nog vast te stellen |

# 8 Shadows

Schaduwen ondersteunen alleen hiërarchie of interactiestatus. Zij worden niet als decoratief standaardeffect toegepast zonder vastgesteld doel.

| Token | Waarde | Gebruik | Light Theme | Dark Theme | Status |
|---|---|---|---|---|---|
| Shadow None |  |  |  |  | Nog vast te stellen |
| Shadow Subtle |  |  |  |  | Nog vast te stellen |
| Shadow Card |  |  |  |  | Nog vast te stellen |
| Shadow Raised |  |  |  |  | Nog vast te stellen |
| Shadow Overlay |  |  |  |  | Nog vast te stellen |

# 9 Component Library

De componentbeschrijvingen hieronder zijn contractsjablonen. Een component krijgt pas de status `Goedgekeurd` nadat gedrag, alle states, responsive werking en toegankelijkheid aantoonbaar zijn beoordeeld.

## Header

| Onderdeel | Specificatie |
|---|---|
| Doel | Biedt identiteit, globale oriëntatie en uitsluitend noodzakelijke globale bediening. |
| Gedrag | Nog vast te stellen. |
| Hover | Nog vast te stellen. |
| Focus | Moet duidelijk zichtbaar en toetsenbordbruikbaar zijn; visuele invulling nog vast te stellen. |
| Dark Theme | Nog vast te stellen en afzonderlijk op contrast te beoordelen. |
| Responsive | Voorkomt overlap en horizontale overflow; exacte compositie nog vast te stellen. |
| AI-opmerking | Voeg geen globale actie toe zonder expliciete scope en vastgesteld gebruikersdoel. |

## Breadcrumb

| Onderdeel | Specificatie |
|---|---|
| Doel | Toont de huidige locatie en biedt terugnavigatie naar bovenliggende niveaus. |
| Gedrag | Bovenliggende niveaus zijn links; de huidige locatie is herkenbaar maar niet onnodig interactief. |
| Hover | Nog vast te stellen. |
| Focus | Zichtbaar voor iedere link; uitwerking nog vast te stellen. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Lange labels mogen de pagina niet verbreden; afbreekstrategie nog vast te stellen. |
| AI-opmerking | Gebruik bestaande routes en maak geen tweede navigatiesysteem. |

## Opleidingskaart

| Onderdeel | Specificatie |
|---|---|
| Doel | Laat een student één opleiding kiezen. |
| Gedrag | De volledige kaart is één duidelijke navigatieactie. |
| Hover | Nog vast te stellen; geen essentiële informatie uitsluitend op hover. |
| Focus | Zelfde duidelijkheidsniveau als hover, plus zichtbare focusindicatie. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Leesbaar en volledig bedienbaar op alle doelbreedtes. |
| AI-opmerking | Voeg geen marketingtekst of fictieve status toe. |

## Leerjaarkaart

| Onderdeel | Specificatie |
|---|---|
| Doel | Laat binnen een opleiding een leerjaar kiezen. |
| Gedrag | Eén kaart leidt naar exact één bestaand leerjaar. |
| Hover | Nog vast te stellen. |
| Focus | Nog vast te stellen binnen de toegankelijkheidscriteria. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Nog vast te stellen. |
| AI-opmerking | Leid leerjaren uitsluitend af uit de bestaande configuratie. |

## Periodekaart

| Onderdeel | Specificatie |
|---|---|
| Doel | Opent het moduleoverzicht van één geconfigureerde periode. |
| Gedrag | Behoudt bestaande hashroute en browsergeschiedenis. |
| Hover | Nog vast te stellen. |
| Focus | Nog vast te stellen binnen de toegankelijkheidscriteria. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Nog vast te stellen. |
| AI-opmerking | Verzin geen periode en bouw geen opleiding-specifieke UI-uitzondering. |

## Speciale onderdelen

| Onderdeel | Specificatie |
|---|---|
| Doel | Maakt toets-, examen- of PVB-inhoud buiten reguliere perioden herkenbaar bereikbaar. |
| Gedrag | Volgt de configureerbare `specialeOnderdelen` en opent een eigen bestaande route. |
| Hover | Nog vast te stellen. |
| Focus | Nog vast te stellen binnen de toegankelijkheidscriteria. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Lange titels en beschrijvingen blijven leesbaar; exacte uitwerking nog vast te stellen. |
| AI-opmerking | Gebruik geen hardcoded speciale knop en verzin geen oefenmodules. |

## Modulekaart

| Onderdeel | Specificatie |
|---|---|
| Doel | Communiceert titel, type, duur, beschrijving, status en startactie van een echte module. |
| Gedrag | Start uitsluitend een bestaand beschikbaar modulebestand. |
| Hover | Nog vast te stellen; hover mag geen voorwaarde voor starten zijn. |
| Focus | Startactie en eventuele links hebben een zichtbare focus. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Metadata en actie blijven zonder overlap of horizontale overflow bereikbaar. |
| AI-opmerking | Metadata komt uit de catalogus; voeg geen placeholdermodule toe. |

## Buttons

| Onderdeel | Specificatie |
|---|---|
| Doel | Voert een herkenbare actie uit; navigatie gebruikt een link. |
| Gedrag | States voor standaard, hover, focus, actief, disabled en eventueel laden worden afzonderlijk vastgesteld. |
| Hover | Nog vast te stellen. |
| Focus | Altijd zichtbaar en niet uitsluitend door kleur herkenbaar. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Klik- en tikdoel blijft bruikbaar; exacte minimummaat nog vast te stellen. |
| AI-opmerking | Gebruik semantische elementen en maak per scherm één primaire actie herkenbaar. |

## Badges

| Onderdeel | Specificatie |
|---|---|
| Doel | Toont compacte metadata of status zonder de hoofdinhoud te vervangen. |
| Gedrag | Informatief, tenzij expliciet als bediening ontworpen. |
| Hover | Niet van toepassing voor informatieve badges; interactieve variant nog vast te stellen. |
| Focus | Alleen van toepassing als de badge interactief is. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Mag inhoud niet onleesbaar afkorten. |
| AI-opmerking | Status wordt naast kleur altijd met tekst of betekenisvol symbool weergegeven. |

## Meldingen

| Onderdeel | Specificatie |
|---|---|
| Doel | Communiceert relevante informatie, succes, waarschuwing of fout. |
| Gedrag | Urgentie en herstelactie worden per variant vastgesteld. |
| Hover | Alleen relevant voor acties in de melding. |
| Focus | Interactieve onderdelen volgen een logische focusvolgorde. |
| Dark Theme | Iedere variant vereist afzonderlijke contrastcontrole. |
| Responsive | Tekst en herstelactie blijven volledig bereikbaar. |
| AI-opmerking | Toon geen technische stacktrace en gebruik geen kleur als enige betekenisdrager. |

## Empty States

| Onderdeel | Specificatie |
|---|---|
| Doel | Legt rustig uit dat er geen beschikbare inhoud is. |
| Gedrag | Toont alleen een herstel- of navigatieactie wanneer die werkelijk bruikbaar is. |
| Hover | Alleen relevant voor een eventuele actie. |
| Focus | Alleen relevante bediening is focusbaar. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Korte tekst blijft centraal leesbaar zonder een lege witte pagina te creëren. |
| AI-opmerking | Verzin geen demo-inhoud om een lege toestand op te vullen. |

## Kaarten

| Onderdeel | Specificatie |
|---|---|
| Doel | Vormt de generieke visuele basis voor gegroepeerde inhoud of navigatie. |
| Gedrag | Interactieve en niet-interactieve kaarten moeten semantisch en visueel te onderscheiden zijn. |
| Hover | Alleen interactieve kaarten krijgen een hoverreactie. |
| Focus | Alleen focusbare inhoud krijgt een focusreactie. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Inhoud bepaalt de hoogte; vaste teksthoogtes worden vermeden. |
| AI-opmerking | Maak geen nieuwe kaartvariant als een bestaande variant hetzelfde doel dekt. |

## Filters

| Onderdeel | Specificatie |
|---|---|
| Doel | Reserve voor toekomstige, expliciet goedgekeurde selectie van bestaande inhoud. |
| Gedrag | Nog vast te stellen. |
| Hover | Nog vast te stellen. |
| Focus | Nog vast te stellen. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Nog vast te stellen. |
| AI-opmerking | Filters bestaan momenteel niet; implementeer ze niet op basis van dit document. |

## Toggle

| Onderdeel | Specificatie |
|---|---|
| Doel | Wijzigt een binaire instelling wanneer die interactievorm aantoonbaar passend is. |
| Gedrag | Aan/uit-status moet programmatisch en tekstueel begrijpelijk zijn. |
| Hover | Nog vast te stellen. |
| Focus | Nog vast te stellen binnen de toegankelijkheidscriteria. |
| Dark Theme | Nog vast te stellen. |
| Responsive | Nog vast te stellen. |
| AI-opmerking | Gebruik geen toggle voor drie of meer keuzen; de huidige themakeuze heeft drie waarden. |

# 10 Iconografie

Er is nog geen iconenset, lijnstijl of maatschaal vastgesteld. Iconen ondersteunen tekst en mogen noodzakelijke labels niet zonder goedgekeurd alternatief vervangen.

| Onderdeel | Waarde/richtlijn | Status |
|---|---|---|
| Bron of iconenset |  | Nog vast te stellen |
| Lijn- of vulstijl |  | Nog vast te stellen |
| Standaardmaten |  | Nog vast te stellen |
| Kleurgebruik |  | Nog vast te stellen |
| Uitlijning |  | Nog vast te stellen |
| Decoratieve iconen |  | Nog vast te stellen |
| Informatieve iconen en toegankelijke naam |  | Nog vast te stellen |

# 11 Light Theme

Het Light Theme is nog niet als ontwerpbesluit in deze standaard ingevuld.

| Onderdeel | Specificatie | Contrastbewijs | Status |
|---|---|---|---|
| Achtergrondhiërarchie |  |  | Nog vast te stellen |
| Teksthiërarchie |  |  | Nog vast te stellen |
| Kaarten en surfaces |  |  | Nog vast te stellen |
| Interactiestaten |  |  | Nog vast te stellen |
| Focus |  |  | Nog vast te stellen |
| Statuskleuren |  |  | Nog vast te stellen |

# 12 Dark Theme

Het Dark Theme is nog niet als ontwerpbesluit in deze standaard ingevuld. Dark Theme is geen automatische inversie van Light Theme; iedere semantische rol en componentstaat vereist een eigen beoordeling.

| Onderdeel | Specificatie | Contrastbewijs | Status |
|---|---|---|---|
| Achtergrondhiërarchie |  |  | Nog vast te stellen |
| Teksthiërarchie |  |  | Nog vast te stellen |
| Kaarten en surfaces |  |  | Nog vast te stellen |
| Interactiestaten |  |  | Nog vast te stellen |
| Focus |  |  | Nog vast te stellen |
| Statuskleuren |  |  | Nog vast te stellen |

# 13 Responsive

Responsive ontwerp volgt de inhoud en gebruikssituatie. Definitieve breakpoints en containerwaarden worden later vastgesteld en mogen niet uit onderstaande categorieën worden afgeleid.

## Desktop

| Aspect | Specificatie | Status |
|---|---|---|
| Containerbreedte |  | Nog vast te stellen |
| Kolommen |  | Nog vast te stellen |
| Headercompositie |  | Nog vast te stellen |
| Informatiehiërarchie |  | Nog vast te stellen |

## Tablet

| Aspect | Specificatie | Status |
|---|---|---|
| Breakpoint |  | Nog vast te stellen |
| Kolommen |  | Nog vast te stellen |
| Headercompositie |  | Nog vast te stellen |
| Aanraakbediening |  | Nog vast te stellen |

## Mobiel

| Aspect | Specificatie | Status |
|---|---|---|
| Breakpoint |  | Nog vast te stellen |
| Kolommen |  | Nog vast te stellen |
| Headercompositie |  | Nog vast te stellen |
| Aanraakbediening |  | Nog vast te stellen |
| Tekstafbreking en overflow |  | Nog vast te stellen |

# 14 Animaties

Beweging ondersteunt begrip of status en is nooit noodzakelijk om inhoud te kunnen gebruiken. Definitieve duur- en easingwaarden zijn nog niet vastgesteld.

| Categorie | Doel | Duur | Easing | Reduced Motion | Status |
|---|---|---:|---|---|---|
| Hover |  |  |  |  | Nog vast te stellen |
| Transitions |  |  |  |  | Nog vast te stellen |
| Focus | Focus moet onmiddellijk en duidelijk herkenbaar zijn. |  |  |  | Nog vast te stellen |
| Statusfeedback |  |  |  |  | Nog vast te stellen |
| Scherm- of statewisseling |  |  |  |  | Nog vast te stellen |

Bij `prefers-reduced-motion: reduce` blijft alle functionaliteit behouden en wordt niet-essentiële beweging verwijderd of beperkt. De exacte invulling wordt per goedgekeurd patroon vastgelegd.

# 15 Toegankelijkheid

Toegankelijkheid is een ontwerpvoorwaarde en geen controle achteraf.

| Onderwerp | Norm/verwachting | Bewijs | Status |
|---|---|---|---|
| WCAG | Toepasselijk niveau en versie nog formeel vast te stellen; minimaal geldende projectstandaarden blijven leidend. |  | Nog vast te stellen |
| Contrast | Iedere tekst-, icoon-, border-, status- en focuscombinatie wordt in beide thema's gemeten. |  | Nog vast te stellen |
| Focus | Focus is zichtbaar, logisch en niet uitsluitend door kleur herkenbaar. |  | Nog vast te stellen |
| Keyboard | Alle acties zijn zonder muis bereikbaar en uitvoerbaar. |  | Nog vast te stellen |
| Screenreader | Semantiek, namen, relaties, status en dynamische feedback zijn begrijpelijk. |  | Nog vast te stellen |
| Zoom en reflow | Inhoud blijft bruikbaar bij vergroting volgens de geldende kwaliteitsstandaard. |  | Nog vast te stellen |
| Taal en begrip | Labels en instructies zijn concreet, volwassen en passend bij mbo-studenten. |  | Nog vast te stellen |
| Aanraakbediening | Doelen zijn voldoende groot en vereisen geen precieze aanwijzer. |  | Nog vast te stellen |

# 16 CSS Variabelen

Deze tabel reserveert de semantische tokens. Zij bevat geen CSS-implementatie en geen waarden. Definitieve namen worden samen met hun betekenis goedgekeurd voordat zij normatief worden.

| Categorie | Voorgesteld semantisch token | Light | Dark | Gebruik | Status |
|---|---|---|---|---|---|
| Kleur | `--color-background` |  |  |  | Placeholder |
| Kleur | `--color-background-subtle` |  |  |  | Placeholder |
| Kleur | `--color-surface` |  |  |  | Placeholder |
| Kleur | `--color-surface-hover` |  |  |  | Placeholder |
| Kleur | `--color-card` |  |  |  | Placeholder |
| Kleur | `--color-text` |  |  |  | Placeholder |
| Kleur | `--color-text-muted` |  |  |  | Placeholder |
| Kleur | `--color-heading` |  |  |  | Placeholder |
| Kleur | `--color-primary` |  |  |  | Placeholder |
| Kleur | `--color-primary-hover` |  |  |  | Placeholder |
| Kleur | `--color-primary-contrast` |  |  |  | Placeholder |
| Kleur | `--color-border` |  |  |  | Placeholder |
| Kleur | `--color-border-strong` |  |  |  | Placeholder |
| Kleur | `--color-focus` |  |  |  | Placeholder |
| Kleur | `--color-success` |  |  |  | Placeholder |
| Kleur | `--color-warning` |  |  |  | Placeholder |
| Kleur | `--color-error` |  |  |  | Placeholder |
| Typografie | `--font-family-base` |  |  |  | Placeholder |
| Typografie | `--font-family-heading` |  |  |  | Placeholder |
| Typografie | `--font-size-*` |  |  |  | Placeholder |
| Typografie | `--font-weight-*` |  |  |  | Placeholder |
| Typografie | `--line-height-*` |  |  |  | Placeholder |
| Spacing | `--space-*` |  |  |  | Placeholder |
| Radius | `--radius-*` |  |  |  | Placeholder |
| Shadow | `--shadow-*` |  |  |  | Placeholder |
| Motion | `--duration-*` |  |  |  | Placeholder |
| Motion | `--easing-*` |  |  |  | Placeholder |
| Layout | `--container-*` |  |  |  | Placeholder |
| Layout | `--breakpoint-*` |  |  |  | Placeholder |
| Laag | `--z-index-*` |  |  |  | Placeholder |

# 17 Design Rules

1. Gebruik goedgekeurde semantische CSS-variabelen voor herhaalde ontwerpwaarden.
2. Gebruik geen hardcoded kleuren in componentregels nadat kleurentokens zijn vastgesteld.
3. Gebruik geen inline styles voor structurele of thematische vormgeving.
4. Dupliceer geen component wanneer een bestaand component hetzelfde gebruikersdoel dekt.
5. Gebruik uitsluitend de goedgekeurde spacing-schaal nadat deze is vastgesteld.
6. Gebruik uitsluitend de goedgekeurde radius-tokens nadat deze zijn vastgesteld.
7. Gebruik uitsluitend de goedgekeurde schaduw-tokens nadat deze zijn vastgesteld.
8. Behoud semantische HTML: links navigeren en knoppen voeren gedrag uit.
9. Maak hover nooit noodzakelijk voor begrip of bediening.
10. Ontwerp en controleer iedere state in Light Theme én Dark Theme.
11. Maak status, selectie en fouten nooit uitsluitend met kleur herkenbaar.
12. Respecteer toetsenbordbediening, zichtbare focus, screenreaders en reduced motion.
13. Voeg geen fictieve onderwijsinhoud toe om een component te demonstreren.
14. Behoud de zelfstandigheid van HTML-modules en verplaats geen modulelogica naar de launcher.
15. Gebruik bestaande hashroute- en cataloguscontracten; ontwerp geen parallel navigatiesysteem.
16. Een placeholder is geen toestemming voor implementatie en geen standaardwaarde.
17. Documenteer en laat een afwijking goedkeuren voordat zij wordt geïmplementeerd.
18. Werk dit document en relevante Factory-controles samen bij na een goedgekeurd ontwerpbesluit.

# 18 AI Factory

Ieder AI-systeem dat Academy-interfacewerk uitvoert, leest vóór ontwerp of implementatie minimaal:

1. de concrete gebruikersopdracht;
2. dit volledige Design System;
3. `AI_FACTORY/README.md`;
4. de voor de taak relevante module-, catalogus- en checklistdocumenten;
5. de actuele projectbestanden binnen de toegestane scope.

Een AI-systeem:

- maakt onderscheid tussen een goedgekeurde waarde, een bestaande implementatiewaarde en een lege placeholder;
- verzint geen ontbrekende kleur, typografie, spacing, radius, shadow, breakpoint of iconenset;
- benoemt ontbrekende ontwerpbesluiten voordat implementatie daarvan afhankelijk wordt;
- hergebruikt een goedgekeurd componentcontract en creëert geen bijna-identieke variant;
- toetst voorstellen aan leerwaarde, rust, toegankelijkheid, beide thema's en responsive gebruik;
- behoudt launcher-, module-, metadata- en routegrenzen uit de AI Factory;
- rapporteert uitsluitend tests en controles die werkelijk zijn uitgevoerd;
- wijzigt alleen bestanden waarvoor de opdracht expliciet toestemming geeft.

## Besluitregistratie

Wanneer een ontwerpbesluit wordt goedgekeurd, wordt minimaal vastgelegd:

| Veld | Inhoud |
|---|---|
| Besluit-id | `[unieke-id]` |
| Datum | `[YYYY-MM-DD]` |
| Onderwerp | `[kleur / typografie / component / anders]` |
| Besluit | `[goedgekeurde specificatie]` |
| Onderbouwing | `[gebruikersprobleem, onderzoek en afweging]` |
| Gevolgen | `[launcher, modules, thema's en migratie]` |
| Toegankelijkheidsbewijs | `[contrast, keyboard, screenreader, anders]` |
| Goedkeuring | `[naam/rol]` |

## Uitbreidingsadvies

Breid dit document later gecontroleerd uit met:

- een formele tokenversie en wijzigingshistorie;
- goedgekeurde voorbeelden per component en state;
- een componentstatusregister (`Concept`, `Review`, `Goedgekeurd`, `Deprecated`);
- meetbaar contrast- en toegankelijkheidsbewijs;
- contentdesignregels voor labels, instructies, feedback en foutmeldingen;
- een migratiematrix voor launcher en bestaande zelfstandige modules;
- verwijzingen naar gevalideerde ontwerpbestanden of prototypes, zonder daarvan een tweede bron van waarheid te maken.
