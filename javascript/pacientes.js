
//import { odontologos, odontologos } from "../database/odontologos";
export function mainPacientes() {
    const btnHistorial = document.getElementById("btnHistorial");
    const btnIngreso = document.getElementById("btnIngresoPaciente");
    const forms = document.getElementById("forms");
    const formped = document.getElementById("formPed");
    const btnIngresoAdulto = document.getElementById("btnIngresoPacienteAdulto");
    const btnIngresoPed = document.getElementById("btnIngresoPacientePed");
    const historialPacientes = document.getElementById("historialPacientes");
    const formularios = document.getElementById("formularios");

    document.addEventListener("DOMContentLoaded", () => {
        btnIngreso.addEventListener('click', ingresarPaciente());
        btnHistorial.addEventListener('click',mostrarHistorial());
    })

    function ingresarPaciente(){
        console.log("Ingresar paciente");
        
            // historialPacientes.style.display='none';
            // formularios.style.display= 'block';
            // btnIngresoAdulto.style.visibility = 'visible';

            // btnIngresoAdulto.addEventListener('click', () => {
            //     forms.style.visibility = 'visible';
            //     forms.style.display = 'block';
            //     formped.style.display = 'none';
            //     document.getElementById("hrHidden").style.visibility = 'visible';
            // })

            // btnIngresoPed.style.visibility = 'visible';
            // btnIngresoPed.addEventListener('click', () => {
            //     formped.style.visibility = 'visible';
            //     forms.style.display = 'none';
            //     formped.style.display = 'block';
            // })
    };

    function mostrarHistorial() {
        console.log("mostrar");
        // btnIngresoAdulto.style.display = 'none';
        // btnIngresoPed.style.display = 'none';
        // forms.style.display = 'none';
        // formped.style.display = 'none';
        // historialPacientes.style.display = 'block';
    }


}

