/* =========================================================
   CONTACTO - RESTAURANTE LA MIMBRE
   contacto-main.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
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