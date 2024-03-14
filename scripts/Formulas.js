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

let NombreUsuario = document.querySelector('#NombreUsuario');
let respuestadeerror = `falta completar uno o mas campos, ${NombreUsuario.value}`;
let respuestasiok = `Calculando tu sueldo, ${NombreUsuario.value}...`;
let $sinacfa = document.querySelector('#sinacfa');
const $botoncalcular = (document.querySelector('#calcular'));



//Funcion del checkbox de tipo de salario basico

    if ($sinacfa.Checked = true){
        datosA = document.querySelectorAll('.clasico');
        document.querySelector('#basico').disabled;
        document.querySelector('#acfa').disabled;
    } else {
        datosB = document.querySelectorAll('variable');
        document.querySelector('#conformado').disabled;
    };

// Aca arranca la funcion principal


$botoncalcular.onclick = function(){
    if ($sinacfa.checked === true){
        for (i=0; i <= datosA.length - 1; i++){
            if (datosA[i].value == '' || datosA[i].value == null){
                document.querySelector('#respuestadeerror').innerText = respuestadeerror;
            } else {
                document.querySelector('#respuestasiok').innerText = respuestasiok;
            };
        };
    } else {
        for (i=0; i <= datosB.length - 1; i++){
            if (datosB[i].value == '' || datosA[i].value == null){
                document.querySelector('#respuestadeerror').innerText = respuestadeerror;
            } else {
                document.querySelector('#respuestasiok').innerText = respuestasiok;
            };
        };
    }
};

