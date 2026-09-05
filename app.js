"use strict";

const THEME_STORAGE_KEY = "academy-theme-preference";
const THEME_PREFERENCES = ["system", "light", "dark"];
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
let themePreference = getStoredThemePreference();

function getStoredThemePreference() {
    try {
        const storedPreference = localStorage.getItem(THEME_STORAGE_KEY);
        return THEME_PREFERENCES.includes(storedPreference) ? storedPreference : "system";
    } catch (_) {
        return "system";
    }
}

function getSystemTheme() {
    return systemThemeQuery.matches ? "dark" : "light";
}

function resolveTheme(preference) {
    return preference === "system" ? getSystemTheme() : preference;
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
}

function updateThemeControls() {
    document.querySelectorAll("[data-theme-preference]").forEach(button => {
        button.setAttribute("aria-pressed", String(button.dataset.themePreference === themePreference));
    });
}

function setThemePreference(preference) {
    if (!THEME_PREFERENCES.includes(preference)) return;
    themePreference = preference;
    try {
        localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch (_) {}
    applyTheme(resolveTheme(preference));
    updateThemeControls();
}

function handleSystemThemeChange() {
    if (themePreference === "system") applyTheme(getSystemTheme());
}

document.querySelectorAll("[data-theme-preference]").forEach(button => {
    button.addEventListener("click", () => setThemePreference(button.dataset.themePreference));
});
systemThemeQuery.addEventListener("change", handleSystemThemeChange);
applyTheme(resolveTheme(themePreference));
updateThemeControls();

const academyData = {
    algemeneThemas: [
        {
            id: "nieuw-in-de-klas",
            naam: "Nieuw in de klas",
            modules: [
                {
                    id: "beroepsafspraken-interactief-eigenaarschap",
                    titel: "Nieuw in de klas? Vul de beroepsafspraken in",
                    type: "Interactief afsprakenformulier",
                    duur: "20–30 minuten",
                    beschrijving: "Lees alle beroepsafspraken, vul je antwoorden, naam en beroepsdoel in, sla het formulier op als PDF en mail het naar je docent.",
                    bestand: "modules/gedeeld/beroepshouding/nieuw-in-de-klas/beroepsafspraken-interactief-eigenaarschap.html",
                    actieLabel: "Invullen",
                    compactNaAfronding: true,
                    opslagSleutel: "academy.beroepsafspraken-interactief-eigenaarschap.v1",
                    beschikbaar: true
                }
            ]
        }
    ],
    opleidingen: [
        createOpleiding("traiteur", "Traiteur", [
            createLeerjaar(1, [1, 2, 3, 4], {}, [
                createEindtoetsOnderdeel(),
                createWarmeBereidingstechniekenOnderdeel()
            ]),
            createLeerjaar(2, [5, 6, 7, 8], {
                5: {
                    themas: [
                        {
                            id: "voedingskennis",
                            naam: "Les 1 – Voedingskennis Herhaling vorig jaar",
                            modules: [
                                {
                                    id: "herhaling-voedingskennis",
                                    titel: "Les 1 – Herhaling voedingskennis vorig jaar",
                                    type: "Flashcardgame",
                                    duur: "10–15 minuten",
                                    beschrijving: "Herhaal de voedingskennis uit leerjaar 1. Dit is het minimale startniveau voor de nieuwe, moeilijkere lesstof: train tot je de begrippen vlot en foutloos beheerst.",
                                    bestand: "modules/traiteur/leerjaar-2/periode-5/voedingskennis/flashcardgame-herhaling-voedingskennis.html",
                                    beschikbaar: true
                                }
                            ]
                        },
                        {
                            id: "les-2-dieten-microbiologie-eetwensen",
                            naam: "Les 2 – Herhaling diëten, microbiologie & eetwensen vorig jaar",
                            modules: [
                                {
                                    id: "flashcards-dieten-microbiologie-eetwensen",
                                    titel: "Herhaling diëten, microbiologie & eetwensen vorig jaar",
                                    type: "Flashcardgame",
                                    duur: "10–15 minuten",
                                    beschrijving: "Herhaal deze basis uit leerjaar 1. Dit is het minimale startniveau voor de nieuwe, moeilijkere lesstof: train tot je de begrippen vlot en foutloos beheerst.",
                                    bestand: "modules/traiteur/leerjaar-2/periode-5/dieten-microbiologie-eetwensen/flashcards-dieten-microbiologie-eetwensen.html",
                                    beschikbaar: true
                                }
                            ]
                        },
                        {
                            id: "begrippenlijst",
                            naam: "Begrippenlijst",
                            modules: [
                                {
                                    id: "begrippenformulier-dieten-microbiologie-eetwensen",
                                    titel: "Begrippen oefenen – Diëten, Microbiologie & Eetwensen",
                                    type: "Begrippenformulier",
                                    duur: "20–30 minuten",
                                    beschrijving: "Leg 30 belangrijke begrippen over diëten, microbiologie en eetwensen uit in je eigen woorden.",
                                    bestand: "modules/traiteur/leerjaar-2/periode-5/begrippenlijst/begrippenformulier-dieten-microbiologie-eetwensen.html",
                                    beschikbaar: true
                                }
                            ]
                        },
                        {
                            id: "nieuwe-lesstof-voedingskennis-smaakleer",
                            naam: "Nieuwe lesstof – Voedingskennis & Smaakleer",
                            modules: [
                                {
                                    id: "voedingskennis-smaakleer-trainer",
                                    titel: "Nieuwe lesstof – Voedingskennis & Smaakleer",
                                    type: "Leer- en examentrainer",
                                    duur: "8 weektrainingen",
                                    beschrijving: "Ga na de herhalingslessen verder met nieuwe voedingskennis en smaakleer, inclusief praktijkopdrachten, etiketanalyse en examentraining.",
                                    bestand: "modules/traiteur/leerjaar-2/periode-5/voedingskennis-smaakleer/voedingskennis-smaakleer-trainer.html",
                                    beschikbaar: true
                                }
                            ]
                        }
                    ]
                },
                6: {
                    themas: [
                        {
                            id: "personeel",
                            naam: "Personeel",
                            modules: [
                                {
                                    id: "theorie-personeel-periodetrainer",
                                    titel: "Personeel – Periodetrainer",
                                    type: "Theorie- en examentrainer",
                                    duur: "Hele periode",
                                    beschrijving: "Oefen de theorie over personeel gedurende de hele periode. Werk met herkenbare beroepssituaties, volg je voortgang en verdien verschillende beroepsbadges.",
                                    bestand: "modules/traiteur/leerjaar-2/periode-6/personeel/theorie-personeel-periodetrainer.html",
                                    beschikbaar: true
                                }
                            ]
                        }
                    ]
                }
            }, [
                createEindexamenOnderdeel(),
                createWarmeBereidingstechniekenOnderdeel()
            ])
        ]),
        createOpleiding("bol-allround-food-expert", "Allround Food Expert", [
            createLeerjaar(1, [1, 2, 3, 4], {
                1: {
                    themas: [
                        {
                            id: "professionele-ontwikkeling",
                            naam: "Professionele ontwikkeling",
                            modules: [
                                {
                                    id: "mijn-professionele-start",
                                    titel: "Mijn professionele start",
                                    type: "Profiel- en reflectieopdracht",
                                    duur: "45–60 minuten",
                                    beschrijving: "Bereid jouw verhaal voor in maximaal 3 dia’s.",
                                    bestand: "modules/bol-allround-food-expert/leerjaar-1/periode-1/professionele-ontwikkeling/mijn-professionele-start.html",
                                    beschikbaar: true
                                }
                            ]
                        },
                        {
                            id: "foodsafari",
                            naam: "Foodsafari",
                            modules: [
                                {
                                    id: "foodsafari-kompas-v3-2",
                                    titel: "Foodsafari Kompas",
                                    type: "Voorbereidings- en bezoekkompas",
                                    duur: "30–60 minuten per week",
                                    beschrijving: "Bereid je Foodsafari iedere week 30–60 minuten voor en werk na ieder bezoek zelf je verslag bij.",
                                    bestand: "modules/bol-allround-food-expert/leerjaar-1/periode-1/foodsafari/foodsafari-kompas-v3-2.html",
                                    actieLabel: "Open Kompas",
                                    beschikbaar: true
                                }
                            ]
                        },
                        createStageZoekenThema()
                    ]
                },
                2: {
                    themas: [createStageZoekenThema()]
                }
            }, [
                createEindtoetsOnderdeel(),
                createWarmeBereidingstechniekenOnderdeel()
            ]),
            createLeerjaar(2, [5, 6, 7, 8], {
                8: {
                    themas: [
                        {
                            id: "warenkennis",
                            naam: "Warenkennis",
                            modules: [
                                {
                                    id: "examen-master-flashcards-warenkennis",
                                    titel: "Examen Master Flashcards Warenkennis",
                                    type: "Flashcards",
                                    duur: "30–45 minuten",
                                    beschrijving: "Oefen uitgebreide product- en warenkennis met flashcards, kennisvragen en een overzicht per onderwerp.",
                                    bestand: "modules/bol-allround-food-expert/leerjaar-2/periode-8/warenkennis/flashcards-warenkennis.html",
                                    beschikbaar: true
                                }
                            ]
                        }
                    ]
                }
            }, [
                createEindexamenOnderdeel(),
                createWarmeBereidingstechniekenOnderdeel()
            ])
        ]),
        createOpleiding("hospitality", "Hospitality", [
            createLeerjaar(1, [1, 2, 3, 4], {
                1: {
                    themas: [
                        {
                            id: "gastvrijheid-verlenen",
                            naam: "Hospitality vaktaal & examentraining",
                            modules: [
                                {
                                    id: "3414a-gastvrijheid-verlenen-oefenapp",
                                    titel: "Hospitality Vaktaal & Oefentraining",
                                    type: "Vaktaal & examentraining",
                                    duur: "60–90 minuten",
                                    beschrijving: "Oefen hospitality-vaktaal, begrippen, flashcards, praktijksituaties en gemengde examenvragen.",
                                    bestand: "modules/hospitality/leerjaar-1/periode-1/gastvrijheid-verlenen/3414a-gastvrijheid-verlenen-oefenapp.html",
                                    beschikbaar: true
                                }
                            ]
                        },
                        {
                            id: "gastvrijheid-in-actie",
                            naam: "Gastvrijheid in Actie",
                            modules: [
                                {
                                    id: "gastvrijheid-in-actie-fase-1",
                                    titel: "Gastvrijheid in Actie – Jaarproject Fase 1",
                                    type: "Jaarproject – Fase 1",
                                    duur: "Wekelijks bijwerken",
                                    beschrijving: "Werk dit jaarproject iedere week bij en verzamel informatie, observaties, interviews, foto’s en ander bewijs op je werk of leerbedrijf.",
                                    bestand: "modules/hospitality/leerjaar-1/periode-1/gastvrijheid-in-actie/gastvrijheid-in-actie-fase-1.html",
                                    actieLabel: "Bekijk Fase 1",
                                    beschikbaar: true
                                }
                            ]
                        },
                        {
                            id: "les-2-gasttypen-guest-journey",
                            naam: "Les 2 – Gasttypen en Guest Journey",
                            modules: [
                                {
                                    id: "hospitality-les-2-gasttypen-guest-journey",
                                    titel: "Les 2 – Gasttypen en Guest Journey",
                                    type: "Interactieve hospitalityles",
                                    duur: "45–60 minuten",
                                    beschrijving: "Leer gasttypen en hun behoeften herkennen, ontdek de vijf fases van de Guest Journey en oefen hoe je op ieder moment passend en gastvrij handelt.",
                                    bestand: "modules/hospitality/leerjaar-1/periode-1/les-2-gasttypen-guest-journey/hospitality-les-2-gasttypen-guest-journey.html",
                                    actieLabel: "Start les 2",
                                    beschikbaar: true
                                }
                            ]
                        },
                        {
                            id: "les-3-safety-scan",
                            naam: "Les 3 – Safety Scan",
                            modules: [
                                {
                                    id: "hospitality-les-3-safety-scan",
                                    titel: "Les 3 – Hospitality Safety Scan",
                                    type: "Interactieve veldonderzoeksopdracht",
                                    duur: "Veldonderzoek en lespresentatie",
                                    beschrijving: "Voer bij een bedrijf een Safety Scan uit, verzamel observaties en bewijs en verwerk de belangrijkste Safety Case in een pitch en presentatie in de les.",
                                    bestand: "modules/hospitality/leerjaar-1/periode-1/les-3-safety-scan/hospitality-les-3-safety-scan.html",
                                    actieLabel: "Start Safety Scan",
                                    beschikbaar: true
                                }
                            ]
                        }
                    ]
                },
                2: {
                    themas: [
                        {
                            id: "hospitality-vaktaal",
                            naam: "Hospitality vaktaal",
                            modules: [
                                {
                                    id: "hospitality-p2-woordtrainer-80-begrippen",
                                    titel: "Hospitality Woordtrainer – Periode 2",
                                    type: "Woordtrainer",
                                    duur: "45–60 minuten",
                                    beschrijving: "Leer en oefen 80 hospitalitybegrippen met een woordenlijst, flashcards, praktijkvragen en slimme herhaling.",
                                    bestand: "modules/hospitality/leerjaar-1/periode-2/hospitality-vaktaal/hospitality-p2-woordtrainer-80-begrippen.html",
                                    beschikbaar: true
                                }
                            ]
                        }
                    ]
                }
            }, [createEindtoetsOnderdeel()]),
            createLeerjaar(2, [5, 6], {}, [createEindexamenOnderdeel()])
        ]),
        createOpleiding("burgerschap", "Burgerschap", [
            createLeerjaar(1, [1, 2, 3, 4]),
            createLeerjaar(2, [1, 2, 3, 4])
        ]),
        createOpleiding("rekenen", "Rekenen", [], [
            {
                id: "financieel",
                naam: "Financieel",
                beschrijving: "Oefen financiële rekenvaardigheden in praktische situaties.",
                themas: [
                    {
                        id: "inkoopprijs-en-rendement",
                        naam: "Inkoopprijs en rendement",
                        modules: [
                            {
                                id: "gecorrigeerde-inkoopprijs-oefenmodule",
                                titel: "Oefenmodule – Gecorrigeerde inkoopprijs",
                                type: "Oefenmodule",
                                duur: "20–30 minuten",
                                beschrijving: "Leer stap voor stap berekenen wat het bruikbare product werkelijk kost.",
                                bestand: "modules/rekenen/financieel/inkoopprijs-en-rendement/gecorrigeerde-inkoopprijs-oefenmodule.html",
                                beschikbaar: true
                            },
                            {
                                id: "gecorrigeerde-inkoopprijs-niveau-3-acht-oefenvragen",
                                titel: "Niveau 3 – Gecorrigeerde inkoopprijs",
                                type: "Oefenvragen",
                                duur: "15–20 minuten",
                                beschrijving: "Oefen met acht steeds moeilijkere sommen over inkoopprijs, rendement en bruikbaar gewicht.",
                                bestand: "modules/rekenen/financieel/inkoopprijs-en-rendement/gecorrigeerde-inkoopprijs-niveau-3-acht-oefenvragen.html",
                                beschikbaar: true
                            }
                        ]
                    }
                ]
            }
        ]),
        createOpleiding("nederlands", "Nederlands", [])
    ]
};

function createLeerjaar(nummer, periodeNummers, periodeInhoud = {}, specialeOnderdelen = []) {
    return {
        id: `leerjaar-${nummer}`,
        naam: `Leerjaar ${nummer}`,
        periodes: periodeNummers.map(periodeNummer => ({
            id: `periode-${periodeNummer}`,
            naam: `Periode ${periodeNummer}`,
            themas: periodeInhoud[periodeNummer]?.themas || []
        })),
        specialeOnderdelen
    };
}

function createStageZoekenThema() {
    return {
        id: "stage-zoeken",
        naam: "Stage zoeken",
        modules: [
            {
                id: "svo-stage-navigator-v6-2",
                titel: "SVO Stage Navigator",
                type: "Interactieve stagezoekhulp",
                duur: "Te gebruiken in periode 1 en 2",
                beschrijving: "Een stap-voor-stap stagezoekhulp voor BOL leerjaar 1. Zoek leerbedrijven, bereid sollicitaties voor, regel je BPVO en bewaar je voortgang in de browser.",
                bestand: "modules/bol-allround-food-expert/leerjaar-1/stage-zoeken/svo-stage-navigator-v6-2.html",
                actieLabel: "Start stagezoekhulp",
                beschikbaar: true
            }
        ]
    };
}

function createEindtoetsOnderdeel() {
    return {
        id: "eindtoets-proeve-van-bekwaamheid",
        naam: "Eindtoets & Proeve van bekwaamheid",
        beschrijving: "Oefenmodules, voorbereiding en informatie voor de eindtoets en proeve van bekwaamheid van leerjaar 1.",
        themas: []
    };
}

function createEindexamenOnderdeel() {
    return {
        id: "eindexamen-proeven-van-bekwaamheid",
        naam: "Eindexamen & Proeven van bekwaamheid",
        beschrijving: "Oefenmodules, voorbereiding en informatie voor het eindexamen en de proeven van bekwaamheid van leerjaar 2.",
        themas: []
    };
}

function createWarmeBereidingstechniekenOnderdeel() {
    return {
        id: "warme-bereidingstechnieken",
        naam: "Warme bereidingstechnieken",
        beschrijving: "Leer en oefen warme bereidingstechnieken voor vlees, vis en AGF.",
        themas: [
            {
                id: "warme-bereidingstechnieken",
                naam: "Warme bereidingstechnieken",
                modules: [
                    {
                        id: "leermodule-warme-bereidingstechnieken",
                        titel: "Leermodule Warme Bereidingstechnieken",
                        type: "Leermodule",
                        duur: "60–90 minuten",
                        beschrijving: "Leer warme bereidingstechnieken begrijpen, oefenen en toepassen met theorie, flashcards, quiz en oefenexamen.",
                        bestand: "modules/gedeeld/food/warme-bereidingstechnieken/leermodule-warme-bereidingstechnieken.html",
                        beschikbaar: true
                    }
                ]
            }
        ]
    };
}

function createOpleiding(id, naam, leerjaren, onderdelen = []) {
    return { id, naam, leerjaren, onderdelen };
}

const app = document.getElementById("app");
const breadcrumb = document.getElementById("breadcrumb");

function getRouteParts() {
    return window.location.hash
        .replace(/^#\/?/, "")
        .split("/")
        .filter(Boolean)
        .map(part => decodeURIComponent(part));
}

function routeTo(parts) {
    return parts.length ? `#/${parts.map(encodeURIComponent).join("/")}` : "#";
}

function findById(items, id) {
    return items.find(item => item.id === id);
}

function renderHeader(title, intro, backRoute) {
    return `
        <div class="view-header">
            <div>
                <h1>${title}</h1>
                <p class="view-intro">${intro}</p>
            </div>
            ${backRoute === null ? "" : `<a class="back-button" href="${routeTo(backRoute)}">Terug</a>`}
        </div>
    `;
}

function renderCards(items, parentRoute) {
    return `
        <section class="card-grid" aria-label="Keuzemogelijkheden">
            ${items.map(item => `
                <a class="navigation-card" href="${routeTo([...parentRoute, item.id])}">
                    <span>${item.naam}</span>
                </a>
            `).join("")}
        </section>
    `;
}

function renderOpleidingOverview(opleiding) {
    const overzichtLabel = opleiding.leerjaren.length
        ? "Leerjaren en onderdelen"
        : "Onderdelen";

    return `
        <section class="card-grid" aria-label="${overzichtLabel}">
            ${opleiding.leerjaren.map(leerjaar => `
                <a class="navigation-card" href="${routeTo([opleiding.id, leerjaar.id])}">
                    <span>${leerjaar.naam}</span>
                </a>
            `).join("")}
            ${opleiding.onderdelen.map(onderdeel => `
                <a class="navigation-card special-card" href="${routeTo([opleiding.id, "onderdeel", onderdeel.id])}">
                    <span class="special-card-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" focusable="false"><path d="M6 2.75h12v18.5H6zM8.5 6h7M9 10h.01M12 10h.01M15 10h.01M9 14h.01M12 14h.01M15 14h.01M9 18h.01M12 18h.01M15 18h.01"/></svg>
                    </span>
                    <span class="special-card-content">
                        <strong>${onderdeel.naam}</strong>
                        <small>${onderdeel.beschrijving}</small>
                    </span>
                </a>
            `).join("")}
        </section>
    `;
}

function renderLeerjaarOverview(leerjaar, parentRoute) {
    return `
        <section class="card-grid" aria-label="Perioden en toets- en examenonderdelen">
            ${leerjaar.periodes.map(periode => `
                <a class="navigation-card" href="${routeTo([...parentRoute, periode.id])}">
                    <span>${periode.naam}</span>
                </a>
            `).join("")}
            ${leerjaar.specialeOnderdelen.map(onderdeel => `
                <a class="navigation-card special-card" href="${routeTo([...parentRoute, "speciaal", onderdeel.id])}">
                    <span class="special-card-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" focusable="false"><path d="M7 3.75h7l3 3V20.25H7zM14 3.75v3h3M9.5 11h5M9.5 14.5h5"/></svg>
                    </span>
                    <span class="special-card-content">
                        <strong>${onderdeel.naam}</strong>
                        <small>${onderdeel.beschrijving}</small>
                    </span>
                </a>
            `).join("")}
        </section>
    `;
}

function renderEmptyState() {
    return `
        <section class="empty-state">
            <h2>Nog geen modules</h2>
            <p>Voor deze periode zijn nog geen oefenmodules beschikbaar.</p>
        </section>
    `;
}

function renderSpecialEmptyState() {
    return `
        <section class="empty-state">
            <h2>Nog geen modules</h2>
            <p>Voor dit toets- en examenonderdeel zijn nog geen oefenmodules beschikbaar.</p>
        </section>
    `;
}

function renderOpleidingEmptyState() {
    return `
        <section class="empty-state">
            <h2>Nog geen modules</h2>
            <p>Voor deze opleiding zijn nog geen oefenmodules beschikbaar.</p>
        </section>
    `;
}

function renderBreadcrumb(items) {
    if (!items.length) {
        breadcrumb.hidden = true;
        breadcrumb.innerHTML = "";
        return;
    }

    breadcrumb.hidden = false;
    breadcrumb.innerHTML = `
        <ol>
            ${items.map((item, index) => {
                const isCurrent = index === items.length - 1;
                return `<li>${isCurrent
                    ? `<span aria-current="page">${item.label}</span>`
                    : `<a href="${routeTo(item.route)}">${item.label}</a>`
                }</li>`;
            }).join("")}
        </ol>
    `;
}

function renderModuleCard(module) {
    const isAfgerond = module.compactNaAfronding && isModuleAfgerond(module.opslagSleutel);
    const cardClass = isAfgerond ? "module-card module-card-compact" : "module-card";
    const statusLabel = isAfgerond ? "Ingevuld" : "Beschikbaar";
    return `
        <article class="${cardClass}">
            <p class="module-type">${module.type}</p>
            <h3>${module.titel}</h3>
            <p class="module-description">${module.beschrijving}</p>
            <div class="module-meta">
                <span>${module.type}</span>
                <span>${module.duur}</span>
            </div>
            <p class="module-status"><span aria-hidden="true">✓</span> ${statusLabel}</p>
            <a class="start-button" href="${module.bestand}">${module.actieLabel || "Start oefening"}</a>
        </article>
    `;
}

function isModuleAfgerond(opslagSleutel) {
    if (!opslagSleutel) return false;
    try {
        const opgeslagenStatus = JSON.parse(localStorage.getItem(opslagSleutel));
        return opgeslagenStatus?.completed === true;
    } catch (_) {
        return false;
    }
}

function renderModuleOverview(themas) {
    const gevuldeThemas = themas
        .map(thema => ({
            ...thema,
            modules: thema.modules.filter(module => module.beschikbaar)
        }))
        .filter(thema => thema.modules.length);

    if (!gevuldeThemas.length) return renderEmptyState();

    return `
        <div class="module-overview">
            ${gevuldeThemas.map(thema => `
                <section class="module-section" aria-labelledby="thema-${thema.id}">
                    <h2 id="thema-${thema.id}">${thema.naam}</h2>
                    <div class="module-grid">
                        ${thema.modules.map(renderModuleCard).join("")}
                    </div>
                </section>
            `).join("")}
        </div>
    `;
}

function render() {
    const parts = getRouteParts();
    const [opleidingId, leerjaarIdOfRouteType, routeTypeOfPeriodeId, speciaalOnderdeelId] = parts;
    const opleiding = findById(academyData.opleidingen, opleidingId);
    const isOpleidingOnderdeelRoute = leerjaarIdOfRouteType === "onderdeel";
    const opleidingOnderdeel = opleiding && isOpleidingOnderdeelRoute
        ? findById(opleiding.onderdelen, routeTypeOfPeriodeId)
        : undefined;
    const leerjaarId = isOpleidingOnderdeelRoute ? undefined : leerjaarIdOfRouteType;
    const leerjaar = opleiding && findById(opleiding.leerjaren, leerjaarId);
    const isSpecialeRoute = routeTypeOfPeriodeId === "speciaal";
    const periode = leerjaar && !isSpecialeRoute
        ? findById(leerjaar.periodes, routeTypeOfPeriodeId)
        : undefined;
    const speciaalOnderdeel = leerjaar && isSpecialeRoute
        ? findById(leerjaar.specialeOnderdelen, speciaalOnderdeelId)
        : undefined;

    if (!parts.length) {
        renderBreadcrumb([]);
        app.innerHTML = renderHeader(
            "Welkom bij SVO Academy Oefenplein",
            "Ben je nieuw in de klas? Begin dan met de beroepsafspraken. Kies anders je opleiding om verder te gaan.",
            null
        ) + renderModuleOverview(academyData.algemeneThemas) + `
            <section class="module-section" aria-labelledby="opleidingen-heading">
                <h2 id="opleidingen-heading">Kies je opleiding</h2>
                ${renderCards(academyData.opleidingen, [])}
            </section>
        `;
        return;
    }

    const isOngeldigeOpleidingOnderdeelRoute = isOpleidingOnderdeelRoute
        && (!opleidingOnderdeel || parts.length !== 3);
    const isOngeldigeSpecialeRoute = !isOpleidingOnderdeelRoute && isSpecialeRoute
        && (!speciaalOnderdeel || parts.length !== 4);
    const isOngeldigePeriodeRoute = !isOpleidingOnderdeelRoute && routeTypeOfPeriodeId
        && !isSpecialeRoute
        && (!periode || parts.length !== 3);

    if (!opleiding || (leerjaarId && !leerjaar) || isOngeldigeOpleidingOnderdeelRoute || isOngeldigeSpecialeRoute || isOngeldigePeriodeRoute || parts.length > 4) {
        window.location.replace(routeTo([]));
        return;
    }

    const crumbs = [{ label: opleiding.naam, route: [opleiding.id] }];

    if (!leerjaarIdOfRouteType) {
        const hasLeerjaren = opleiding.leerjaren.length > 0;
        const hasOnderdelen = opleiding.onderdelen.length > 0;
        const pageTitle = hasLeerjaren
            ? (hasOnderdelen ? "Kies je leerjaar of onderdeel" : "Kies je leerjaar")
            : (hasOnderdelen ? "Kies een onderdeel" : opleiding.naam);
        const overview = hasLeerjaren || hasOnderdelen
            ? renderOpleidingOverview(opleiding)
            : renderOpleidingEmptyState();

        renderBreadcrumb(crumbs);
        app.innerHTML = renderHeader(
            pageTitle,
            opleiding.naam,
            []
        ) + overview;
        return;
    }

    if (isOpleidingOnderdeelRoute) {
        crumbs.push({
            label: opleidingOnderdeel.naam,
            route: [opleiding.id, "onderdeel", opleidingOnderdeel.id]
        });
        renderBreadcrumb(crumbs);
        app.innerHTML = renderHeader(
            opleidingOnderdeel.naam,
            opleidingOnderdeel.beschrijving,
            [opleiding.id]
        ) + renderModuleOverview(opleidingOnderdeel.themas);
        return;
    }

    crumbs.push({ label: leerjaar.naam, route: [opleiding.id, leerjaar.id] });

    if (!routeTypeOfPeriodeId) {
        renderBreadcrumb(crumbs);
        app.innerHTML = renderHeader(
            "Kies je periode",
            `${opleiding.naam} · ${leerjaar.naam}`,
            [opleiding.id]
        ) + renderLeerjaarOverview(leerjaar, [opleiding.id, leerjaar.id]);
        return;
    }

    if (isSpecialeRoute) {
        const specialCrumbs = [
            { label: " Academy Oefenplein", route: [] },
            { label: opleiding.naam, route: [opleiding.id] },
            { label: leerjaar.naam, route: [opleiding.id, leerjaar.id] },
            { label: speciaalOnderdeel.naam, route: [...parts] }
        ];
        renderBreadcrumb(specialCrumbs);
        app.innerHTML = renderHeader(
            speciaalOnderdeel.naam,
            speciaalOnderdeel.beschrijving,
            [opleiding.id, leerjaar.id]
        ) + (speciaalOnderdeel.themas.length
            ? renderModuleOverview(speciaalOnderdeel.themas)
            : renderSpecialEmptyState());
        return;
    }

    crumbs.push({
        label: periode.naam,
        route: [opleiding.id, leerjaar.id, periode.id]
    });
    renderBreadcrumb(crumbs);
    app.innerHTML = renderHeader(
        "Oefeningen voor deze periode",
        `${opleiding.naam} · ${leerjaar.naam} · ${periode.naam}`,
        [opleiding.id, leerjaar.id]
    ) + renderModuleOverview(periode.themas);
}

window.addEventListener("hashchange", render);
window.addEventListener("pageshow", event => {
    if (event.persisted) render();
});
render();
