# Academy Oefenplein

Academy Oefenplein is een launcher voor zelfstandige oefenmodules. De onderwijsstructuur is per opleiding configureerbaar: Traiteur gebruikt leerjaren en perioden, terwijl Rekenen en Nederlands rechtstreekse opleidingsonderdelen kunnen gebruiken.

Modulebestanden staan genest onder `modules/[opleiding]/` volgens hun catalogusplaatsing. Modules die door meerdere opleidingen worden gebruikt, staan één keer onder `modules/gedeeld/` en worden vanuit `app.js` op de benodigde plaatsen gekoppeld.

Nieuwe HTML-modules worden eerst geplaatst in `modules/_inbox/`. Analyse en registratie verlopen
uitsluitend via de projectonafhankelijke AI Factory-module
[`AI_FACTORY/MODULES/inbox-workflow/`](AI_FACTORY/MODULES/inbox-workflow/). De analysefase wijzigt
niets; verplaatsing en catalogusregistratie volgen pas na expliciete goedkeuring.
Na het rapport vraagt de AI uitsluitend `Wil je het registratieplan uitvoeren?`. Een antwoord
`Ja` start automatisch de gecontroleerde registratie; een tweede lange prompt is niet nodig.

## Thema-instelling

De launcher ondersteunt `Systeem`, `Licht` en `Donker`. De voorkeur wordt lokaal opgeslagen onder `academy-theme-preference` met de waarde `system`, `light` of `dark`. Zonder geldige opgeslagen waarde volgt de launcher via `prefers-color-scheme` automatisch het systeem. Het opgeloste visuele thema staat als `data-theme="light"` of `data-theme="dark"` op het `<html>`-element.

De zelfstandige HTML-modules hebben momenteel hun eigen CSS en nemen de launchervoorkeur nog niet automatisch over. Nieuwe modules moeten de semantische kleurvariabelen uit de AI Factory gebruiken; aansluiting van bestaande modules is een afzonderlijk vervolgitem.

## Navigatiecontrole

Zelfstandige modules moeten altijd een werkende terugroute naar Academy Oefenplein hebben. De gedeelde navigatiebalk staat in `academy-navigation.js`. Controleer na het toevoegen of verplaatsen van modules alle geregistreerde bestanden en teruglinks met:

```powershell
node scripts/check-academy-navigation.cjs
```

De controle leest de modulebestanden uit `app.js`, controleert of ze bestaan, of hun relatieve link werkelijk bij `index.html` uitkomt en of de vastgelegde opleidingsroute klopt.
