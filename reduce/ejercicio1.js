
//Calcular la suma total de los elementos del array.
console.log("========================================");
console.log("=====Tenemos un array de precios=======");  
console.log("========================================");
const precios = [100, 200, 300];
console.log(precios);
console.log("\nUsaremos el método reduce para calcular la suma total de los elementos del array.\n");

function sumar(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log("Suma total:", sumar(precios)); // 600
console.log("\n===============fin del ejercicio====================");


