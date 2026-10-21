/* =========================================================
   CONTACTO - RESTAURANTE LA MIMBRE
   Archivo: contacto-main.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Indicar que JS se ha ejecutado correctamente
  document.documentElement.classList.add("js-activo");

  // 2. SCROLL REVEAL / OBSERVADOR DE INTERSECCIÓN
  const elementosRevelar = document.querySelectorAll(".revelar");

  if ("IntersectionObserver" in window && elementosRevelar.length > 0) {
    const opcionesObservador = {
      root: null,
      rootMargin: "0px 0px -20px 0px", // Detecta el elemento justo antes de entrar completamente
      threshold: 0.01                   // Dispara la animación con solo un 1% visible
    };

    const observador = new IntersectionObserver((entradas, obs) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("activo");
          obs.unobserve(entrada.target); // Evita re-animar elementos ya revelados
        }
      });
    }, opcionesObservador);

    elementosRevelar.forEach((elemento) => {
      // Si el elemento ya está dentro de la ventana al cargar, lo activamos con un leve retardo
      const rect = elemento.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        elemento.classList.add("activo");
      } else {
        observador.observe(elemento);
      }
    });
  } else {
    // Si no hay soporte para IntersectionObserver, mostramos todo
    elementosRevelar.forEach((elemento) => {
      elemento.classList.add("activo");
    });
  }

  // 3. DESPLEGABLE DE RUTAS (ACORDEÓN)
  const botonesRuta = document.querySelectorAll(".ruta-titulo");

  botonesRuta.forEach((boton) => {
    boton.addEventListener("click", () => {
      const contenido = boton.nextElementSibling;
      const abierto = boton.getAttribute("aria-expanded") === "true";

      boton.setAttribute("aria-expanded", String(!abierto));

      if (abierto) {
        contenido.style.maxHeight = "0";
        contenido.style.opacity = "0";
      } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
        contenido.style.opacity = "1";
      }
    });
  });
});