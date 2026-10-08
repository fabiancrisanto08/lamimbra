document.addEventListener('DOMContentLoaded', () => {
    // Registrar el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Selección de elementos
    const reservationForm = document.getElementById('reservationForm');
    const fechaInput = document.getElementById('fecha');
    const btnSubmit = document.getElementById('btnSubmit');
    const btnText = btnSubmit ? btnSubmit.querySelector('.btn-text') : null;
    const btnSpinner = btnSubmit ? btnSubmit.querySelector('.btn-spinner') : null;
    const successMessage = document.getElementById('successMessage');
    const confirmedEmail = document.getElementById('confirmedEmail');
    const animatedInputs = document.querySelectorAll('.animated-input');

    // Configurar fecha mínima permitida (día actual)
    if (fechaInput) {
        const hoy = new Date().toISOString().split('T')[0];
        fechaInput.setAttribute('min', hoy);
    }

    // ==========================================
    // 1. ANIMACIÓN DE CARGA INICIAL (ENTRADA)
    // ==========================================
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    tl.from('.cabecera', { y: -30, opacity: 0 })
      .from('.gsap-title', { y: -20, opacity: 0, scale: 0.95 }, '-=0.4')
      .from('.gsap-reveal', { y: 25, opacity: 0, stagger: 0.1 }, '-=0.4');


    // ==========================================
    // 2. MICRO-INTERACCIONES EN CAMPOS
    // ==========================================
    animatedInputs.forEach(input => {
        const wrapper = input.closest('.input-wrapper');
        const icon = wrapper ? wrapper.querySelector('.input-icon') : null;

        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.25,
                ease: 'power2.out'
            });

            if (icon) {
                gsap.to(icon, {
                    scale: 1.2,
                    rotate: 10,
                    duration: 0.25,
                    ease: 'back.out(2)'
                });
            }
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.25,
                ease: 'power2.out'
            });

            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotate: 0,
                    duration: 0.25,
                    ease: 'power2.out'
                });
            }
        });

        input.addEventListener('change', () => {
            gsap.fromTo(input, 
                { scale: 0.98 }, 
                { scale: 1.02, duration: 0.15, yoyo: true, repeat: 1, ease: 'power1.inOut' }
            );

            if (icon) {
                gsap.fromTo(icon,
                    { scale: 1.3 },
                    { scale: 1.2, duration: 0.2, ease: 'bounce.out' }
                );
            }
        });
    });


    // ==========================================
    // 3. ANIMACIONES INTERACTIVAS DEL BOTÓN DE ENVÍO
    // ==========================================
    if (btnSubmit) {
        btnSubmit.addEventListener('mouseenter', () => {
            gsap.to(btnSubmit, {
                scale: 1.04,
                backgroundColor: '#155d27',
                color: '#ffffff',
                borderColor: '#155d27',
                duration: 0.25,
                ease: 'power1.out'
            });
        });

        btnSubmit.addEventListener('mouseleave', () => {
            gsap.to(btnSubmit, {
                scale: 1,
                backgroundColor: '#dcdfdc',
                color: '#2b2b2b',
                borderColor: '#a3a8a3',
                duration: 0.25,
                ease: 'power1.out'
            });
        });

        btnSubmit.addEventListener('mousedown', () => {
            gsap.to(btnSubmit, { scale: 0.95, duration: 0.1 });
        });

        btnSubmit.addEventListener('mouseup', () => {
            gsap.to(btnSubmit, { scale: 1.04, duration: 0.1 });
        });
    }


    // ==========================================
    // 4. ANIMACIÓN CON SCROLLTRIGGER PARA LA IMAGEN DEL SALÓN
    // ==========================================
    gsap.from('.gsap-scroll-img', {
        scrollTrigger: {
            trigger: '.gsap-scroll-img',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        scale: 0.92,
        duration: 1,
        ease: 'power2.out'
    });


    // ==========================================
    // 5. ENVÍO DEL FORMULARIO Y CONFIRMACIÓN ANIMADA
    // ==========================================
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailValue = document.getElementById('email').value.trim();

            if (btnSubmit) btnSubmit.disabled = true;
            if (btnText) btnText.textContent = 'Procesando...';
            if (btnSpinner) btnSpinner.style.display = 'inline-block';

            setTimeout(() => {
                if (btnSubmit) btnSubmit.disabled = false;
                if (btnText) btnText.textContent = 'Solicitar reserva';
                if (btnSpinner) btnSpinner.style.display = 'none';

                if (confirmedEmail) confirmedEmail.textContent = emailValue;
                if (successMessage) successMessage.style.display = 'flex';

                gsap.fromTo(successMessage, 
                    { opacity: 0, y: -15, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
                );

                if (successMessage) successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                reservationForm.reset();

                if (fechaInput) {
                    const hoy = new Date().toISOString().split('T')[0];
                    fechaInput.setAttribute('min', hoy);
                }

            }, 800);
        });
    }
});