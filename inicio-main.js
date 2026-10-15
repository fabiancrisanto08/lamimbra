/* =========================================================
   LA MIMBRE - INTERACTIVIDAD Y NAVEGACIÓN
   Archivo: inicio-main.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // 1. MENÚ HAMBURGUESA UNIFICADO
    // ======================================================
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            // Cambia el icono entre ☰ y ✕
            if (navLinks.classList.contains("active")) {
                menuToggle.textContent = "✕";
                menuToggle.setAttribute("aria-label", "Cerrar menú");
            } else {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Abrir menú");
            }
        });

        // Cierra el menú al hacer clic en cualquier enlace
        navLinks.querySelectorAll("a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Abrir menú");
            });
        });
    }

    // ======================================================
    // 2. AÑO AUTOMÁTICO DEL FOOTER
    // ======================================================
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    // ======================================================
    // 3. ANIMACIÓN SUAVE AL HACER SCROLL (OPCIONAL)
    // ======================================================
    const elementos = document.querySelectorAll(
        ".contenido-centro, .galeria-platos, .equipo-contenido, .cita, .historia"
    );

    if (elementos.length > 0) {
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

        elementos.forEach((elemento) => {
            elemento.classList.add("aparecer");
            observador.observe(elemento);
        });
    }

});