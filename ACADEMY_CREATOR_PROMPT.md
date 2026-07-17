# Academy Creator Prompt

Gebruik deze prompt om een nieuwe oefenmodule voor Academy Oefenplein te ontwerpen, bouwen en controleren. Vervang alle tekst tussen `[blokhaken]` door de gegevens van de opdracht.

## 1. Doel van Academy Oefenplein

Academy Oefenplein helpt mbo-studenten snel een passende oefening te vinden via:

**Opleiding → Leerjaar → Periode → Modules**

De launcher is uitsluitend een catalogus en navigatielaag. Academy Oefenplein is geen centrale oefenengine. Iedere oefening is een volledig zelfstandig HTML-bestand in `modules/` en bevat alle eigen inhoud, vormgeving en werking.

Maak een oefenmodule voor:

- Opleiding: `[opleiding]`
- Leerjaar: `[leerjaar]`
- Periode: `[periode]`
- Thema/sectiekop: `[thema]`
- Onderwerp: `[onderwerp]`
- Doelgroep/niveau: `[doelgroep en mbo-niveau]`

## 2. Ontwerpfilosofie

- Begin bij het leerdoel en kies daarna pas de oefenvorm.
- Laat de student actief ophalen, toepassen, vergelijken of beoordelen.
- Geef korte, duidelijke instructies en directe, begrijpelijke feedback.
- Beperk afleiding: iedere stap heeft één duidelijke hoofdactie.
- Gebruik realistische taal en beroepssituaties die aansluiten bij de doelgroep.
- Maak de module bruikbaar zonder uitleg van een docent.
- Houd de module klein, doelgericht en zelfstandig.
- Bouw alleen wat voor deze opdracht nodig is.

## 3. Technische eisen

Gebruik uitsluitend:

- HTML5;
- CSS;
- vanilla JavaScript ES6.

Gebruik geen:

- frameworks of externe libraries;
- npm, bundlers of buildstappen;
- backend, database of externe API;
- imports uit de launcher;
- afhankelijkheid van `app.js` of `style.css`;
- automatische mapscanner.

Technische randvoorwaarden:

- Lever één zelfstandig bestand op: `modules/[bestandsnaam].html`.
- Neem benodigde CSS en JavaScript op in het modulebestand.
- De module moet rechtstreeks en via Live Server werken.
- Gebruik UTF-8 en `<html lang="nl">`.
- Voeg een correcte viewport-meta-tag en een beschrijvende paginatitel toe.
- Vermijd globale opslag. Gebruik `localStorage` alleen wanneer voortgang bewaren expliciet onderdeel van de opdracht is en gebruik dan een unieke, versieerbare sleutel.
- Plaats de inhoud of oefenlogica niet in `app.js`.
- Wijzig bestaande modules niet, tenzij de opdracht dit expliciet vereist.

## 4. UX-richtlijnen

- Toon eerst een helder startscherm met titel, doel, geschatte duur en een knop `Start oefenen`.
- Maak altijd duidelijk wat de student moet doen.
- Gebruik grote klik- en tikdoelen van minimaal ongeveer 44 bij 44 pixels.
- Toon voortgang wanneer de oefening uit meerdere stappen bestaat.
- Geef na een antwoord concrete feedback en een duidelijke volgende actie.
- Voorkom dat een student per ongeluk voortgang verliest.
- Toon een begrijpelijke lege toestand wanneer geen bruikbare oefeninhoud beschikbaar is.
- Sluit af met een resultaat, samenvatting of passende vervolgstap.
- Gebruik rustige kleuren, voldoende witruimte en consistente marges.
- Zorg voor één kolom op kleine schermen en voorkom horizontaal scrollen.
- Gebruik geen onnodige animaties. Respecteer `prefers-reduced-motion`.

## 5. Toegankelijkheid

- Gebruik semantische elementen zoals `main`, `section`, `article`, `button` en passende kopniveaus.
- Gebruik echte `<button>`-elementen voor acties en `<a>`-elementen voor navigatie.
- Alle functies moeten met het toetsenbord bruikbaar zijn.
- Zorg voor een duidelijke zichtbare focusstijl.
- Gebruik voldoende kleurcontrast; betekenis mag nooit uitsluitend met kleur worden aangegeven.
- Koppel labels aan invoervelden en geef knoppen begrijpelijke namen.
- Gebruik `aria-live` alleen voor relevante dynamische feedback.
- Geef informatieve afbeeldingen een betekenisvolle alternatieve tekst.
- Markeer decoratieve afbeeldingen met een lege alternatieve tekst.
- Houd teksten kort, concreet en passend bij mbo-studenten.

## 6. Module-opbouw

Werk de module minimaal uit met:

1. **Startscherm**
   - titel;
   - korte uitleg;
   - leerdoel;
   - geschatte duur;
   - startknop.
2. **Oefenscherm**
   - opdracht of vraag;
   - antwoordmogelijkheden of interactie;
   - voortgang;
   - feedback;
   - volgende actie.
3. **Eindscherm**
   - resultaat of samenvatting;
   - uitleg over wat goed ging en wat nog aandacht vraagt;
   - mogelijkheid om opnieuw te oefenen.
