function validarCampoObligatorio(campo, mensajeError) {
    const error = document.getElementById(mensajeError);

    if (campo.value.trim() === "") {
        error.textContent = "Este campo es obligatorio.";
        return false;
    }

    error.textContent = "";
    return true;
}

document.getElementById("nombres").addEventListener("blur", function () {
    validarCampoObligatorio(this, "errorNombres");
});

document.getElementById("apellidos").addEventListener("blur", function () {
    validarCampoObligatorio(this, "errorApellidos");
});

document.getElementById("documento").addEventListener("blur", function () {
    validarCampoObligatorio(this, "errorDocumento");
});

document.getElementById("celular").addEventListener("blur", function () {
    validarCampoObligatorio(this, "errorCelular");
});

document.getElementById("correo").addEventListener("blur", function () {
    validarCorreo();
});

document.getElementById("contrasena").addEventListener("blur", function () {
    validarCampoObligatorio(this, "errorContrasena");
});

document.getElementById("confirmarContrasena").addEventListener("blur", function () {
    validarCampoObligatorio(this, "errorConfirmarContrasena");
    validarConfirmarContrasena();
});

const generos = document.querySelectorAll('input[name="genero"]');

generos.forEach(function (genero) {
    genero.addEventListener("change", function () {
        const seleccionado = document.querySelector('input[name="genero"]:checked');
        const error = document.getElementById("errorGenero");

        if (seleccionado) {
            error.textContent = "";
        } else {
            error.textContent = "Este campo es obligatorio.";
        }
    });
});

document.getElementById("terminos").addEventListener("change", function () {
    const error = document.getElementById("errorTerminos");

    if (this.checked) {
        error.textContent = "";
    } else {
        error.textContent = "Debes aceptar los términos y condiciones.";
    }
});

document.getElementById("formRegistro").addEventListener("submit", function (evento) {
    evento.preventDefault();

    let formularioValido = true;

    if (!validarCampoObligatorio(document.getElementById("nombres"), "errorNombres")) {
        formularioValido = false;
    }

    if (!validarCampoObligatorio(document.getElementById("apellidos"), "errorApellidos")) {
        formularioValido = false;
    }

    if (!validarCampoObligatorio(document.getElementById("documento"), "errorDocumento")) {
        formularioValido = false;
    }

    if (!validarCampoObligatorio(document.getElementById("celular"), "errorCelular")) {
        formularioValido = false;
    }

    if (!validarCorreo()) {
        formularioValido = false;
    }

    if (!validarCampoObligatorio(document.getElementById("contrasena"), "errorContrasena")) {
        formularioValido = false;
    }

    if (!validarConfirmarContrasena()) {
        formularioValido = false;
    }

    if (!document.querySelector('input[name="genero"]:checked')) {
        document.getElementById("errorGenero").textContent = "Este campo es obligatorio.";
        formularioValido = false;
    }

    if (!document.getElementById("terminos").checked) {
        document.getElementById("errorTerminos").textContent = "Debes aceptar los términos y condiciones.";
        formularioValido = false;
    }

    if (formularioValido) {
        alert("Registro realizado correctamente.");
    }
});

function validarCorreo() {
    const correo = document.getElementById("correo");
    const error = document.getElementById("errorCorreo");

    if (correo.value.trim() === "") {
        return false;
    }

    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo.value.trim())) {
        error.textContent = "Ingresa un correo electrónico válido.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarConfirmarContrasena() {
    const contrasena = document.getElementById("contrasena");
    const confirmarContrasena = document.getElementById("confirmarContrasena");
    const error = document.getElementById("errorConfirmarContrasena");

    if (confirmarContrasena.value.trim() === "") {
        error.textContent = "Este campo es obligatorio.";
        return false;
    }

    if (confirmarContrasena.value !== contrasena.value) {
        error.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    error.textContent = "";
    return true;
}

document.getElementById("contrasena").addEventListener("input", function () {
    const confirmarContrasena = document.getElementById("confirmarContrasena");

    if (confirmarContrasena.value !== "") {
        validarConfirmarContrasena();
    }
});

document.getElementById("nombres").addEventListener("input", function () {

    this.value = this.value.replace(
        /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g,
        ""
    );

});


document.getElementById("apellidos").addEventListener("input", function () {

    this.value = this.value.replace(
        /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g,
        ""
    );

});

document.getElementById("documento").addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

});


document.getElementById("celular").addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

});