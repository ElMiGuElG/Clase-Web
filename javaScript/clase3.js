//Declarar Una Variable sin inicial
/*/
let nombreUsuario;

//Declarar Una Variable con inicial

let user = "Juan";

console.log(nombreUsuario);
console.log(user);

//Operador Ternario

user === "Pedro" ? console.log("Verdadero") : console.log("Falso");

//Const is similar to constant

const PI = 3.1416;
//PI = 20;

// Metodos propios del lenguaje
let PI2;
PI2 = Math.PI;
user.includes("P");
console.log(user.length);

//Metodos o Funciones
//Arrow Function

const saludarUsuario = () => {
    return "Hola Juan";
}

const saludarUser = nameUser => {
    return "Hola " + nameUser;
} 

const sumarDatos = (numeroUno, numeroDos) =>{
    return numeroUno + numeroDos;
}

console.log(typeof(sumarDatos(1.0,"Dos")));
console.log(sumarDatos(1.0,"Dos"));

let tres = saludarUser;
console.log(tres("Pepe"));

//Ciclos 

for(let i = 0;i <10;i++){

}

//funciones Forma Anterior 

function sumar (numeroUno,numeroDos){

}

/* Construir 3 Funciones (Arrow Function) 
    1. Sin parametros
    2. 1 Paramatro
    3. 2 o mas Parametros 

    * Declarar Variables con let y const 5 Como Minimo
    * Integrar con llamado a Funciones y Mostrar Resultado
*/

//Clase #4

//Arreglos (Arrays)
let numeros = [10.34,1,1000,350.456]
//Cualquier tipo de dato
const varios = ["Juan",true,10,null,3.0]

console.log(numeros);
console.log(varios);
console.log(varios[0]);

console.log(varios.length);

//Agregar Al Final 
numeros.push("Colombia");
console.log(numeros);

//Quita el Ultimo
numeros.pop();
console.log(numeros);

//Poner al Inicio 
numeros.unshift("Brasil");
console.log(numeros);

//Quitar el Primero 
numeros.shift();
console.log(numeros);

//Metodos para Arreglos 

//1 .reduce ()

let reducido = numeros.reduce((acumalador,valorActual) =>{
    return acumalador+valorActual;
});

console.log(reducido);

//2 .filter()

let filtrado = numeros.filter(dato =>{
    return dato >10;
});

console.log(filtrado);

let strings = ["Colombia","Brasil","Comoros","Conecticut"]

console.log(strings.filter(dato =>{
    return dato.startsWith("Co");
}));

//3 .map()

let mapeo = strings.map(pais =>{
    return pais.concat("Hola");
});

console.log(mapeo);

let mapped = numeros.map(numero =>{
    return Math.pow(numero,2);
});

console.log(mapped);

//4 .forEach()

numeros.forEach(numero =>{
    console.log(numero);
});

//Crear 4 arreglos usando funciones (Flecha)
//la funcion debe crear el arreglo
//Usar Metodos de arreglos y mostrar los resultados (para arraglo minimo un metodo)
//Usar callbackfn