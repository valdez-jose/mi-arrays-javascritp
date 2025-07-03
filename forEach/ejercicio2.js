
//Mostrar cada país del array.
console.log("\nTenemos un array con los siguientes países:\n");
const paises = ["Argentina", "Brasil", "Chile", "Uruguay"];
console.log(paises);
console.log("\nUsamos el método forEach para mostrar cada país del array.\n");

function mostrarPaises(arr) {
  arr.forEach(pais => {
    console.log(pais);
  });
}

mostrarPaises(paises);

console.log("\n===============Fin del enercicio============0\n")
