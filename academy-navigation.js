"use strict";

(() => {
    const script = document.currentScript;
    const returnHref = script?.dataset.academyReturnHref;
    if (!script || !returnHref || document.querySelector("[data-academy-return]")) return;

    if (!document.getElementById("academy-return-styles")) {
        const style = document.createElement("style");
        style.id = "academy-return-styles";
        style.textContent = `
            [data-academy-navigation] {
                box-sizing: border-box;
                position: relative;
                z-index: 10000;
                display: flex;
                align-items: center;
                padding: 10px clamp(12px, 4vw, 48px);
                background: #171419;
                border-bottom: 1px solid #45384a;
                font-family: Arial, Helvetica, sans-serif;
            }
            [data-academy-return] {
                box-sizing: border-box;
                display: inline-flex;
                align-items: center;
                min-height: 44px;
                padding: 0 16px;
                border: 1px solid #bd78c8;
                border-radius: 12px;
                background: #2a222d;
                color: #fff;
                font-size: 16px;
                font-weight: 800;
                line-height: 1.2;
                text-decoration: none;
            }
            [data-academy-return]:hover { background: #3b2b40; }
            [data-academy-return]:focus-visible {
                outline: 3px solid #f4c95d;
                outline-offset: 3px;
            }
            @media print { [data-academy-navigation] { display: none !important; } }
        `;
        document.head.append(style);
    }

    const navigation = document.createElement("nav");
    navigation.dataset.academyNavigation = "true";
    navigation.setAttribute("aria-label", "Navigatie naar SVO Academy");

    const link = document.createElement("a");
    link.dataset.academyReturn = "true";
    link.href = returnHref;
    link.textContent = script.dataset.academyReturnLabel || "← Terug naar SVO Academy";

    navigation.append(link);
    document.body.prepend(navigation);
})();
