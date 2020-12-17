const parImpar=(numero=0)=>{
    if(!numero)return console.warn("Ingrese un digito");
    if(typeof(numero)!=`number`) return console.warn("Ingrese el tipo de dato correcto");
    if(numero%2==0) return console.log("El numero es par");
    if(numero%2!=0) return console.log("El numero es inpar")
}

parImpar(9);