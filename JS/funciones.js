
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById('Formulario');
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        const nombreError = document.getElementById('nombre-error');
        const emailError = document.getElementById('email-error');
        const mensajeError = document.getElementById('mensaje-error');
        const successMessage = document.getElementById('success-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            nombreError.textContent = '';
            emailError.textContent = '';
            mensajeError.textContent = '';
            successMessage.style.display = 'none';

            if (nombre.value.trim() === '') {
                nombreError.textContent = 'Campo requerido';
                isValid = false;
            }

            if (email.value.trim() === '') {
                emailError.textContent = 'Campo requerido';
                isValid = false;
            } else if (!validateEmail(email.value)) {
                emailError.textContent = 'Correo electrónico inválido';
                isValid = false;
            }

            if (mensaje.value.trim() === '') {
                mensajeError.textContent = 'Campo requerido';
                isValid = false;
            }

            if (isValid) {
                alert("Mensaje enviado con éxito");
                form.reset();
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    });


