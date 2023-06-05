// Código no reutilizable
let num1 = 5;
let num2 = 10;

let suma = num1 + num2;

console.log(suma); // Debería imprimir 15

// Convertir en una función
function sumar(num1, num2) {
  return num1 + num2;
}

// Llamada a la función
let sumaFuncion = sumar(num1, num2);

console.log(sumaFuncion); // Debería imprimir 15, como antes

// Llamada a la función con otros argumentos
let otroResultado = sumar(20, 32);

console.log(otroResultado); // Debería imprimir 52

//ejercicio 2

let base = 5;
let altura = 8;

let area = (base * altura ) /2
console.log(area); // deberia imprimir 20

//convertir funcion
function multiplicar(base, altura)  {
    let area = (base * altura) / 2;
    return area;
}
console.log(multiplicar(5,8));

 let multiFunction = multiplicar(base, altura) ;
 console.log(multiFunction);

 let otroResult = multiplicar(20,32);
 console.log(otroResult);

 //ejercicio 3
 //verificar si un numero es par
 //codigo numero no reutilizable

 function esPar(numero) {
    return numero % 2 === 0;
 }
 console.log(esPar(4));

 //ejercicio 4
 //convertir celsisus en farenheit
 // codigo no reutilizable
 let temperaturaEnCelsius = 25;
 let temperaturaEnFahrenheit = (temperaturaEnCelsius * 9) / 5 + 32;

 function convertEnFahrenheit(temperaturaEnCelsius) {
    let conversion = (temperaturaEnCelsius * 9) / 5 + 32;
    return conversion;              
 }
console.log(convertEnFahrenheit(25));

//ejercicio 5
//generar un numero aleatorio entre dos numeros
//codigo no reutilizable para aleatorio entre 2 y 10

function numeroAleatorio(min, max ) {
let random = Math.floor(Math.random() * (max- min + 1) ) + min;
return random;
}
console.log(numeroAleatorio(2,10));
console.log(numeroAleatorio(10,60));