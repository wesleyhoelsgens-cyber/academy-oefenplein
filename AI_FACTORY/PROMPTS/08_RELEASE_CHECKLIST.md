# 08 — Release checklist

## Doel

Objectief vaststellen of een module of Academy-versie gereed is voor publicatie.

## Wanneer gebruiken

Gebruik deze prompt nadat implementatie en inhoudelijke review zijn afgerond.

## Variabelen

- `[Releaseversie]`, `[Releaseonderdelen]`
- `[Te testen routes]`, `[Doelbrowsers]`
- `[Inhoudelijk akkoord]`, `[Bekende aandachtspunten]`

## Prompt

```text
Beoordeel release [Releaseversie] met onderdelen [Releaseonderdelen].
Te testen routes: [Te testen routes]. Doelbrowsers: [Doelbrowsers].
Inhoudelijk akkoord: [Inhoudelijk akkoord]. Bekende aandachtspunten: [Bekende aandachtspunten].

Gebruik AI_FACTORY/MODULE_CHECKLIST.md als verplichte basis. Controleer fysieke bestanden,
metadata, catalogusplaatsing, directe opening, launcherroute, browser Terug, kruimelpad,
console, offline werking, toetsenbord, LocalStorage en mobiel/tablet/desktop. Controleer ook
dat bestaande modules nog openen en dat geen tijdelijke bestanden of dode links aanwezig zijn.
Markeer ieder punt als geslaagd, mislukt, niet uitgevoerd of niet van toepassing, met bewijs.
Wijzig niets tijdens deze releasecheck. Eindig met GO, NO-GO of GO MET VOORWAARDEN en noem
alle blokkerende acties en de menselijke acceptatiestappen die nog nodig zijn.
```

## Voorbeeld

Release 1.1.0 met één nieuwe flashcardmodule en een catalogusupdate.

## Verwachte uitvoer

- Ingevulde releasecontrole met bewijs.
- Blokkers en restrisico's.
- Expliciet releasebesluit.

