//Clase #6

//Clases

// Definición de la clase Silla
class silla {
    // Propiedades privadas para el precio de compra al distribuidor, máximo descuento y nombre del vendedor
    #precioCompraDistribuidor;
    #maximoDescuento;
    #nombreVendedor;

    // Constructor para inicializar las propiedades básicas de la silla
    constructor(nombre,color,precio,modelo){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.modelo = modelo;
        this.#maximoDescuento = 0.3;
        this.#precioCompraDistribuidor  = 1200;
        this.#nombreVendedor = "Juan";
    }

    // Método para cambiar el color de la silla a negro
    cambiarColor(){
        this.color = "Negro";
    }

    // Método para cambiar el precio de la silla
    cambiarPrecio (nuevoPrecio){
        this.precio = nuevoPrecio;
    }

    // Método para cambiar el modelo de la silla
    cambiarModelo (nuevoModelo){
        this.modelo = nuevoModelo;
    }

    // Método para cambiar el nombre del vendedor
    cambiarNombreVendedor(nombreVendedor){
        this.#nombreVendedor = nombreVendedor;
    }

    // Método privado para mostrar el nombre del vendedor
    #mostrarVendedor(){
        console.log(this.#nombreVendedor);
    }
}

// Método para mostrar el precio de la silla (agregado al prototipo)
silla.prototype.mostrarPrecio = function(){
    console.log(this.precio);
}

// Creación de una instancia de Silla
const sillaOficina = new silla("Rimax","Blanco",320, "AZD539");

// Mostrar información de la silla de oficina y su precio
console.log(sillaOficina);
sillaOficina.mostrarPrecio();

// Cambiar el precio de la silla y mostrar el nuevo precio
sillaOficina.cambiarPrecio(450);
sillaOficina.mostrarPrecio();


//Herencia 

// Herencia: Clase SillaGamer que hereda de Silla
class sillaGamer extends silla{
    constructor(nombre,color,precio,modelo,tamaño,importada,diseño){
        super(nombre,color,precio,modelo);
        this.tamaño = tamaño;
        this.importada = importada;
        this.diseño = diseño;
        this.material = "Cuero";        
    }
}

// Creación de una instancia de SillaGamer
const nuevaSillaGamer = new sillaGamer ("Sublime","Rojo",520,"AGDE520",50,true,"New Wave");

// Mostrar información de la nueva silla gamer
console.log(nuevaSillaGamer);

// Intentar acceder al método privado mostrarVendedor() de la silla de oficina y de la silla gamer
console.log(sillaOficina.mostrarVendedor()); // No se puede acceder directamente a un método privado fuera de la clase
console.log(nuevaSillaGamer.mostrarVendedor());