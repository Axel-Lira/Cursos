let numeror;
const capicua=(numero)=>{
    if(!numero) return console.warn(("Ingresa un numero"));
    if(typeof(numero)!=`number`)return console.warn("Eso no es un numero")
    numero=numero+"";
    numeror=numero.split(``).reverse().join(``);
    if(numero==numeror)return console.log(("El numero es capicúa"));
    if(numero!=numeror)return console.log(("El numero no es capicúa"));
}

capicua(55);