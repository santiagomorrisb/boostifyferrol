let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Deslizar hacia abajo, ocultar menú
        nav.classList.remove('active');
    } else {
        // Deslizar hacia arriba, mostrar menú
        nav.classList.add('active');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});
