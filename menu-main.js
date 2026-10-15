/* =========================================================
   MENÚ - LA MIMBRE RESTAURANTE
   Archivo: menu-main.js
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Registra en consola el plato seleccionado
    const dishCards = document.querySelectorAll('.dish-card');

    dishCards.forEach(card => {
        card.addEventListener('click', () => {
            const dishName = card.querySelector('.dish-name').innerText;
            console.log(`Plato seleccionado: ${dishName}`);
        });
    });

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