//------- Class 5 -------//

// ---- CallBack Functions ----

// Función que convierte grados Fahrenheit a Celsius
const convertirGrados = gradosFahrenheit => (5/9)*(gradosFahrenheit-32);

// Función que recibe una función como parámetro y la ejecuta
const Temperatura = (callBackFn,grados)=>{
    // Usa la funcion que llegó como parametro 
    let gradosCentigrados = callBackFn(grados);
    console.log(gradosCentigrados);
};
// Llama a la función `Temperatura` con la función `convertirGrados` como parámetro
Temperatura(convertirGrados,80); // Imprime 26.666666666666668

// ---- Objects ----

// ----- Primera Forma ------//

// Objeto que representa un perro
const perro = {
    Nombre: "Otto",
    Edad:3,
    Color:"Negro", 
    nombrarPerro(Nombre){ // Función para cambiar el nombre del perro
        return this.Nombre = Nombre; // Cambia el nombre del perro
    },
    caracteristicas:{ // Objeto que describe las características del perro
        Raza: "BullDog",
        Altura:20,
        peso:30,
        vacunas:true,
        alimento:"NutreCan",
    }
}

// ----- Segunda Forma ------//

// Objeto que representa un auto
const auto ={};
auto.modelo = 1986;
auto.color = "Azul"
auto.caracteristicas = { // Objeto que describe las características del auto
    marca:"BMW",
    cilindraje:2500,
}

console.log(perro);
console.log(auto);

// ----- Tercera Forma ------//

// Objeto que representa un carro
let color = "Rojo";
let modelo = 1985;
let caracteristicas={
    marca:"BMW",
    cilindraje:2500,
}

const carro = {color,modelo,caracteristicas} // Crea un objeto usando las variables como propiedades
console.log(carro); 

// ----- Cuarta Forma ------//

// Objeto que representa un animal
const animal = new Object;
animal.Nombre = "Serpiente";
console.log(animal);

// ---- Acceder a las propiedades ------//

// Imprime el nombre del perro
console.log(perro.Nombre);

// Imprime la raza del perro
console.log(perro.caracteristicas.Raza);

// Imprime el nombre del perro usando la notación de corchetes
console.log(perro["Nombre"]);

const Array = {perro,animal}; // Se cambió "Array" a "animales" para mayor claridad

// Ejemplo de cómo modificar y agregar propiedades a objetos dentro de un array
 animales.forEach((objeto) => {
    // Cambiar propiedad
    objeto.nombre = "Pepe";
    // Agregar nueva propiedad
    objeto.creadoEn = 2024;
 });

console.log(perro);
console.log(animal);

// Obtener las Propiedades
const {Color} = perro; // Se cambió "Color" a "color" para mayor claridad
console.log(Color);
