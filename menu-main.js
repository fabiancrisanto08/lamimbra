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
});