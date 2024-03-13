//Clase #6

//Clases

class silla {
    #precioCompraDistribuidor;
    #maximoDescuento;
    #nombreVendedor;

    //Constructor
    constructor(nombre,color,precio,modelo){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.modelo = modelo;
        this.#maximoDescuento = 0.3;
        this.#precioCompraDistribuidor  = 1200;
        this.#nombreVendedor = "Juan";
    }

    cambiarColor(){
        this.color = "Negro";
    }

    cambiarPrecio (nuevoPrecio){
        this.precio = nuevoPrecio;
    }

    cambiarModelo (nuevoModelo){
        this.modelo = nuevoModelo;
    }

    cambiarNombreVendedor(nombreVendedor){
        this.#nombreVendedor = nombreVendedor;
    }

    #mostrarVendedor(){
        console.log(this.#nombreVendedor);
    }
}

silla.prototype.mostrarPrecio = function(){
    console.log(this.precio);
}

const sillaOficina = new silla("Rimax","Blanco",320, "AZD539");
console.log(sillaOficina);
sillaOficina.mostrarPrecio();
sillaOficina.cambiarPrecio(450);
sillaOficina.mostrarPrecio();


//Herencia 

class sillaGamer extends silla{
    constructor(nombre,color,precio,modelo,tamaño,importada,diseño){
        super(nombre,color,precio,modelo);
        this.tamaño = tamaño;
        this.importada = importada;
        this.diseño = diseño;
        this.material = "Cuero";        
    }
}

//console.log(sillaGamer);
const nuevaSillaGamer = new sillaGamer ("Sublime","Rojo",520,"AGDE520",50,true,"New Wave");
console.log(nuevaSillaGamer);
console.log(sillaOficina.mostrarVendedor());
console.log(nuevaSillaGamer.mostrarVendedor());