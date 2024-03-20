//Clase #7
//DOM

import {crearEncabezado} from "./crearEncabezado";
import { crearBoton } from "./boton";

const main = document.createElement("div");
//Poner Clase 
main.classList.add("main-navigation");
main.innerHTML = crearEncabezado();

document.body.appendChild(main);

const divBoton = document.createElement("div");