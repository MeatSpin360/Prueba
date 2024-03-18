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


let NombreUsuario = document.querySelector('#NombreUsuario');


// variable principal

let conformado = document.querySelector('#conformado');
let datos = document.querySelectorAll('.clasico');
//variables secundarias

let titulo;
let antiguedad = document.querySelector('#antiguedad');
let valorantiguedad;
let hsferiado = document.querySelector('#feriado');
let valorferiado;
let canthoras50 = document.querySelector('#horas50');
let valorhoras50;
let canthoras100 = document.querySelector('#horas100');
let valorhoras100;
let remu;
let noremunerativo;
let bruto;

// varaibles positivas que se calculan

function Fantiguedad() {
    return valorantiguedad = Number((antiguedad.value/100)*conformado);
};

function Ftitulo() {
    return titulo = Number(conformado.value * 0.20);
};

function Fferiado() {
    return valorferiado = Number(feriado.value*9*valorhoras100);
};

function Fhoras50() {
    return valorhoras50 = Number(canthoras50.value*((conformado/200)*1.5));
};

function Fhoras100() {
    return valorhoras100 = Number(canthoras100.value*((conformado/200)*2));
};

function Fremunerativo() {
    if (titulo !== '') {
        return remu = (conformado.value + titulo + valorantiguedad + valorferiado + valorhoras50 + valorhoras100);
    } else {
        return remu = (conformado.value + valorantiguedad + valorferiado + valorhoras50 + valorhoras100);
    };
};

function Fnoremunerativo(){
    return noremunerativo = Number(document.querySelector('#noremunerativo').value);
};

function Fbruto() {
    return bruto = remu + noremunerativo;
};


// ahora variables de descuento

let jubilacion;
let obrasocial1;
let obrasocial2;
let sindicato;
let ganancias;

function Fjubilacion() {
        return jubilacion = Number(remu * 0.11);

};

function Fobrasocial1() {
        return obrasocial1 = Number(remu * 0.03);
};

function Fobrasocial2() {
        return obrasocial2 = Number(remu * 0.03);
   
};

function Fsindicato() {
        return sindicato = Number(remu * 0.03);
    
};

function Fganancias() {
    if (Number(bruto) >= 2340000) {
        return ganancias = (bruto * 0.35);
    } else {
        return ganancias = 0;
    };
};


function CalculoFinal() {


};

// botones y checkbox

let respuestadeerror = `falta completar uno o mas campos, ${NombreUsuario.value}`;
let respuestasiok = `Calculando tu sueldo, ${NombreUsuario.value}...`;
const $botoncalcular = (document.querySelector('#calcular'));


// Aca arranca la funcion principal


$botoncalcular.onclick = function(){
    for(i=0; i <= datos.length-1; i++){
        if(datos[i].value == ''){
            respuestadeerror = `falta completar uno o mas campos, ${NombreUsuario.value}`;
        } else {
            Fantiguedad;
            Ftitulo;
            Fferiado;
            Fhoras50;
            Fhoras100;
            Fremunerativo;
            Fnoremunerativo;
            Fjubilacion;
            Fganancias;
            Fobrasocial1;
            Fobrasocial2;
            Fsindicato;








        }
    };




};