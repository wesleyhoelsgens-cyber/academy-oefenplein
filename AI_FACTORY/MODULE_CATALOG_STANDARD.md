# Module Catalog Standard

**Versie:** 1.0.0  
**Normatief:** ja

## Doel

Dit document definieert de metadata waarmee een oefenmodule wordt geïdentificeerd, gevonden, gecontroleerd en in de Academy Launcher wordt opgenomen. Metadata beschrijft de module; zij bevat nooit oefenlogica of volledige lesinhoud.

## Canoniek metadatamodel

Iedere nieuwe module levert het volgende volledige object op:

```js
{
    id: "quiz-voedingsstoffen",
    title: "Quiz voedingsstoffen",
    type: "quiz",
    description: "Test je kennis van koolhydraten, eiwitten, vetten, vitamines en mineralen.",
    estimatedDuration: "10 minuten",
    education: "traiteur",
    year: 2,
    period: 1,
    specialSection: null,
    educationSection: null,
    theme: "Voedingskennis",
    difficulty: "basis",
    tags: ["voeding", "voedingsstoffen", "quiz"],
    status: "available",
    file: "modules/quiz-voedingsstoffen.html",
    version: "1.0.0",
    factoryVersion: "1.0.0",
    author: "Academy Oefenplein",
    lastUpdated: "2026-07-17"
}
```

## Velddefinities

| Veld | Type | Verplicht | Betekenis |
|---|---|---:|---|
| `id` | string | ja | Permanente, unieke technische sleutel |
| `title` | string | ja | Korte zichtbare moduletitel |
| `type` | string | ja | Genormaliseerd moduletype |
| `description` | string | ja | Eén concrete zin over wat de student oefent |
| `estimatedDuration` | string | ja | Realistische geschatte tijd voor één ronde |
| `education` | string | ja | Opleidings-id uit de launcher |
| `year` | integer/null | conditioneel | Leerjaar, of `null` bij plaatsing in een opleidingsonderdeel |
| `period` | integer/null | conditioneel | Geconfigureerde periode; `null` bij plaatsing in een speciaal onderdeel |
| `specialSection` | string/null | conditioneel | Id van een speciaal toets- of PVB-onderdeel; `null` bij plaatsing in een periode |
| `educationSection` | string/null | conditioneel | Id van een onderdeel dat rechtstreeks onder een opleiding staat |
| `theme` | string | ja | Zichtbare sectiekop; geen navigatieniveau |
| `difficulty` | string | ja | `basis`, `gemiddeld` of `verdieping` |
| `tags` | array | ja | Zoek- en beheertermen, zonder duplicaten |
| `status` | string | ja | `planned`, `in-development`, `review`, `available` of `retired` |
| `file` | string | conditioneel | Relatief pad naar een werkende module |
| `version` | string | ja | Semantische versie van de module |
| `factoryVersion` | string | ja | AI Factory-versie waartegen is gecontroleerd |
| `author` | string | ja | Maker of verantwoordelijke organisatie |
| `lastUpdated` | string | ja | Laatste inhoudelijke wijziging als `YYYY-MM-DD` |

## Toegestane opleidingen

| Zichtbare naam | `education` |
|---|---|
| Traiteur | `traiteur` |
| BOL Allround Food Expert | `bol-allround-food-expert` |
| Hospitality | `hospitality` |
| Burgerschap | `burgerschap` |
| Rekenen | `rekenen` |
| Nederlands | `nederlands` |

## Validatieregels

### Identiteit en tekst

- `id` gebruikt uitsluitend kleine letters, cijfers en koppeltekens: `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
- Een eenmaal gepubliceerde `id` verandert niet bij een titelwijziging.
- `title` is bij voorkeur maximaal 60 tekens.
- `description` is één actieve zin, bij voorkeur 60–180 tekens.
- `theme` is begrijpelijk voor studenten en wordt consistent gespeld.
- Tags zijn lowercase, relevant en uniek.

### Status en bestand

- Alleen `available` mag als beschikbare module in de launcher worden gestart.
- Bij `available` is `file` verplicht en moet het bestand bestaan.
- Bij `planned` ontbreekt `file`; de launcher toont geen startlink.
- `in-development` en `review` zijn interne statussen en worden niet aan studenten aangeboden.
- `retired` wordt uit de actieve launcher verwijderd, maar blijft in releasehistorie herkenbaar.
- Het pad begint met `modules/`, eindigt op `.html` en bevat geen `..`, backslashes of absolute schijflocatie.

### Onderwijsplaatsing

- Bij leerjaarplaatsing bevat `year` een waarde en precies een van `period` en `specialSection` een plaatsingswaarde; `educationSection` is dan `null`.
- Bij plaatsing rechtstreeks onder een opleiding bevat `educationSection` een waarde en zijn `year`, `period` en `specialSection` `null`.
- `period` moet bestaan in de configureerbare perioden van het gekozen leerjaar.
- `specialSection` moet bestaan in `specialeOnderdelen` van het gekozen leerjaar.
- Speciale onderdelen staan naast, en nooit binnen, de reguliere periodenavigatie.
- Een leerjaar mag nul, een of meerdere speciale onderdelen bevatten.
- Een opleiding mag nul, een of meerdere configureerbare `onderdelen` bevatten.

### Versies en datum

- `version` en `factoryVersion` volgen `MAJOR.MINOR.PATCH`.
- `lastUpdated` gebruikt ISO 8601-datumnotatie.
- Een inhoudelijke of functionele wijziging verhoogt de moduleversie.

## Vertaling naar de huidige launcher

De huidige launcher gebruikt een compact Nederlandstalig catalogusblok. Vertaal het canonieke object bij integratie als volgt:

| Canoniek veld | Huidig veld in `app.js` |
|---|---|
| `id` | `id` |
| `title` | `titel` |
| zichtbare naam van `type` | `type` |
| `estimatedDuration` | `duur` |
| `description` | `beschrijving` |
| `file` | `bestand` |
| `status === "available"` | `beschikbaar: true` |

`education` en vervolgens `year` plus `period`/`specialSection`, of `educationSection`, bepalen waar het blok in de bestaande hiërarchie wordt geplaatst. `theme` blijft een visuele sectiekop op de gekozen overzichtspagina. De overige canonieke velden blijven onderdeel van de oplevering en kunnen later zonder betekenisverlies in een uitgebreidere catalogus worden opgenomen.

```js
{
    id: "quiz-voedingsstoffen",
    titel: "Quiz voedingsstoffen",
    type: "Quiz",
    duur: "10 minuten",
    beschrijving: "Test je kennis van koolhydraten, eiwitten, vetten, vitamines en mineralen.",
    bestand: "modules/quiz-voedingsstoffen.html",
    beschikbaar: true
}
```

Voeg voor een toekomstige tegel geen niet-bestaand bestand toe:

```js
{
    id: "memory-productgroepen",
    titel: "Memory productgroepen",
    type: "Memory",
    duur: "10 minuten",
    beschrijving: "Koppel producten aan de juiste productgroep.",
    beschikbaar: false
}
```

## Cataloguscontrole

- [ ] Alle verplichte canonieke velden zijn aanwezig.
- [ ] Waarden voldoen aan type en toegestane waarden.
- [ ] Plaatsing in opleiding, opleidingsonderdeel, leerjaar, periode of speciaal onderdeel en thema klopt.
- [ ] `available` verwijst naar een bestaand en getest bestand.
- [ ] Er bestaat geen tweede module met dezelfde `id` of hetzelfde bestandspad.
- [ ] De compacte launcher-entry is inhoudelijk gelijk aan de canonieke metadata.
