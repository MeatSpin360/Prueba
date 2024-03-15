// funciones varias

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

// variables principales

let NombreUsuario = document.querySelector('#NombreUsuario');

let basico = document.querySelector('#basico');
let acfa = document.querySelector('#acfa');
let conformado = document.querySelector('#conformado');

// funcion de la checkbox de salario basico

let CheckboxBasico = document.querySelector('#checkbasico');
let ValorAlternado = function(e) {
    basico.disabled = e.target.checked;
    acfa.disabled = e.target.checked;
    conformado.disabled = !e.target.checked;
};

ValorAlternado({target: CheckboxBasico});
CheckboxBasico.addEventListener('change', ValorAlternado)

//variables secundarias

let tituloA;
let tituloB;
let antiguedad = document.querySelector('#antiguedad');
let valorantiguedad;
let hsferiado = document.querySelector('#feriado');
let valorferiado;
let canthoras50 = document.querySelector('#horas50');
let valorhoras50;
let canthoras100 = document.querySelector('#horas100');
let valorhoras100;
let remuA;
let remuB;
let noremunerativo;


// varaibles positivas que se calculan

function FtituloA() {
    return tituloA = Number(basico.value + acfa.value) * 0.20;
};

function FtituloB() {
    return tituloB = Number(conformado.value * 0.20);
};

function remunerativo() {
    if (tituloA !== '') {
        return remuA = (basico.value + acfa.value + tituloA + valorantiguedad + valorferiado + valorhoras50 + valorhoras100);
    } else {
        return remuB = (conformado.value + tituloB + valorantiguedad + valorferiado + valorhoras50 + valorhoras100);
    };
};

function Fbruto() {
    if ()

};
let brutoA = remuA + noremunerativo;
let brutoB = remuB + noremunerativo;

// ahora variables de descuento

let jubilacion;
let obrasocial1;
let obrasocial2;
let sindicato;
let ganancias;

function Fjubilacion() {
    if (remuA !== '') {
        return jubilacion = Number(remuA * 0.11);
    } else {
        return jubilacion = Number(remuB * 0.11);
    };
};


function Fobrasocial1() {
    if (remuA !== '') {
        return obrasocial1 = Number(remuA * 0.03);
    } else {
        return jobrasocial1 = Number(remuB * 0.03);
    };   
}

function Fobrasocial2() {
    if (remuA !== '') {
        return obrasocial2 = Number(remuA * 0.03);
    } else {
        return obrasocial2 = Number(remuB * 0.03);
    };    
};

function Fsindicato() {
    if (remuA !== '') {
        return sindicato = Number(remuA * 0.03);
    } else {
        return sindicato = Number(remuB * 0.03);
    };    
};

function Fganancias() {
    if ()
};

// botones y checkbox

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

