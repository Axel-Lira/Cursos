const arrOrdenado=(arreglo=undefined)=>{
    if(!arreglo)return console.warn("El arreglo esta vacio");
    if(!(arreglo instanceof Array))return console.warn("El tipo de dato es incorrecto");
    for(let i=0; i<arreglo.length;i++){
        if(!/[0-9]/.test(arreglo[i])){
            return console.warn("El arreglo solo puede contener numeros");
        }
    }
    return console.log({
        mayormen:arreglo.map(n=>n).sort(),
        menormay:arreglo.map(n=>n).sort().reverse()
    });
}

arrOrdenado([1,2,3,4]);