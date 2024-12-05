document.addEventListener("DOMContentLoaded", () => {
    // Añadir animaciones de desvanecimiento
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(element => {
        element.classList.add("show");
    });
});
