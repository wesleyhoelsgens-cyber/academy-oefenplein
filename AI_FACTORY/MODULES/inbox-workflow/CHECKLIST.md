# Inbox Workflow Checklist

**Gebruik:** verplicht per registratiebatch

## A. Configuratie en bron

- [ ] `CONFIG.md` is volledig gelezen en alle paden zijn gevalideerd.
- [ ] De inbox bevat uitsluitend de te beoordelen modulebatch en toegestane marker.
- [ ] Iedere module heeft een vastgelegde SHA-256-bronhash.
- [ ] Modulebestand en bijbehorende assets zijn samen geïnventariseerd.
- [ ] Er zijn geen wijzigingen uitgevoerd tijdens de analysefase.

## B. Classificatie en metadata

- [ ] Juiste opleiding of projectspecifiek equivalent.
- [ ] Juiste leerjaarwaarde, of aantoonbaar niet van toepassing.
- [ ] Juiste periodewaarde, of aantoonbaar niet van toepassing.
- [ ] Juiste themamap of projectspecifiek equivalent.
- [ ] Rechtstreeks of speciaal onderdeel is correct geclassificeerd, indien van toepassing.
- [ ] Titel, type, duur, beschrijving en id zijn aanwezig of als blokkade gemeld.
- [ ] Ieder afgeleid veld is gemarkeerd als bevestigd, voorgesteld of onopgelost.

## C. Conflicten en doelpad

- [ ] Juiste voorgestelde locatie binnen `catalogRoot`.
- [ ] Bestandsnaam volgt de geconfigureerde conventie.
- [ ] Geen naamconflict, ook niet door alleen hoofdletterverschil.
- [ ] Geen dubbele module-id, bestandshash of ongewenst bestandspad.
- [ ] Meervoudig gebruik verwijst naar één bestand onder `sharedFolder`.
- [ ] Er worden geen dubbele HTML-bestanden gemaakt.
- [ ] Alle assets hebben een bestaand en veilig doelpad.

## D. Goedkeuring

- [ ] Registratierapport bevat bronhash, doelpad en catalogusplaatsing(en).
- [ ] Alle onopgeloste verplichte velden zijn opgelost.
- [ ] De analyse eindigt exact met `Wil je het registratieplan uitvoeren?`.
- [ ] Het antwoord is een van de vier toegestane korte antwoorden.
- [ ] `Ja` verwijst ondubbelzinnig naar het meest recente actieve rapport in dezelfde conversatie.
- [ ] Het exacte registratieplan is expliciet goedgekeurd.
- [ ] Er is geen tweede lange uitvoeringsprompt van de gebruiker gevraagd of gebruikt.
- [ ] De bronhash is sinds goedkeuring niet gewijzigd.
- [ ] Alleen goedgekeurde mutaties worden uitgevoerd.

Bij `Nee`, `Ja, maar wijzig eerst...` en `Nee, analyseer opnieuw.` zijn tot een nieuw `Ja`
geen registratiemutaties toegestaan.

## E. Registratie

- [ ] Doelmap is veilig binnen de projectroot aangemaakt.
- [ ] Module en assets zijn verplaatst, niet gedupliceerd.
- [ ] Launcherbestand of catalogus is bijgewerkt.
- [ ] Iedere catalogus-entry verwijst naar het exacte fysieke bestand.
- [ ] Interne links en relatieve assetpaden zijn gecontroleerd en waar nodig hersteld.
- [ ] Documentatie is bijgewerkt.
- [ ] Oude paden en oude namen zijn uit actieve verwijzingen verwijderd.

## F. Technische validatie

- [ ] Module opent rechtstreeks.
- [ ] Module opent via iedere goedgekeurde launcherplaatsing.
- [ ] Home-, breadcrumb-, terug- en fallbacklinks werken.
- [ ] Ontbrekende assets: nul.
- [ ] JavaScript- en HTML-controles zijn uitgevoerd.
- [ ] Browserconsole bevat geen fouten.
- [ ] Responsive eindtest is uitgevoerd.
- [ ] GitHub Pages-paden en hoofdlettergebruik zijn correct.
- [ ] Bestaande functionaliteit heeft een regressiecontrole doorstaan.
- [ ] `git diff --check` of projectspecifiek equivalent is geslaagd.

## G. Afronding

- [ ] Eindtest uitgevoerd en bewijs vastgelegd.
- [ ] Geen dubbele bestanden aanwezig.
- [ ] Inbox is buiten `emptyInboxMarker` leeg.
- [ ] Registratierapport bevat werkelijke wijzigingen en tests.
- [ ] Niet-uitgevoerde controles en resterende waarschuwingen zijn expliciet vermeld.
- [ ] Er is niet gecommit, gepusht of gepubliceerd zonder afzonderlijke toestemming.
