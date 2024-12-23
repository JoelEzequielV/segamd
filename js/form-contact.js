document.getElementById('submitBtn').addEventListener('click', function () {
    // Limpiar mensajes de error previos
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Obtener los campos del formulario
    const nombre = document.getElementById('nombre');
    const mail = document.getElementById('mail');
    const msj = document.getElementById('msj');

    // Variable para saber si hay errores
    let hasErrors = false;

    // Validar campo Nombre
    if (!nombre.value.trim()) {
        document.getElementById('error-nombre').textContent = 'El campo "Nombre" es obligatorio.';
        hasErrors = true;
    }

    // Validar campo Correo
    if (!mail.value.trim()) {
        document.getElementById('error-mail').textContent = 'El campo "Correo" es obligatorio.';
        hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value)) {
        document.getElementById('error-mail').textContent = 'Por favor, ingresa un correo válido.';
        hasErrors = true;
    }

    // Validar campo Mensaje
    if (!msj.value.trim()) {
        document.getElementById('error-msj').textContent = 'El campo "Mensaje" es obligatorio.';
        hasErrors = true;
    }

    // Si no hay errores, mostrar un mensaje o realizar acción adicional
    if (!hasErrors) {
        alert('Formulario enviado correctamente');
        // Aquí puedes enviar el formulario si todo está correcto
        // document.getElementById('contactForm').submit();
    }
});