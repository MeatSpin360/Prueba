// todas las variables positivas

let NombreUsuario;
let conformado;
let datos;
let titulo;
let antiguedad;
let valorantiguedad;
let hsferiado;
let valorferiado;
let canthoras50;
let valorhoras50;
let canthoras100;
let valorhoras100;
let remu;
let noremunerativo;
let bruto;
let SalarioNeto;

// Funciones de todas las variables positivas

function Fnombreusuario() {
    NombreUsuario = document.querySelector('#NombreUsuario');
};

function Fconformado() {
    return conformado = document.querySelector('#conformado');
};

function Fdatos() {
    return datos = document.querySelectorAll('.clasico').values;
};

function Fantiguedad() {
    antiguedad = document.querySelector('#antiguedad');
    return valorantiguedad = Number((antiguedad.value/100)*conformado);
};

function Ftitulo() {
    return titulo = Number(conformado.value * 0.20);
};

function Fferiado() {
    hsferiado = document.querySelector('#feriado');
    return valorferiado = Number(feriado.value*9*valorhoras100);
};

function Fhoras50() {
    canthoras50 = document.querySelector('#horas50');
    return valorhoras50 = Number(canthoras50.value*((conformado/200)*1.5));
};

function Fhoras100() {
    canthoras100 = document.querySelector('#horas100');
    return valorhoras100 = Number(canthoras100.value*((conformado/200)*2));
};

//PROBLEMA 0 .... NO SE COMO CARAJO HACER PARA QUE SE ME PONGA:
// Checkbox checked  =  input "titulo" habilitado para escribir un valor
// checkbox unchecked = input "titulo" disabled ( que se vea gris en la pagina)
// ESTO TIENE QUE VARIAR EN TIEMPO REAL, CADA VEZ QUE TILDE O DESTILDE EL CHECKBOX TIENE QUE HABILITAR Y DESABILITAR EL INPUT...

//PROBLEMA 0.5 ... El mismo check, pero para incluir o no incluir el valor del input "titulo".. en la funcion de aca abajo
// Checkbox checked  =  remu incluye el valor del titulo
// checkbox unchecked = remu no incluye el valor del titulo

function Fremunerativo() {
    if (document.querySelector('#titulo').ariaChecked = checked) {
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


function Neto() {
    return SalarioNeto = (bruto - jubilacion - obrasocial1 - obrasocial2 - sindicato - ganancias);
};

// boton

const $botoncalcular = (document.querySelector('#calcular'));


// Aca arranca la funcion principal


$botoncalcular.onclick = function(){

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
    Neto;
    // si o si van todas las funciones primero para armar el array con los valores puestos. ==> 
    // JAVI, ACA ESTA EL PROBLEMA 1 .... las funciones no me aplican los valores a las variables
    // cuando llega a la funcion de abajo, todas las variables de arriba siguen undefined... eso me lleva al problema 2...
    Fdatos;

    for(i=0; i <= datos.length -1; i++){ // problema 2,... el length no lo cuenta porque me dice que datos es undefined.... creo que si se soluciona el problema 1, esto se arregla
        if(datos[i].value == ''){
           let respuestadeerror = `falta completar uno o mas campos, ${NombreUsuario.value}`;
           return document.querySelector('#respuestadeerror').textContent = respuestadeerror;
        } else {

            document.querySelector('#neto').innerText = (`tu salario neto es $${SalarioNeto}`)
        };
    };

return false;
};

