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

async function funcionAsincronaDeclarada (){//async indica es asincona
    try{
        console.log(`Inicio de función objeto`);
        let obj=await cuadrado(0);//espera resultado
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(1);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(2);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(3);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(4);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(5);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
    }catch(err){
        console.error(err);
    }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada=async()=>{
    try{
        let obj=await cuadrado(6);//espera resultado
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(7);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(8);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(9);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(10);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        obj=await cuadrado(11);
        console.log(`Función asincrona: ${obj.valor}, ${obj.resultado}`);
        console.log(`Fin funcion asincrona`);
    }catch(err){
        console.error(err);
    }
}

funcionAsincronaExpresada();