4. **Fout- en lege toestanden**
   - begrijpelijke melding;
   - veilige herstelactie waar mogelijk.

Oefenvorm: `[Flashcardgame / Quiz / Memory / Oefentoets / Escape Room / anders]`

Leerdoelen:

- `[leerdoel 1]`
- `[leerdoel 2]`
- `[leerdoel 3]`

Gebruik uitsluitend inhoud uit `[bron of aangeleverde lesinhoud]`. Verzin geen vakinhoud wanneer een betrouwbare bron ontbreekt.

## 7. Metadata

Leg voor iedere module deze metadata vast:

| Veld | Waarde |
|---|---|
| `id` | `[unieke-kebab-case-id]` |
| `titel` | `[zichtbare moduletitel]` |
| `type` | `[oefenvorm]` |
| `duur` | `[bijvoorbeeld 10–15 minuten]` |
| `beschrijving` | `[één korte, actieve beschrijving]` |
| `bestand` | `modules/[bestandsnaam].html` |
| `beschikbaar` | `true` |
| Opleiding | `[opleiding]` |
| Leerjaar | `[leerjaar]` |
| Periode | `[periode]` |
| Thema/sectiekop | `[thema]` |

De bestandsnaam en het `id` zijn uniek, beschrijvend en geschreven in kebab-case.

## 8. Catalogusblok

Voeg de module na succesvolle controle toe aan het bestaande JavaScript-object in `app.js`, onder de juiste opleiding, het juiste leerjaar, de juiste periode en de juiste themasectie.

Gebruik dit formaat:

```js
{
    id: "[unieke-kebab-case-id]",
    titel: "[zichtbare moduletitel]",
    type: "[oefenvorm]",
    duur: "[geschatte duur]",
    beschrijving: "[korte beschrijving]",
    bestand: "modules/[bestandsnaam].html",
    beschikbaar: true
}
```

Regels voor de catalogus:

- Maak geen extra navigatieniveau voor thema's.
- Thema's zijn uitsluitend zichtbare sectiekoppen op de modulepagina.
- Voeg geen losse JSON-bestanden of tweede databron toe.
- Gebruik `beschikbaar: false` voor een aangekondigde module zonder werkend bestand.
- Voeg bij `beschikbaar: false` geen `bestand` toe en toon geen startlink.
- Verander bestaande routes en catalogusitems niet buiten de opdracht.

## 9. Oplevering

Lever op:

- het zelfstandige modulebestand in `modules/`;
- alleen indien nodig het nieuwe catalogusblok in `app.js`;
- alleen noodzakelijke wijzigingen;
- een korte rapportage met gewijzigde bestanden, toegevoegde werking, uitgevoerde controles en bekende aandachtspunten.

Maak geen extra voorbeeldmodules, documentatie, tooling of projectstructuur tenzij daar expliciet om is gevraagd.

## 10. Kwaliteitscontrole

Controleer minimaal:

- [ ] Het modulebestand opent rechtstreeks.
- [ ] De module opent vanuit de launcher.
- [ ] Opleiding, leerjaar, periode en themasectie kloppen.
- [ ] Titel, type, duur, beschrijving en status zijn zichtbaar en correct.
- [ ] Starten, oefenen, feedback ontvangen en afronden werken.
- [ ] Opnieuw oefenen werkt zonder paginafouten.
- [ ] Knoppen en interactieve onderdelen werken met muis, aanraking en toetsenbord.
- [ ] Focusstijlen zijn zichtbaar.
- [ ] Teksten en kleurcontrast zijn goed leesbaar.
- [ ] Desktop-, tablet- en mobiele weergave zijn gecontroleerd.
- [ ] Er is geen horizontale overflow.
- [ ] De browserconsole toont geen fouten.
- [ ] De launcher en bestaande modules blijven werken.
- [ ] Niet-beschikbare modules bevatten geen kapotte link.
- [ ] De oplossing gebruikt geen externe afhankelijkheden.

## 11. Voorbeeldopdracht

Maak een zelfstandige quizmodule voor Academy Oefenplein.

Context:

- Opleiding: Traiteur
- Leerjaar: Leerjaar 2
- Periode: Periode 1
- Thema/sectiekop: Voedingskennis
- Titel: Quiz voedingsstoffen
- Type: Quiz
- Duur: 10 minuten
- Beschrijving: Test je kennis van koolhydraten, eiwitten, vetten, vitamines en mineralen.
- Bestand: `modules/quiz-voedingsstoffen.html`

De quiz bevat `[aantal]` vragen op basis van `[aangeleverde bron]`. Toon één vraag per scherm, directe inhoudelijke feedback en een voortgangsindicator. Sluit af met het aantal goede antwoorden, aandachtspunten en een knop om opnieuw te oefenen.

Maak het bestand volledig zelfstandig met HTML, CSS en vanilla JavaScript. Voeg het na controle als beschikbare module toe aan `app.js` onder `Traiteur → Leerjaar 2 → Periode 1 → Voedingskennis`. Behoud alle bestaande launcherfunctionaliteit en wijzig geen bestaande modules.
