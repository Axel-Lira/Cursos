function cuadrado(valor){
    if (typeof valor !=="number"){
        return Promise.reject(`El valor ${valor} no es numerico`);
    }
    return new Promise((resuelve,rechaza)=>{
        setTimeout(()=>{
            resuelve({
                valor,
                resultado: valor*valor
            });
        },0|Math.random()*1000);
    });
}

cuadrado(0)
.then(obj=>{
    console.log("Inicio de la promesa");
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return cuadrado(1);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return cuadrado(2);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return cuadrado(3);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return cuadrado(4);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return cuadrado(5);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    console.log(`Fin de la promesa`)
})
.catch(err=> console.log(err));