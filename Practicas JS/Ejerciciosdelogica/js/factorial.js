const factorial=(numero="")=>{
    if(numero===0)return console.log(1);
    if(!numero) return console.warn("ingrese un digito");
    if(typeof(numero)!="number") return console.warn("ingrese un numero");
    if(Math.sign(numero)===-1)return console.warn("El número no puede ser negativo");
    let factorialr=1;
    for(let i=1;i<=numero;i++){
        factorialr=factorialr*i;
    }
    console.log(`El factorial de ${numero} es ${factorialr}`);
}

factorial(2);