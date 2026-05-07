document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active Navigation Link Update on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Typewriter Effect
    const textToType = "Desarrollador en formación";
    const typewriterElement = document.querySelector('.typewriter');
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textToType.substring(0, charIndex);
        typewriterElement.textContent = currentText;

        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed = 50;
        }

        if (!isDeleting && charIndex === textToType.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typeSpeed = 500; // Pause before restarting
        }

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start typewriter
    setTimeout(typeEffect, 1000);

    // Glitch effect on hover
    const glitchElement = document.querySelector('.glitch');
    setInterval(() => {
        if(Math.random() > 0.9) {
            glitchElement.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                glitchElement.style.transform = 'translate(0, 0)';
            }, 100);
        }
    }, 200);

    // Contact Form Handle
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            btn.disabled = true;

            // Simulate sending delay
            setTimeout(() => {
                contactForm.reset();
                formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
                formStatus.className = 'form-status success-msg';
                
                btn.innerHTML = originalText;
                btn.disabled = false;

                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            }, 1500);
        });
    }
});
