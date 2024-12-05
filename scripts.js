// Inicializar EmailJS con tu User ID
emailjs.init('oweLFr6V8uZTlcO7V');

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que la página se recargue

    const formMessage = document.getElementById('form-message');
    formMessage.style.display = 'block';
    formMessage.textContent = 'Enviando...';
    formMessage.style.color = 'blue';

    emailjs.sendForm('service_z34e3pa', 'template_r1413uw', this)
        .then(
            function () {
                // Si el mensaje se envió correctamente
                formMessage.textContent = 'Mensaje enviado correctamente. ¡Gracias por contactarnos!';
                formMessage.style.color = 'green';
                document.getElementById('contactForm').reset(); // Limpiar el formulario
            },
            function (error) {
                // Si hubo un error
                formMessage.textContent = 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
                formMessage.style.color = 'red';
                console.error('Error al enviar:', error);
            }
        );
});
