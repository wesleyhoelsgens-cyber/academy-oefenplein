"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const launcherFile = path.join(root, "app.js");
const academyIndex = path.join(root, "index.html");

const expectedRoutes = new Map(Object.entries({
    "modules/traiteur/leerjaar-2/periode-5/voedingskennis-smaakleer/voedingskennis-smaakleer-trainer.html": "#/traiteur/leerjaar-2/periode-5",
    "modules/traiteur/leerjaar-2/periode-5/voedingskennis/flashcardgame-herhaling-voedingskennis.html": "#/traiteur/leerjaar-2/periode-5",
    "modules/traiteur/leerjaar-2/periode-5/begrippenlijst/begrippenformulier-dieten-microbiologie-eetwensen.html": "#/traiteur/leerjaar-2/periode-5",
    "modules/traiteur/leerjaar-2/periode-5/smaaklab/smaaklab-niveau-2-en-3.html": "#/traiteur/leerjaar-2/periode-5",
    "modules/traiteur/leerjaar-2/periode-6/personeel/theorie-personeel-periodetrainer.html": "#/traiteur/leerjaar-2/periode-6",
    "modules/traiteur/leerjaar-2/periode-7/financieel-in-de-foodpraktijk/financieel-in-de-foodpraktijk.html": "#/traiteur/leerjaar-2/periode-7",
    "modules/hospitality/leerjaar-1/periode-1/vakjargon-game-1/vakjargon-game-1.html": "#/hospitality/leerjaar-1/periode-1",
    "modules/hospitality/leerjaar-1/periode-1/les-4-mixology/mixology-handboek-v4-1.html": "#/hospitality/leerjaar-1/periode-1",
    "modules/hospitality/leerjaar-1/periode-3/hospitality-vaktaal/hospitality-p2-woordtrainer-80-begrippen.html": "#/hospitality/leerjaar-1/periode-3",
    "modules/hospitality/leerjaar-1/periode-2/het-gastenverblijf/hospitality-p3-het-gastenverblijf.html": "#/hospitality/leerjaar-1/periode-2",
    "modules/hospitality/gastvrijheid-in-actie-projectcoach/index.html": "#/hospitality",
    "modules/hospitality/examenplanner/examenplanner.html": "#/hospitality",
    "modules/entreeopleiding/leerjaar-1/periode-1/safety-scan/safety-scan-entree-niveau-1.html": "#/entreeopleiding",
    "modules/rekenen/financieel/inkoopprijs-en-rendement/gecorrigeerde-inkoopprijs-oefenmodule.html": "#/rekenen/onderdeel/financieel",
    "modules/rekenen/financieel/inkoopprijs-en-rendement/gecorrigeerde-inkoopprijs-niveau-3-acht-oefenvragen.html": "#/rekenen/onderdeel/financieel",
    "modules/bol-allround-food-expert/leerjaar-1/keukenbasis/Keukenbasis_BOL_LJ1_AGF_v30.html": "#/bol-allround-food-expert/leerjaar-1",
    "modules/gedeeld/food/warme-bereidingstechnieken/leermodule-warme-bereidingstechnieken.html": ""
}));

function normalize(file) {
    return file.replaceAll("\\", "/");
}

function extractModuleFiles(source) {
    return [...source.matchAll(/bestand:\s*["']([^"']+\.html)["']/g)]
        .map(match => normalize(match[1]));
}

function extractIndexCandidates(source) {
    return [...source.matchAll(/["'`]((?:\.\.\/)+index\.html(?:#[^"'`<\s]*)?)["'`]/gi)]
        .map(match => match[1]);
}

const launcherSource = fs.readFileSync(launcherFile, "utf8");
const moduleFiles = [...new Set(extractModuleFiles(launcherSource))].sort();
const results = [];

for (const relativeFile of moduleFiles) {
    const absoluteFile = path.join(root, relativeFile);
    if (!fs.existsSync(absoluteFile)) {
        results.push({ file: relativeFile, status: "MISLUKT", reason: "modulebestand ontbreekt" });
        continue;
    }

    const source = fs.readFileSync(absoluteFile, "utf8");
    const candidates = extractIndexCandidates(source);
    const validIndexCandidates = candidates.filter(candidate => {
        const filePart = candidate.split(/[?#]/, 1)[0];
        return path.resolve(path.dirname(absoluteFile), filePart) === academyIndex;
    });

    if (!validIndexCandidates.length) {
        results.push({ file: relativeFile, status: "MISLUKT", reason: "geen geldige teruglink naar index.html" });
        continue;
    }

    const expectedRoute = expectedRoutes.get(relativeFile);
    if (expectedRoute !== undefined && expectedRoute && !source.includes(expectedRoute)) {
        results.push({ file: relativeFile, status: "MISLUKT", reason: `verwachte route ${expectedRoute} ontbreekt` });
        continue;
    }

    results.push({ file: relativeFile, status: "GOED", reason: expectedRoute === undefined ? "bestaande Academy-link" : `bestemming ${expectedRoute || "Academy-start"}` });
}

const unregisteredExpectations = [...expectedRoutes.keys()].filter(file => !moduleFiles.includes(file));
for (const file of unregisteredExpectations) {
    results.push({ file, status: "MISLUKT", reason: "verwachte module staat niet in app.js" });
}

const failed = results.filter(result => result.status !== "GOED");
for (const result of results) {
    console.log(`${result.status.padEnd(7)} ${result.file} — ${result.reason}`);
}
console.log(`\nTotaal: ${results.length - failed.length}/${results.length} gekoppelde modules goed.`);

if (failed.length) process.exitCode = 1;
