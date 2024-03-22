// todas las variables positivas

let NombreUsuario;
let conformado = 0;
let datos;
let titulo = 0;
let antiguedad;
let valorantiguedad = 0;
let hsferiado;
let valorferiado = 0;
let canthoras50;
let valorhoras50 = 0;
let canthoras100;
let valorhoras100 = 0;
let remu = 0;
let noremunerativo = 0;
let bruto = 0;
let SalarioNeto = 0;

// Funciones de todas las variables positivas

function Fnombreusuario() {
    NombreUsuario = document.querySelector('#NombreUsuario');
};

function Fconformado() {
    conformado = Number(document.querySelector('#conformado').value);
};

function Fantiguedad() {
    antiguedad = document.querySelector('#antiguedad').value;
    valorantiguedad = ((Number(antiguedad)/100)*conformado);
};

function Ftitulo() {
    titulo = Number(conformado) * 0.20;
};

function Fhoras50() {
    canthoras50 = document.querySelector('#horas50').value;
    valorhoras50 = Number(canthoras50)*((conformado/200)*1.5);
};

function Fhoras100() {
    canthoras100 = document.querySelector('#horas100').value;
    valorhoras100 = Number(canthoras100)*((conformado/200)*2);
};

function Fferiado() {
    hsferiado = document.querySelector('#feriado').value;
    valorferiado = (Number(hsferiado)*9*valorhoras100);
};

function Fdatos() {
    datos = document.querySelectorAll('.clasico');

    console.log(datos);
};

// checkbox

function Fremunerativo() {
    if (document.querySelector('#titulo').checked) {
        remu = (conformado + titulo + valorantiguedad + valorferiado + valorhoras50 + valorhoras100);
    } else {
        remu = (conformado + valorantiguedad + valorferiado + valorhoras50 + valorhoras100);
    };
};

function Fnoremunerativo(){
    noremunerativo = Number(document.querySelector('#noremunerativo').value);
};

function Fbruto() {
    bruto = remu + noremunerativo;
};


// ahora variables de descuento

let jubilacion = 0;
let obrasocial1 = 0;
let obrasocial2 = 0;
let sindicato = 0;
let ganancias = 0;

function Fjubilacion() {
        jubilacion = Number(remu) * 0.11;
};

function Fobrasocial1() {
        obrasocial1 = Number(remu) * 0.03;
};

function Fobrasocial2() {
        obrasocial2 = Number(remu) * 0.03;  
};

function Fsindicato() {
        sindicato = Number(remu) * 0.03;
};

function Fganancias() {
    if (Number(bruto) >= 2340000) {
        ganancias = (bruto * 0.35);
    } else {
    };
};


function Neto() {
    return SalarioNeto = (bruto - jubilacion - obrasocial1 - obrasocial2 - sindicato - ganancias);
};

// boton

const $botoncalcular = (document.querySelector('#calcular'));


// Aca arranca la funcion principal


$botoncalcular.onclick = function(e){
    e.preventDefault();
    document.querySelector('#respuestadeerror').textContent = '';
    document.querySelector('#Neto').textContent = '';
    Fnombreusuario();
    Fconformado();
    Fantiguedad();
    Fhoras50();
    Fhoras100();
    Fferiado();
    Fnoremunerativo();
    Fdatos();
    console.log(datos.length);

    for(i=0; i <= datos.length -1; i++){ // problema 2,... el length no lo cuenta porque me dice que datos es undefined.... creo que si se soluciona el problema 1, esto se arregla
        if(datos[i].value == '' || datos[i].value == undefined){
           respuestadeerror = `falta completar uno o mas campos, ${NombreUsuario.value}`;
           document.querySelector('#respuestadeerror').textContent = respuestadeerror;
           return false;
        };
    };

    Ftitulo();
    Fremunerativo();
    Fbruto();
    Fjubilacion();
    Fganancias();
    Fobrasocial1();
    Fobrasocial2();
    Fsindicato();   
    Neto();
  
 
    
    document.querySelector('#Neto').textContent = (`tu salario neto es $${SalarioNeto}`)
    
};
