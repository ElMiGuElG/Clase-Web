//Declarar Una Variable sin inicial

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





