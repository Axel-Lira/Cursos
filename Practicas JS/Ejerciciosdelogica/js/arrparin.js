const arrParIn=(arreglo=undefined)=>{
    if(!arreglo)return console.warn("El arreglo esta vacio");
    if(!(arreglo instanceof Array))return console.warn("El tipo de dato es incorrecto");
    for(let i=0; i<arreglo.length;i++){
        if(!/[0-9]/.test(arreglo[i])){
            return console.warn("El arreglo solo puede contener numeros");
        }
    }
    console.log(`${arreglo.filter(n=>n%2==0)} son pares y ${arreglo.filter(n=>n%2!=0)} son inpares`);
}

arrParIn([1,2,3,4]);