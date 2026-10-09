/* =========================================================
   LA MIMBRE - INICIO
   Archivo: inicio-main.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // 1. MENÚ HAMBURGUESA
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

        // Cierra el menú después de pulsar un enlace
        navLinks.querySelectorAll("a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Abrir menú");
            });
        });
    }


    // ======================================================
    // 2. RESERVA
    // ======================================================

    const botonesReserva = document.querySelectorAll(
        'a[href="#reserva"]'
    );

    const seccionReserva = document.getElementById("reserva");

    botonesReserva.forEach((boton) => {
        boton.addEventListener("click", () => {

            if (seccionReserva) {
                seccionReserva.classList.add("visible");
            }
        });
    });


    // ======================================================
    // 3. FORMULARIO DE RESERVA
    // ======================================================

    const formReserva = document.getElementById("formReserva");
    const mensajeReserva = document.getElementById("mensajeReserva");

    if (formReserva) {

        formReserva.addEventListener("submit", (evento) => {

            // Evita que la página se recargue
            evento.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const personas = document.getElementById("personas").value;
            const fecha = document.getElementById("fecha").value;
            const hora = document.getElementById("hora").value;

            if (!nombre || !personas || !fecha || !hora) {
                mensajeReserva.textContent =
                    "Por favor, completa todos los campos.";
                return;
            }

            mensajeReserva.textContent =
                `Gracias, ${nombre}. Hemos recibido tu solicitud para ${personas} persona(s) el ${fecha} a las ${hora}.`;

            formReserva.reset();
        });
    }


    // ======================================================
    // 4. AÑO AUTOMÁTICO DEL FOOTER
    // ======================================================

    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }


    // ======================================================
    // 5. ANIMACIÓN SUAVE AL HACER SCROLL
    // ======================================================

    const elementos = document.querySelectorAll(
        ".contenido-centro, .galeria-platos, .equipo-contenido, .cita, .historia"
    );

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("mostrar");
                    observador.unobserve(entrada.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elementos.forEach((elemento) => {
        elemento.classList.add("aparecer");
        observador.observe(elemento);
    });

});

const imagen = document.querySelector(".imagen-destacada img");

if (imagen) {
    window.addEventListener("scroll", () => {
        const contenedor = imagen.parentElement;
        const posicion = contenedor.getBoundingClientRect();

        const movimiento = (window.innerHeight / 2 - posicion.top) * 0.15;

        imagen.style.transform = `translateY(${movimiento}px)`;
    });
}
const imagenHistoria = document.querySelector(".historia-imagen img");

if (imagenHistoria) {
    window.addEventListener("scroll", () => {
        const contenedor = imagenHistoria.parentElement;
        const posicion = contenedor.getBoundingClientRect();

        const movimiento =
            (window.innerHeight / 2 - posicion.top) * 0.15;

        imagenHistoria.style.transform =
            `translateY(${movimiento}px)`;
    });
}