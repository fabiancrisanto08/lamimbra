/* =========================================================
   LA MIMBRE RESTAURANTE - MODO OSCURO Y MULTI-IDIOMA
   Archivo: theme-lang.js
   ========================================================= */

const translations = {
    es: {
        "nav.home": "INICIO",
        "nav.menu": "MENÚ",
        "nav.about": "NOSOTROS",
        "nav.reservations": "RESERVA",
        "nav.contact": "CONTACTO",
        "tagline": "Desde 1890 en la Alhambra dando refrigerios a los caminantes",
        "menu.title": "MENÚ",
        "menu.starters": "Entrantes",
        "menu.mains": "Principal",
        "menu.desserts": "Postres",
        "menu.drinks": "Bebidas",
        "reserve.title": "RESERVAS",
        "reserve.submit": "Solicitar reserva"
    },
    en: {
        "nav.home": "HOME",
        "nav.menu": "MENU",
        "nav.about": "ABOUT US",
        "nav.reservations": "BOOKINGS",
        "nav.contact": "CONTACT",
        "tagline": "Since 1890 in the Alhambra offering refreshments to travelers",
        "menu.title": "MENU",
        "menu.starters": "Starters",
        "menu.mains": "Main Courses",
        "menu.desserts": "Desserts",
        "menu.drinks": "Drinks",
        "reserve.title": "BOOKINGS",
        "reserve.submit": "Request Reservation"
    }
};

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------------------
    // 1. MODO OSCURO (DARK MODE)
    // ------------------------------------------------------
    const themeToggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) themeToggle.textContent = "☀️";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const esOscuro = document.body.classList.contains("dark-mode");
            
            themeToggle.textContent = esOscuro ? "☀️" : "🌙";
            localStorage.setItem("theme", esOscuro ? "dark" : "light");
        });
    }

    // ------------------------------------------------------
    // 2. SISTEMA MULTI-IDIOMA
    // ------------------------------------------------------
    const langEsBtn = document.getElementById("langEs");
    const langEnBtn = document.getElementById("langEn");
    const currentLang = localStorage.getItem("lang") || "es";

    const cambiarIdioma = (idioma) => {
        document.querySelectorAll("[data-i18n]").forEach(elemento => {
            const clave = elemento.getAttribute("data-i18n");
            if (translations[idioma] && translations[idioma][clave]) {
                elemento.textContent = translations[idioma][clave];
            }
        });

        if (idioma === "es") {
            if (langEsBtn) langEsBtn.classList.add("active");
            if (langEnBtn) langEnBtn.classList.remove("active");
        } else {
            if (langEnBtn) langEnBtn.classList.add("active");
            if (langEsBtn) langEsBtn.classList.remove("active");
        }

        localStorage.setItem("lang", idioma);
    };

    cambiarIdioma(currentLang);

    if (langEsBtn) langEsBtn.addEventListener("click", () => cambiarIdioma("es"));
    if (langEnBtn) langEnBtn.addEventListener("click", () => cambiarIdioma("en"));
});