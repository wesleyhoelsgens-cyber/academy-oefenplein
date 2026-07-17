"use strict";

const academyData = {
    opleidingen: [
        createOpleiding("traiteur", "Traiteur", [
            createLeerjaar(1, [1, 2, 3, 4]),
            createLeerjaar(2, [5, 6, 7, 8], {
                5: {
                    themas: [
                        {
                            id: "voedingskennis",
                            naam: "Voedingskennis",
                            modules: [
                                {
                                    id: "herhaling-voedingskennis",
                                    titel: "Herhaling voedingskennis",
                                    type: "Flashcardgame",
                                    duur: "10–15 minuten",
                                    beschrijving: "Oefen belangrijke begrippen over voeding, voedingsstoffen en voedingswaarde.",
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
                        }
                    ]
                }
            })
        ]),
        createOpleiding("bol-allround-food-expert", "BOL Allround Food Expert", [
            createLeerjaar(1, [1, 2, 3, 4]),
            createLeerjaar(2, [1, 2, 3, 4])
        ]),
        createOpleiding("hospitality", "Hospitality", [
            createLeerjaar(1, [1, 2, 3, 4]),
            createLeerjaar(2, [1, 2, 3, 4])
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

function createLeerjaar(nummer, periodeNummers, periodeInhoud = {}) {
    return {
        id: `leerjaar-${nummer}`,
        naam: `Leerjaar ${nummer}`,
        periodes: periodeNummers.map(periodeNummer => ({
            id: `periode-${periodeNummer}`,
            naam: `Periode ${periodeNummer}`,
            themas: periodeInhoud[periodeNummer]?.themas || []
        }))
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

function renderEmptyState() {
    return `
        <section class="empty-state">
            <h2>Nog geen modules</h2>
            <p>Voor deze periode zijn nog geen oefenmodules beschikbaar.</p>
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
    const [opleidingId, leerjaarId, periodeId] = parts;
    const opleiding = findById(academyData.opleidingen, opleidingId);
    const leerjaar = opleiding && findById(opleiding.leerjaren, leerjaarId);
    const periode = leerjaar && findById(leerjaar.periodes, periodeId);

    if (!parts.length) {
        renderBreadcrumb([]);
        app.innerHTML = renderHeader(
            "Kies je opleiding",
            "Selecteer de opleiding waarvoor je wilt oefenen.",
            null
        ) + renderCards(academyData.opleidingen, []);
        return;
    }

    if (!opleiding || (leerjaarId && !leerjaar) || (periodeId && !periode) || parts.length > 3) {
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

    if (!periodeId) {
        renderBreadcrumb(crumbs);
        app.innerHTML = renderHeader(
            "Kies je periode",
            `${opleiding.naam} · ${leerjaar.naam}`,
            [opleiding.id]
        ) + renderCards(leerjaar.periodes, [opleiding.id, leerjaar.id]);
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
