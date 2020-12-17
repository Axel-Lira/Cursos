const nombre=(cadena=undefined)=>{
    if(!cadena)return console.warn("Ingrese cadena");
    if(typeof(cadena)!="string")return console.warn("El tipo de dato es incorrecto");
    if(cadena.match(/[0-9]/ig))return console.warn("Tu nombre no puede incluir numeros");
    if(cadena.match(/[,.{}´+¿'|;:_¨*°!"#$%&/()=?¡^`~¬]/ig))return console.warn("Solo se aceptan letras");
    return console.log(`Hola ${cadena}`);
}

nombre("Axel");