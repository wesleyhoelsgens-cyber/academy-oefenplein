# 03 — Update een module

## Doel

Een bestaande module inhoudelijk of functioneel bijwerken zonder onbedoelde regressies.

## Wanneer gebruiken

Gebruik deze prompt voor een expliciete nieuwe versie van een bestaande oefening.

## Variabelen

- `[Modulepad]` (relatief onder `modules/`, inclusief bestandsnaam), `[Huidige versie]`, `[Nieuwe versie]`
- `[Gewenste wijzigingen]`, `[Bronmateriaal]`
- `[Metadatawijzigingen]`, `[Niet wijzigen]`

## Prompt

```text
Lees modules/[Modulepad] volledig, plus de relevante AI Factory-standaarden.
Werk de module bij van [Huidige versie] naar [Nieuwe versie].
Gewenste wijzigingen: [Gewenste wijzigingen].
Gebruik voor vakinhoud uitsluitend: [Bronmateriaal].
Metadatawijzigingen: [Metadatawijzigingen].
Niet wijzigen: [Niet wijzigen].

Behoud bestaande correcte werking, gebruikersvoortgang en catalogusroute. Pas een
LocalStorage-schemaversie alleen aan wanneer opgeslagen data incompatibel verandert.
Voeg geen nieuwe afhankelijkheden toe. Werk de launcherentry alleen bij wanneer zichtbare
metadata of het bestandspad verandert. Test zowel de gewijzigde flow als bestaande flows
en rapporteer het versieverschil, migratiegevolgen en bekende risico's.
```

## Voorbeeld

Voeg vijf goedgekeurde kaarten toe en verbeter de feedback; behoud opslagkey en bediening.

## Verwachte uitvoer

- Bijgewerkt modulebestand en eventueel metadata.
- Versie- en regressierapport.
- Geen wijzigingen buiten de opgegeven scope.
