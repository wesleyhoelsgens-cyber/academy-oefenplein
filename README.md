# Academy Oefenplein

Academy Oefenplein is een launcher voor zelfstandige oefenmodules met navigatie via opleiding, leerjaar en periode of speciaal onderdeel.

## Thema-instelling

De launcher ondersteunt `Systeem`, `Licht` en `Donker`. De voorkeur wordt lokaal opgeslagen onder `academy-theme-preference` met de waarde `system`, `light` of `dark`. Zonder geldige opgeslagen waarde volgt de launcher via `prefers-color-scheme` automatisch het systeem. Het opgeloste visuele thema staat als `data-theme="light"` of `data-theme="dark"` op het `<html>`-element.

De zelfstandige HTML-modules hebben momenteel hun eigen CSS en nemen de launchervoorkeur nog niet automatisch over. Nieuwe modules moeten de semantische kleurvariabelen uit de AI Factory gebruiken; aansluiting van bestaande modules is een afzonderlijk vervolgitem.
