let cadenap;
const palindromo=(cadena="")=>{
    cadena=cadena.toLowerCase().replace(/ /g,"");
    cadenap=cadena.split(``).reverse().join(``);
    if(!cadena)return console.warn("Ingresa una cadena");
    if(cadena===cadenap) return console.log("Es palindromo");
    if(cadena!=cadenap) return console.log("No es palindromo");
}

palindromo("Anita lava la tina");