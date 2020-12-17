const minMax=(arreglo=undefined)=>{
    if(!arreglo)return console.warn("El arreglo esta vacio");
    if(!(arreglo instanceof Array))return console.warn("El tipo de dato es incorrecto");
    for(let i=0; i<arreglo.length;i++){
        if(!/[0-9]/.test(arreglo[i])){
            return console.warn("El arreglo solo puede contener numeros");
        }
    }
    console.log(`El maximo es ${Math.max(...arreglo)} y el minimo es ${Math.min(...arreglo)}`);
}

minMax([1,2,3,4,5,6,7,8,9]);