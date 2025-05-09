document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('butsave').addEventListener('click', function() {
        // Deshabilitar el botón
        this.setAttribute("disabled", "disabled");

        // Obtener los valores de los campos
        let nombre = document.getElementById('name').value;
        let correo = document.getElementById('email').value;
        let telefono = document.getElementById('phone').value;
        let ciudad = document.getElementById('city').value;

        // Verificar que los campos no estén vacíos
        if (nombre !== "" && correo !== "" && telefono !== "" && ciudad !== "") {
            // Crear un objeto FormData para enviar los datos
            let formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('correo', correo);
            formData.append('telefono', telefono);
            formData.append('ciudad', ciudad);

            // Realizar la llamada AJAX usando Fetch API
            fetch('save.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json()) // Convertir la respuesta a JSON
            .then(dataResult => {
                let msj = '';
                console.log(dataResult);

                if (dataResult.statusCode == 200) {
                    // Habilitar el botón de guardar
                    document.getElementById('butsave').removeAttribute("disabled");

                    // Resetear los valores de los campos del formulario
                    document.querySelectorAll('#fupForm input[type="text"]').forEach(input => {
                        input.value = '';
                    });
                    document.getElementById('city').selectedIndex = 0; // Restablecer el select
                    document.getElementById('email').value = '';

                    // Mensaje a mostrar
                    msj = 'Registro agregado exitosamente';
                } else if (dataResult.statusCode == 2001) {
                    msj = 'Ocurrió un error al agregar el registro nuevo';
                }

                // Mostrar el mensaje
                let successDiv = document.getElementById('success');
                successDiv.style.display = 'block';
                successDiv.innerHTML = msj;
            })
            .catch(error => {
                console.error('Error:', error);
                // Habilitar el botón en caso de error
                document.getElementById('butsave').removeAttribute("disabled");
                alert('Ocurrió un error en la solicitud.');
            });
        } else {
            alert('Por favor complete los datos solicitados');
        }
    });
});

