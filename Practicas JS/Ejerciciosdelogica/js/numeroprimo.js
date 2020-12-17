const numeroPrimo=(numero=0)=>{
    if(!numero) return console.warn("Ingerese un digito");
    if(typeof(numero)!=`number`) return console.warn("El tipo de dato no es numero, favor de ingresar correctamente");
    if(Math.sign(numero)==-1) return console.warn("Los numeros primos solo son positivos");
    if(numero<=1)return console.warn("Los numeros primos son mayores a 1");
    let esPrimo=true;
    for(let i=2;i<numero;i++){
        if((numero%i)==0){
            esPrimo=false;
            break;
        }
    }
    return (esPrimo)
    ?console.log("Es primo")
    :console.log("No es primo");
}

numeroPrimo(7);