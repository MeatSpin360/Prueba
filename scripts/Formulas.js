// aca van funciones varias y variables

function multiplicar(argu1, argu2) {
    return (argu1 * argu2)
};

function dividir(argu1, argu2) {
    return (argu1 / argu2)
};

function sumar(argu1, argu2) {
    return (argu1 + argu2)
};

function restar(argu1, argu2) {
    return(argu1 - argu2)
};

// Aca arranca la funcion principal

const $botoncalcular = document.querySelector('#calcular')

$botoncalcular.onclick = function(){

    let NombreUsuario = document.querySelector('#NombreUsuario').value;

    let datos = document.querySelectorAll('.variable');

  console.log(typeof datos[3].value);

};

/*
    let respuestadeerror;


    document.querySelector('#respuestadeerror').innerText = respuestadeerror
*/

