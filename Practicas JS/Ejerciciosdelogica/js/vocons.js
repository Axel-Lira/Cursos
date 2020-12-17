const voCons=(cadena=undefined)=>{
    if(!cadena)return console.warn();("Ingrese la cadena");
    if(typeof(cadena)!="string")return console.warn("El tipo de dato es incorrecto");
    let nvo=cadena.match(/[aeiou]/gi).length;
    let cons=cadena.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    console.log(`Esta cadena contiene ${nvo} vocales y ${cons} consonantes`)
}

voCons("Hola Mundo");