export function mainPacientes() {
    console.log("hpña");
    document.addEventListener("DOMContentLoaded", () => {
        const btnIngreso = document.getElementById("btnIngresoPaciente");
        const forms = document.getElementById("forms");
        const btnIngresoAdulto = document.getElementById("btnIngresoPacienteAdulto");
        const btnIngresoPed = document.getElementById("btnIngresoPacientePed");

        btnIngreso.addEventListener('click', () => {
            console.log("btn");
            
            btnIngresoAdulto.style.visibility= 'visible';
            btnIngresoAdulto.addEventListener('click',()=>{
                forms.style.visibility='visible';
                formped.style.visibility='hidden';
                document.getElementById("hrHidden").style.visibility='visible';
            })

            btnIngresoPed.style.visibility= 'visible';
            btnIngresoPed.addEventListener('click',()=>{
                const formped = document.getElementById("formPed");
                formped.style.visibility = 'visible';
                forms.style.visibility='hidden';

            })
            

        })
    })
}

