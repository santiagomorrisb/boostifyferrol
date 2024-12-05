// Footer dinámico
const footer = document.getElementById('dynamic-footer');

window.addEventListener('scroll', () => {
    const scrollHeight = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.offsetHeight;

    if (scrollHeight >= documentHeight) {
        footer.classList.remove('hidden-footer');
        footer.classList.add('visible-footer');
    } else {
        footer.classList.remove('visible-footer');
        footer.classList.add('hidden-footer');
    }
});

// Animaciones de desvanecimiento
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fadeInElements.forEach((el) => observer.observe(el));
