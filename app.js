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
    opleidingen: [
        createOpleiding("traiteur", "Traiteur", [
            createLeerjaar(1, [1, 2, 3, 4], {}, [createEindtoetsOnderdeel()]),
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
                                    beschrijving: "Oefen de belangrijkste begrippen uit de voedingskennis van leerjaar 1.",
                                    bestand: "modules/flashcardgame-herhaling-voedingskennis.html",
                                    beschikbaar: true
                                }
                            ]
                        },
                        {
                            id: "les-2-dieten-microbiologie-eetwensen",
                            naam: "Les 2 – Diëten, Microbiologie & Eetwensen",
                            modules: [
                                {
                                    id: "flashcards-dieten-microbiologie-eetwensen",
                                    titel: "Flashcards Diëten, Microbiologie & Eetwensen",
                                    type: "Flashcardgame",
                                    duur: "10–15 minuten",
                                    beschrijving: "Zelfstandige flashcardgame over diëten, eetwensen, microbiologie en voedselveiligheid voor mbo Traiteur leerjaar 2.",
                                    bestand: "modules/flashcards-dieten-microbiologie-eetwensen.html",
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
                                    bestand: "modules/begrippenformulier-dieten-microbiologie-eetwensen.html",
                                    beschikbaar: true
                                }
                            ]
                        }
                    ]
                }
            }, [createEindexamenOnderdeel()])
        ]),
        createOpleiding("bol-allround-food-expert", "BOL Allround Food Expert", [
            createLeerjaar(1, [1, 2, 3, 4], {}, [createEindtoetsOnderdeel()]),
            createLeerjaar(2, [1, 2, 3, 4], {}, [createEindexamenOnderdeel()])
        ]),
        createOpleiding("hospitality", "Hospitality", [
            createLeerjaar(1, [1, 2, 3, 4], {}, [createEindtoetsOnderdeel()]),
            createLeerjaar(2, [1, 2, 3, 4], {}, [createEindexamenOnderdeel()])
        ]),
        createOpleiding("burgerschap", "Burgerschap", [
            createLeerjaar(1, [1, 2, 3, 4]),
            createLeerjaar(2, [1, 2, 3, 4])
        ]),
        createOpleiding("rekenen", "Rekenen", [
            createLeerjaar(1, [1, 2, 3, 4]),
            createLeerjaar(2, [1, 2, 3, 4])
        ]),
        createOpleiding("nederlands", "Nederlands", [
            createLeerjaar(1, [1, 2, 3, 4]),
            createLeerjaar(2, [1, 2, 3, 4])
        ])
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

function createOpleiding(id, naam, leerjaren) {
    return { id, naam, leerjaren };
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
    return `
        <article class="module-card">
            <p class="module-type">${module.type}</p>
            <h3>${module.titel}</h3>
            <p class="module-description">${module.beschrijving}</p>
            <div class="module-meta">
                <span>${module.type}</span>
                <span>${module.duur}</span>
            </div>
            <p class="module-status"><span aria-hidden="true">✓</span> Beschikbaar</p>
            <a class="start-button" href="${module.bestand}">Start oefening</a>
        </article>
    `;
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
    const [opleidingId, leerjaarId, routeTypeOfPeriodeId, speciaalOnderdeelId] = parts;
    const opleiding = findById(academyData.opleidingen, opleidingId);
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
            "Kies je opleiding",
            "Selecteer de opleiding waarvoor je wilt oefenen.",
            null
        ) + renderCards(academyData.opleidingen, []);
        return;
    }

    const isOngeldigeSpecialeRoute = isSpecialeRoute
        && (!speciaalOnderdeel || parts.length !== 4);
    const isOngeldigePeriodeRoute = routeTypeOfPeriodeId
        && !isSpecialeRoute
        && (!periode || parts.length !== 3);

    if (!opleiding || (leerjaarId && !leerjaar) || isOngeldigeSpecialeRoute || isOngeldigePeriodeRoute || parts.length > 4) {
        window.location.replace(routeTo([]));
        return;
    }

    const crumbs = [{ label: opleiding.naam, route: [opleiding.id] }];

    if (!leerjaarId) {
        renderBreadcrumb(crumbs);
        app.innerHTML = renderHeader(
            "Kies je leerjaar",
            opleiding.naam,
            []
        ) + renderCards(opleiding.leerjaren, [opleiding.id]);
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
render();
