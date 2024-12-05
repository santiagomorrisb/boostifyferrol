document.addEventListener("DOMContentLoaded", () => {
    // Añadir animaciones de desvanecimiento
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(element => {
        element.classList.add("show");
    });

    // Mostrar footer cuando el scroll llega al fondo
    const footer = document.querySelector("footer");
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.classList.remove("hidden-footer");
            footer.classList.add("visible-footer");
        } else {
            footer.classList.remove("visible-footer");
            footer.classList.add("hidden-footer");
        }
    });
});
