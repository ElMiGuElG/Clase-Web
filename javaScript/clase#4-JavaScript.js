//Clase #4

//Arreglos (Arrays)
// Arreglo que guarda números
let numeros = [10.34,1,1000,350.456];

// Arreglo que guarda diferentes tipos de datos
const varios = ["Juan",true,10,null,3.0];

// Imprime el contenido del arreglo 'numeros'
console.log(numeros);

// Imprime el contenido del arreglo 'varios'
console.log(varios);

// Imprime la longitud del arreglo 'varios'
console.log(varios[0]); // Imprime "Juan"

// Imprime la longitud del arreglo 'varios'
console.log(varios.length); // Imprime 5

// **Agregar al final del arreglo:**

// Agrega "Colombia" al final del arreglo 'numeros'
numeros.push("Colombia");

// Imprime el contenido del arreglo 'numeros'
console.log(numeros);

// **Quitar el último elemento del arreglo:**

// Elimina el último elemento del arreglo 'numeros'
numeros.pop();

// Imprime el contenido del arreglo 'numeros'
console.log(numeros);

// **Agregar al inicio del arreglo:**

// Agrega "Brasil" al inicio del arreglo 'numeros'
numeros.unshift("Brasil");

// Imprime el contenido del arreglo 'numeros'
console.log(numeros);

// **Quitar el primer elemento del arreglo:**

// Elimina el primer elemento del arreglo 'numeros'
numeros.shift();

// Imprime el contenido del arreglo 'numeros'
console.log(numeros);

// **Métodos para arreglos:**

// **1. reduce():**

// Reduce el arreglo 'numeros' a un único valor sumando todos sus elementos
let reducido = numeros.reduce((acumalador,valorActual) =>{
    return acumalador+valorActual;
});

// Imprime el valor reducido
console.log(reducido); // Imprime el total de la suma

// **2. filter():**

// Filtra el arreglo 'numeros' para obtener solo los valores mayores a 10
let filtrado = numeros.filter(dato =>{
    return dato >10;
});

// Imprime el contenido del arreglo filtrado
console.log(filtrado);

let strings = ["Colombia","Brasil","Comoros","Conecticut"]

console.log(strings.filter(dato =>{
    return dato.startsWith("Co");
}));

// **3. map():**

// Concatena "Hola" al final de cada elemento del arreglo 'strings'
let mapeo = strings.map(pais =>{
    return pais.concat("Hola");
});

// Imprime el contenido del arreglo mapeado
console.log(mapeo);

// Eleva al cuadrado cada elemento del arreglo 'numeros'
let mapped = numeros.map(numero =>{
    return Math.pow(numero,2);
});

// Imprime el contenido del arreglo mapeado
console.log(mapped);

// **4. forEach():**

// Recorre el arreglo 'numeros' e imprime cada elemento en la consola
numeros.forEach(numero =>{
    console.log(numero);
});