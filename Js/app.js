
/**---------------- 
subtitulos escalables 
--------------------**/

const sobreMi = document.querySelector('#sobreMi');
const escalableSobreMi = document.querySelector('.ache2SobreMi');

sobreMi.addEventListener('click', function(){
    escalableSobreMi.classList.toggle("subtituloEscalable");
});
escalableSobreMi.addEventListener('transitionend',function(){
    escalableSobreMi.classList.remove('subtituloEscalable');
});

const expLaboral = document.querySelector('#expLaboral');
const escalableExperiencia = document.querySelector('.ache2Experiencia');

expLaboral.addEventListener('click', function(){
    escalableExperiencia.classList.toggle("subtituloEscalable");
});
escalableExperiencia.addEventListener('transitionend', function(){
    escalableExperiencia.classList.remove('subtituloEscalable');
});

const contacto = document.querySelector('#contac');
const escalableContacto = document.querySelector('.ache2Contacto');

contacto.addEventListener('click', function(){
    escalableContacto.classList.toggle('subtituloEscalable');
})
escalableContacto.addEventListener('transitionend', function(){
    escalableContacto.classList.remove('subtituloEscalable');
});

/**-------------------
 porcentejes de idiomas
-------------------**/

const barraProgresoIngles = document.getElementById("barraProgresoIngles");
const barraProgresoFraces = document.getElementById("barraProgresoFrances");
const barraProgresoItaliano = document.getElementById("barraProgresoItaliano");
const barraProgresoAleman = document.getElementById("barraProgresoAleman");
const btnIdiomas = document.querySelector(".botonIdiomas");

function animar(){
    barraProgresoIngles.classList.toggle("finIngles");
    barraProgresoFraces.classList.toggle("finFrances");
    barraProgresoItaliano.classList.toggle("finItaliano");
    barraProgresoAleman.classList.toggle("finAleman");
}

btnIdiomas.addEventListener('click', function(){
    animar();
});

/**----------------------------
        formulario 
-----------------------------*/

const nombre = document.getElementById('nombre');
const correo = document.getElementById('email');
const textArea = document.getElementById('textarea');

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit',function(event){
    event.preventDefault();
    if(nombre.value.trim().length > 0 & textArea.value.trim().length > 0 & correo.value.trim().length > 0){
        alert("Mensaje Enviado Correctamente");
        //alert(nombre.value + "\n" + textArea.value + "\n" + correo.value);
    }
    else{
        alert("Los campos 'Nombre', 'Motivo' y 'Correo' deben estar completos");
    }
});
