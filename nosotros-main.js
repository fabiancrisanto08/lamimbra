/* =========================================================
   NOSOTROS - LA MIMBRE RESTAURANTE
   Archivo: nosotros-main.js (Animaciones suaves GSAP)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Comprobación de seguridad para verificar si GSAP está disponible
    if (typeof gsap === 'undefined') {
        console.warn('GSAP no está cargado. Las animaciones fueron omitidas.');
        return;
    }

    // Registrar ScrollTrigger si está presente en el documento
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // LÍNEA DE TIEMPO (TIMELINE) DE ENTADA INICIAL
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

    // 1. Desvanecimiento suave para la cabecera destacada
    tl.from('.header-tagline', {
        y: -25,
        opacity: 0,
        scale: 0.98
    })

    // 2. Animación escalonada para los bloques principales (Video + Tarjeta Intro)
    .from('.imagen-texto > *', {
        y: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9
    }, '-=0.5')

    // 3. Animación para el segundo bloque (Logo + Historia)
    .from('.texto-imagen > *', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9
    }, '-=0.6');

    // MICRO-INTERACCIÓN SUAVE AL REPRODUCIR EL VIDEO MP4
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', () => {
            gsap.fromTo(heroVideo, 
                { filter: 'blur(8px)', opacity: 0.7 },
                { filter: 'blur(0px)', opacity: 1, duration: 1.2, ease: 'power1.out' }
            );
        });
    }

    // ANIMACIÓN AL HACER HOVER EN EL MARCO DE LOGO E IMÁGENES
    const logoWrapper = document.querySelector('.logo-image-wrapper');
    if (logoWrapper) {
        logoWrapper.addEventListener('mouseenter', () => {
            gsap.to(logoWrapper, { scale: 1.03, duration: 0.3, ease: 'power1.out' });
        });
        logoWrapper.addEventListener('mouseleave', () => {
            gsap.to(logoWrapper, { scale: 1, duration: 0.3, ease: 'power1.out' });
        });
    }
});