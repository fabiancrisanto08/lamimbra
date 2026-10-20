<<<<<<< HEAD
 // 1. Pide el archivo data.json y, cuando llega, pinta los platos
function cargarMenu() {
    fetch('data.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            pintarPlatos(datos.entrantes, 'entrantes');
            pintarPlatos(datos.principal, 'principal');
            pintarPlatos(datos.postres, 'postres');
            pintarPlatos(datos.bebidas, 'bebidas');

            activarClicks();
        })
        .catch(error => console.error('Error al cargar data.json:', error));
}
// 2. Recibe una lista de platos y el id del contenedor donde van
function pintarPlatos(platos, idContenedor) {
    const contenedor = document.getElementById(idContenedor);

    platos.forEach(plato => {
        // Si el plato tiene subtítulo, creamos el <span>; si no, queda vacío
        let subtitulo = '';
        if (plato.subtitulo !== '') {
            subtitulo = `<span class="subtitle">${plato.subtitulo}</span>`;
        }

=======
/* =========================================================
   LA MIMBRE RESTAURANTE - LÓGICA DE MENÚ Y CARGA JSON
   Archivo: menu-main.js
   ========================================================= */

// ------------------------------------------------------
// 1. CARGA DINÁMICA DE MENÚ DESDE DATA.JSON
// ------------------------------------------------------

function cargarMenu() {
    fetch('data.json')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error(`Error en la petición HTTP: ${respuesta.status}`);
            }
            return respuesta.json();
        })
        .then(datos => {
            // Relaciona los arrays del JSON con los IDs del HTML
            if (datos.entrantes) pintarPlatos(datos.entrantes, 'entrantes');
            if (datos.principal) pintarPlatos(datos.principal, 'principal');
            if (datos.postres) pintarPlatos(datos.postres, 'postres');
            if (datos.bebidas) pintarPlatos(datos.bebidas, 'bebidas');
        })
        .catch(error => {
            console.error('Error al cargar el archivo data.json:', error);
        });
}

function pintarPlatos(platos, idContenedor) {
    const contenedor = document.getElementById(idContenedor);

    // Evita errores si el contenedor no existe en el DOM
    if (!contenedor) return;

    // Limpia el contenido antes de renderizar
    contenedor.innerHTML = '';

    platos.forEach(plato => {
        // Valida si existe un subtítulo
        let subtituloHTML = '';
        if (plato.subtitulo && plato.subtitulo.trim() !== '') {
            subtituloHTML = `<span class="subtitle">${plato.subtitulo}</span>`;
        }

        // Genera la tarjeta HTML
>>>>>>> 654ee534b3bdd2e9afc0c7994f20a0e3d307619b
        contenedor.innerHTML += `
            <article class="dish-card">
                <div class="dish-img-wrapper">
                    <img src="${plato.imagen}" alt="${plato.nombre}" class="dish-img">
                </div>
                <div class="dish-info">
<<<<<<< HEAD
                    <h3 class="dish-name">${plato.nombre} ${subtitulo}</h3>
=======
                    <h3 class="dish-name">${plato.nombre} ${subtituloHTML}</h3>
>>>>>>> 654ee534b3bdd2e9afc0c7994f20a0e3d307619b
                </div>
            </article>
        `;
    });
}
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    cargarMenu();

    // Animación de entrada con GSAP protegida
=======

// ------------------------------------------------------
// 2. INICIALIZACIÓN Y EVENTOS GENERALES
// ------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

    // Ejecuta la carga inicial de los platillos
    cargarMenu();

    // Animaciones GSAP de entrada (si la librería está cargada)
>>>>>>> 654ee534b3bdd2e9afc0c7994f20a0e3d307619b
    if (typeof gsap !== 'undefined') {
        gsap.from('.menu-section', {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }
<<<<<<< HEAD
=======

    // ------------------------------------------------------
    // 3. MENÚ HAMBURGUESA
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

        navLinks.querySelectorAll("a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Abrir menú");
            });
        });

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
    // 4. AÑO AUTOMÁTICO EN EL FOOTER
    // ------------------------------------------------------
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }
>>>>>>> 654ee534b3bdd2e9afc0c7994f20a0e3d307619b
});