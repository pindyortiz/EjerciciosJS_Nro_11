console.log("Ejercicio Nro 11");

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial(limite = undefined) {
  let resultado = 1;

  for (let index = 1; index <= limite; index++) {
    resultado = resultado * index;
  }
  alert(resultado);
}
let num = prompt("Ingrese un número: ");
factorial(num);
