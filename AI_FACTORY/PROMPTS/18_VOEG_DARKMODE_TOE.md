# 18 — Voeg darkmode toe

## Doel

Een centrale, toegankelijke Theme Engine toevoegen zonder component-CSS te dupliceren of bestaande functionaliteit te beschadigen.

## Wanneer gebruiken

Gebruik deze prompt voor een launcher of zelfstandige module die `Systeem`, `Licht` en `Donker` moet ondersteunen.

## Variabelen

- `[Doelbestand(en)]`
- `[Opslagsleutel]`
- `[Bestaande themavariabelen]`
- `[Te controleren routes of schermen]`

## Prompt

```text
Lees [Doelbestand(en)] en inventariseer alle componentkleuren, hover-, focus- en lege
toestanden. Implementeer exact de voorkeuren system, light en dark. Gebruik opslagkey
[Opslagsleutel] en accepteer uitsluitend deze drie waarden; val fouttolerant terug op system.

Definieer lichte semantische CSS-variabelen in :root en donkere waarden onder
html[data-theme="dark"]. Vervang hardcoded componentkleuren door variabelen en dupliceer
geen componentregels. Los system op met prefers-color-scheme en luister naar wijzigingen
zolang system actief is. Een expliciete light- of dark-keuze blijft leidend.

Voeg een toetsenbord- en screenreaderbedienbare headercontrol toe met zichtbare actieve
status en focus. Sla een keuze op, pas data-theme zonder reload toe en werk aria-attributen
bij. Gebruik een klein fouttolerant head-script om een lichte flits bij dark mode te
voorkomen. Respecteer prefers-reduced-motion.

Behoud routes, content en modulelogica. Onderzoek zelfstandige modules afzonderlijk en
claim geen gedeelde styling wanneer zij eigen CSS gebruiken. Controleer [Te controleren
routes of schermen] in licht, donker en system op desktop, tablet en mobiel. Test opslag,
ongeldige waarden, veranderende systeemvoorkeur, toetsenbord, contrast, console en regressie.
Rapporteer uitsluitend daadwerkelijk uitgevoerde controles.
```

## Voorbeeld

Voeg de Theme Engine toe aan `index.html`, `style.css` en `app.js` met opslagsleutel `academy-theme-preference` en controleer de home-, periode- en speciale routes.

## Verwachte uitvoer

- Centrale semantische variabelensets voor licht en donker.
- Toegankelijke bediening voor Systeem, Licht en Donker.
- Fouttolerante opslag, systeemsynchronisatie en vroege initialisatie.
- Gedocumenteerde grenzen voor zelfstandige modules en aantoonbare regressietests.
