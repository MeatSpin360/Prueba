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

let NombreUsuario = document.querySelector('#NombreUsuario').value;
let datos = document.querySelectorAll('.variable');
let respuestadeerror = `falta completar uno o mas campos, ${NombreUsuario}`;
let respuestasiok = `Calculando tu sueldo, ${NombreUsuario}...`;

let $sinacfa = document.querySelector('#sinacfa');

const $botoncalcular = document.querySelector('#calcular');

$sinacfa.onclick = function(){
    if ((document.querySelector('#sinacfa').hasAttribute(chequed=false))){

        document.querySelector('#basico').setAttribute(disabled = false);
    };

};



$botoncalcular.onclick = function(){


    console.log(datos[2].value);

    for (i=0; i<=datos.length-1; i++){
        if (datos[i].value === ''){
            document.querySelector('#respuestadeerror').innerText = respuestadeerror;
        } else {
            document.querySelector('#respuestasiok').innerText = respuestasiok;


        };
    };

};

