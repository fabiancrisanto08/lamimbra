/* =========================================================
   LA MIMBRE - INTERACTIVIDAD Y NAVEGACIÓN UNIFICADA
   Archivo: inicio-main.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------------------
    // 1. MENÚ HAMBURGUESA UNIFICADO
    // ------------------------------------------------------
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", (evento) => {
            evento.stopPropagation();
            const estaAbierto = navLinks.classList.contains("active");

            if (estaAbierto) {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Abrir menú");
            } else {
                navLinks.classList.add("active");
                menuToggle.textContent = "✕";
                menuToggle.setAttribute("aria-label", "Cerrar menú");
            }
        });

        // CERRAR EL MENÚ AL HACER CLIC EN UN ENLACE
        navLinks.querySelectorAll("a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Abrir menú");
            });
        });

        // CERRAR EL MENÚ AL HACER CLIC FUERA DE ÉL
        document.addEventListener("click", (evento) => {
            if (!menuToggle.contains(evento.target) && !navLinks.contains(evento.target)) {
                if (navLinks.classList.contains("active")) {
                    navLinks.classList.remove("active");
                    menuToggle.textContent = "☰";
                    menuToggle.setAttribute("aria-label", "Abrir menú");
                }
            }
        });
    }

    // ------------------------------------------------------
    // 2. AÑO AUTOMÁTICO EN EL FOOTER
    // ------------------------------------------------------
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    // ------------------------------------------------------
    // 3. ANIMACIONES EN SCROLL SUAVE
    // ------------------------------------------------------
    const elementosAparecer = document.querySelectorAll(
        ".contenido-centro, .galeria-platos, .equipo-contenido, .cita, .historia"
    );

    if (elementosAparecer.length > 0) {
        const observador = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("mostrar");
                        observador.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        elementosAparecer.forEach((elemento) => {
            elemento.classList.add("aparecer");
            observador.observe(elemento);
        });
    }

});