/* =========================================================
   MENÚ - LA MIMBRE RESTAURANTE
   Archivo: menu-main.js
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Registra en consola el plato seleccionado al hacer clic
    const dishCards = document.querySelectorAll('.dish-card');

    dishCards.forEach(card => {
        card.addEventListener('click', () => {
            const dishName = card.querySelector('.dish-name').innerText;
            console.log(`Plato seleccionado: ${dishName}`);
        });
    });

    // Animación de entrada GSAP para las secciones del menú
    if (typeof gsap !== 'undefined') {
        gsap.from('.menu-section', {
            duration: 1.2,
            opacity: 0,
            y: 60,
            stagger: 0.15,
            ease: 'power3.out'
        });

        // Animación progresiva en la lista de cada tarjeta de plato
        gsap.from('.dish-card', {
            duration: 0.8,
            opacity: 0,
            x: -20,
            stagger: 0.05,
            ease: 'power2.out',
            delay: 1
        });
    }
});