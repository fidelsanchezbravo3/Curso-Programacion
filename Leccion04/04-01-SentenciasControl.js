let condicion = false;

if( 2 > 3 ) {
    console.log("Condicion verdadera")
} else {
    console.log("Condicion falsa")
}

/*
    Ejercicio 1
*/

let numero = -1;
if(numero === 1){
    console.log("Numero uno");
}
else if(numero === 2){
    console.log("Numero dos");
}
else if(numero === 3){
    console.log("Numero tres");
}
else if(numero === 4){
    console.log("Numero cuatro");
} else {
    console.log("Numero desconocido");
}

/*
    Ejercicio 2
*/

let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = 'Invierno'
} else if(mes == 3 || mes == 4 || mes == 5){
    estacion = 'Primavera';
} else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
} else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño"
} else {
    estacion = "Valor incorrecto"
}

console.log(estacion)

/*
    Estructura Switch
*/
let numero1 = 3;
let numeroTexto = 'Valor desconocido';

switch(numero1){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break;
    case 4:
        numeroTexto = 'Numero cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
}

console.log(numeroTexto);

/*
    Ejercicio 1
*/
let mes1 = 4;
let estacion1 = 'Estacion desconocida'

switch(mes1){
    case 1: case 2: case 12:
        estacion1 = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion1 = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion1 = 'Verano';
        break;
    case 9: case 10: case 12:
        estacion1 = 'Otoño';
        break;
    default:
        estacion1 = 'Valor incorrecto';
}

console.log(estacion1)