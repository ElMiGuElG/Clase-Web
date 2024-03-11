//Clase #3

// Variable para almacenar el nombre del usuario (sin inicializar)
let nombreUsuario;

// Variable para almacenar el nombre del usuario (inicializada con 'Juan')
let user = "Juan";

console.log(nombreUsuario); // Imprime el valor de la variable 'nombreUsuario'
console.log(user); // Imprime el valor de la variable 'user'

// Comprueba si el valor de 'user' es 'Pedro' (perador Ternario)
user === "Pedro" ? console.log("Verdadero") : console.log("Falso");

// Constante para almacenar el valor de PI (similar a una constante)
const PI = 3.1416;
//PI = 20; // Error: no se puede modificar el valor de una constante

// Obtiene el valor de PI desde el objeto Math
let PI2;
PI2 = Math.PI; // PI2 ahora tiene el valor de PI (3.141592653589793)

// Comprueba si 'user' incluye la letra 'P
user.includes("P");

// Obtiene la longitud de la cadena 'user'
console.log(user.length); // Imprime la longitud de la cadena 'user'

// Funciones

// Función para saludar al usuario
const saludarUsuario = () => {
    return "Hola Juan";
};

// Función para saludar al usuario con un nombre personalizado
const saludarUser = nameUser => {
    return "Hola " + nameUser;
};

// Función para sumar dos números
const sumarDatos = (numeroUno, numeroDos) =>{
    return numeroUno + numeroDos;
};

// Imprime el tipo de dato del resultado de la función 'sumarDatos'
console.log(typeof(sumarDatos(1.0,"Dos")));

// Suma dos números y imprime el resultado
console.log(sumarDatos(1,6));

// Almacena la función 'saludarUsuario' en la variable 'tres'
let tres = saludarUser;

// Llama a la función 'tres' con el parámetro 'Pepe'
console.log(tres("Pepe"));

//Ciclos 

// Bucle que se ejecuta 10 veces
for(let i = 0;i <10;i++){
};

// Funciones (Forma anterior)

// Función para sumar dos números 
function sumar (numeroUno,numeroDos){
};