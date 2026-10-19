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

        contenedor.innerHTML += `
            <article class="dish-card">
                <div class="dish-img-wrapper">
                    <img src="${plato.imagen}" alt="${plato.nombre}" class="dish-img">
                </div>
                <div class="dish-info">
                    <h3 class="dish-name">${plato.nombre} ${subtitulo}</h3>
                </div>
            </article>
        `;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    cargarMenu();

    // Animación de entrada con GSAP protegida
    if (typeof gsap !== 'undefined') {
        gsap.from('.menu-section', {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }
});