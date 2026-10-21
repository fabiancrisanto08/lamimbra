/* =========================================================
   CONTROL GLOBAL DE AUDIO PERSISTENTE (SIN CORTES)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('mi-audio');
    const boton = document.getElementById('audio-btn');
    
    if (!audio || !boton) return;

    // 1. Cargar el estado guardado al iniciar la página
    const savedTime = localStorage.getItem('audio_current_time');
    const isPlaying = localStorage.getItem('audio_is_playing') === 'true';

    if (savedTime !== null) {
        audio.currentTime = parseFloat(savedTime);
    }

    // Configurar estado inicial y el icono del botón
    if (isPlaying) {
        audio.play().catch(() => {
            localStorage.setItem('audio_is_playing', 'false');
            boton.textContent = '🔊';
        });
        boton.textContent = '🔇';
    } else {
        audio.pause();
        boton.textContent = '🔊';
    }

    // 2. Guardar continuamente el tiempo de reproducción en localStorage
    audio.addEventListener('timeupdate', () => {
        if (!audio.paused) {
            localStorage.setItem('audio_current_time', audio.currentTime);
        }
    });

    // 3. Función para alternar play/pause de forma global
    function toggleAudio() {
        if (audio.paused) {
            audio.play().then(() => {
                boton.textContent = '🔇';
                localStorage.setItem('audio_is_playing', 'true');
            }).catch(err => console.log("Error al reproducir:", err));
        } else {
            audio.pause();
            boton.textContent = '🔊';
            localStorage.setItem('audio_is_playing', 'false');
        }
    }

    boton.addEventListener('click', toggleAudio);

    // 4. Guardar la posición exacta antes de hacer clic en cualquier enlace interno
    document.querySelectorAll('a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            const href = enlace.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('tel') && !href.startsWith('mailto')) {
                localStorage.setItem('audio_current_time', audio.currentTime);
                localStorage.setItem('audio_is_playing', (!audio.paused).toString());
            }
        });
    });

    // 5. Sincronizar en tiempo real entre pestañas o cambios
    window.addEventListener('storage', (event) => {
        if (event.key === 'audio_is_playing') {
            if (event.newValue === 'true' && audio.paused) {
                audio.play().catch(() => {});
                boton.textContent = '🔇';
            } else if (event.newValue === 'false' && !audio.paused) {
                audio.pause();
                boton.textContent = '🔊';
            }
        }
        if (event.key === 'audio_current_time') {
            const timeDiff = Math.abs(audio.currentTime - parseFloat(event.newValue));
            if (timeDiff > 1) {
                audio.currentTime = parseFloat(event.newValue);
            }
        }
    });
});