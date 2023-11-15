/*
    Ejemplos de tipos de datos
*/

//Tipo de dato string
var nombre = 'Fidel';
console.log(nombre);
nombre = 10;
console.log(typeof nombre)

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre: 'Luis',
    apellido: 'Perez',
    telefono: '55443322'
};

console.log(typeof objeto);

//Tipo de dato boolean
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){};
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol('mi simbolo');
console.log(typeof simbolo);

//Tipo clase es una funcion
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
}
console.log(typeof Persona);

//Tipo de dato undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(typeof z);

/*
    Concatenar cadenas
*/

var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 2 + 4
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

/*
    Tipos de variables
*/

let name = 'Juan';
console.log(name);

const lastName = 'Perez';

let fullName = 'Juan Perez';
console.log(fullName);

let x2, y2;
x2 = 10, y2 = 20;
let z2 = x2 + y2;
console.log(z2);

let nombreCompleto3 = "Juan Perez";
let nombrecompleto3 = "Carlos Lara";
console.log(nombrecompleto3)