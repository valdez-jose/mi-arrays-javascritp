//Pasar un array a una función
console.log("================================================");
console.log("-------Tenemos nuestra lista de frutas-----------");
console.log("=================================================");
const frutas = ["manzana", "pera", "banana", "naranja", "kiwi"];
console.log(frutas);
console.log("\n Para recorrer cada frutas usaremos el metodo forEach\n");
function mostrarFrutas(arr) {
  arr.forEach(fruta => {
    console.log(fruta);
  });
}
mostrarFrutas(frutas);

console.log("\n========Fin del ejercicio=========\n");