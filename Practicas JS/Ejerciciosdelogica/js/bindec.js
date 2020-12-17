const binDec=(numero=undefined,base=undefined)=>{
    if(!numero||!base)return console.warn("Ingrese todos los datos");
    if(typeof(numero)!=`number`||typeof(base)!=`number`) return console.warn("El tipo de dato es incorrecto");
    if(!/2|0/.test(base)) return console.warn("Solo se puede usar base 2 o 10")
    if(base==2){
        numero=parseInt(numero,base);
        console.log(numero);
    }
    if(base==10){
        numero=numero.toString(2);
        console.log(numero);
    }
}

binDec(100,10);