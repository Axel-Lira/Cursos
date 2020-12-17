const promedio=(arreglo=undefined)=>{
    if(!arreglo)return console.warn("El arreglo esta vacio");
    if(!(arreglo instanceof Array))return console.warn("El tipo de dato es incorrecto");
    for(let i=0; i<arreglo.length;i++){
        if(!/[0-9]/.test(arreglo[i])){
            return console.warn("El arreglo solo puede contener numeros");
        }
    }
    console.log(`El promedio es ${(arreglo.reduce((t,n)=>t+n,0))/arreglo.length}`);
}

promedio([9,8,7,6,5,4,3,2,1,0]);