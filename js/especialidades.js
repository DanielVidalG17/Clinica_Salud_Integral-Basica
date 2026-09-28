const enlacesEspecialidades = document.querySelectorAll(".especialidad-link");

const descripcionEspecialidad = document.getElementById(
    "descripcionEspecialidad"
);


const descripciones = {

    "terapia-neural": {
        titulo: "Terapia neural",
        descripcion:
            "Especialidad orientada al tratamiento integral mediante técnicas que buscan favorecer el equilibrio y bienestar del organismo."
    },

    "quiropraxia": {
        titulo: "Quiropraxia",
        descripcion:
            "Especialidad enfocada en el cuidado del sistema musculoesquelético y en el bienestar relacionado con la movilidad corporal."
    },

    "fisioterapia": {
        titulo: "Fisioterapia",
        descripcion:
            "Área dedicada a la recuperación y mantenimiento del movimiento y la funcionalidad física mediante tratamientos personalizados."
    },

    "nutricion": {
        titulo: "Nutrición y Dietética Terapéutica",
        descripcion:
            "Especialidad que busca promover hábitos alimentarios saludables mediante orientación nutricional adaptada a las necesidades de cada paciente."
    },

    "psicologia": {
        titulo: "Psicología (Disponible muy pronto)",
        descripcion:
            "Especialidad orientada al bienestar emocional y al acompañamiento de las personas en el manejo de diferentes situaciones de su vida, muy pronto se abriran las citas de psicologia."
    }

};


enlacesEspecialidades.forEach(function (enlace) {

    enlace.addEventListener("click", function (evento) {

        evento.preventDefault();

        const especialidadSeleccionada =
            enlace.dataset.especialidad;

        const informacion =
            descripciones[especialidadSeleccionada];

        descripcionEspecialidad.innerHTML = `
            <h3 class="h5">
                ${informacion.titulo}
            </h3>

            <p class="mb-0">
                ${informacion.descripcion}
            </p>
        `;

    });

});