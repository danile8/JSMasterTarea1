/* 1.Escribir una función a la que se pasa como parámetro un número entero y
devuelve como resultado un texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función. */

function parImpar(numero){
    if(numero % 2 == 0){
        return "El numero es par"
    }
    else{
        return "El numero es impar"
    }
}

/* 2.Según este string "abcdefghijklmnñopqrstuvwxyz", hacer una función que recibe un parámetro 
(un caracter o una letra), y la función me debe devolver en qué posición en la cadena del string 
se encuentra el caracter entregado como argumento. Para realizar esto deben buscar en el prototipo String. */


function posicion (letra){
 var string = "abcdefghijklmnñopqrstuvwxyz";
 var indice = string.indexOf(letra);
 return "La posicion de " + letra + " es: " + indice;

}

/* Hacer una función que reciba un precio, y este me devuelva el precio con impuesto de 0.19%. 
Si yo ingreso 1000 a la función, me debería retornar con el formato "El precio con impuesto es de $1190" */

function precioConIva(precio){
    return "El precio con impuesto es de $" + precio*1.19;
}

/* 4.Hacer un closure con contexto de "una persona tira un dado". */

/* function nuevoDado(nombre){
     function lanzarDado(){
        var numero=  Math.ceil(Math.random()*6)
        return numero
    }
    function mensaje(){
        var numeroRandom = lanzarDado()
        console.log(nombre + " tiró un dado y salió " + numeroRandom)
    }
    return mensaje
} */
function nuevoDado(nombre){
    
    function mensaje(){
        var numero = Math.ceil(Math.random()*6)
        return console.log(nombre + " tiró un dado y salió " + numero)
    }
    return mensaje
}

/* 5.Generar un prototipo llamado Persona que va a recibir 2 argumentos (nombre completo y edad). 
El prototipo debe tener un método que sea guardarEnLocalStorage y guardarEnSessionStorage, 
estos métodos deben guardar nombre completo y edad en el local storage y session storage. 
Al guardar estos elementos, deben visualizarse a través del debugger de chrome o de algún otro browser. */

function Persona(nombreCompleto, edad){
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
}
Persona.prototype.guardarEnLocalStorage = function (){
    localStorage.setItem("nombre", this.nombreCompleto)
    localStorage.setItem("edad", this.edad)
};

Persona.prototype.guardarEnSessionStorage = function (){
    sessionStorage.setItem("nombre", this.nombreCompleto)
    sessionStorage.setItem("edad", this.edad)
}
