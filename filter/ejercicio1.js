
//Contar cuántos números son mayores a 50.
console.log("======================================================");
console.log("----------Tenemos nuestra lista de números----------");
console.log("=====================================================");
const numeros = [10, 60, 45, 80, 100];
console.log(numeros);
console.log("\nAhora vamos a contar cuántos números son mayores a 50 usando filter y length\n");
function contarMayores(arr) {
  return arr.filter(num => num > 50).length;
}

console.log("Mayores a 50:", contarMayores(numeros)); // 3
//console.log("Explícito:", numeros.filter(num => num > 50).length); // 3
console.log("\n==================fin del ejercicio======================\n");

