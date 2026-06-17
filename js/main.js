document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav');
    const form = document.getElementById('bookingForm');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const original = btn.textContent;
            btn.textContent = 'Заявка отправлена!';
            btn.style.background = 'linear-gradient(135deg, #5a6b4a, #6b7b5a)';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = original;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const h = header.offsetHeight;
                const pos = target.getBoundingClientRect().top + window.pageYOffset - h;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.about__media, .about__text, .bath__text, .bath__cards, .interior__item, .outdoor__item, .price-card, .rule, .booking__info, .booking__form, .contacts__info, .contacts__map').forEach(el => {
        el.classList.add('fade-in');
        obs.observe(el);
    });
});
