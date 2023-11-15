let a = 3, b = 2;
let z = a + b;
console.log('Resultado de la suma: ' + z);

z = a - b;
console.log('Resultado de la resta: ' + z);

z = a * b;
console.log('Resultado de la multiplicacion: ' + z);

z = a / b;
console.log('Resultado de la division: ' + z);

z = a % b;
console.log('Resultado del residuo: ' + z);

z = a ** b;
console.log('Resultado de la potencia: ' + z);

//Incremento
//Pre-incremento
z = ++a;
console.log(a);
console.log(z);
//Post-incremento
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Post-decremento
z = b--;
console.log(b);
console.log(z);

/*
    Presedencia de operadores
*/
let a1 = 3, b1 = 2, c = 1, d = 4;

let z1 = a * b + c / d;
console.log(z1);

z1 = c + a * b / d;
console.log(z1);

z1 = (c + a) * b / c;
console.log(z1);

/*
    Operadores de asignacion
*/
let a2 = 1;

a2 += 3; // a = a + 3
console.log(a2);

a2 -= 2;
console.log(a2);

a2 *= 2;
console.log(a2);

a2 /= 2;
console.log(a2);

a2 %= 2;
console.log(a2);

a2 **= 2;
console.log(a2);

/*
    Operadores de comparacion
*/

let a3 = 3, b3 = 2, c3 = '3';

let z3 = a3 == b3; // revisa el valor sin importar el tipo
console.log(z3);

z3 = a3 === c3; // revisa los valores pero tambien los tipos
console.log(z3);