export const PI=Math.PI;

export let usuario="Axel",
password="qwerty";

export /*default*/ function saludar(){//se exporta automaticamente, solo se puede una
    console.log("Hola modulos +ES6")
}

export default class Saludar{
    constructor(){
        console.log("Hola módulos +ES6 Class")
    }
}