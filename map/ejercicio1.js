
// Devolver un nuevo array con todas las palabras en mayúsculas.
console.log("=============================================");
console.log("-------Tenemos nuestra lista de strings-------");
console.log("===============================================");
const palabras = ["hola", "mundo", "javascript"];
console.log(palabras);
console.log("\n Ahora usando map y toUpperCase, convertiremos las palabras en mayuscula\n");
function aMayusculas(arr) {
  return arr.map(palabra => palabra.toUpperCase());
}

console.log(aMayusculas(palabras));
console.log("\n==========fin del ejercicio===============\n");

