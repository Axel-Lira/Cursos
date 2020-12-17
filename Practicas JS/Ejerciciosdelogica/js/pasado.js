const pasado = (fecha=undefined)=>{
    if(!fecha) return console.warn("ingresa la fecha");
    if(!fecha instanceof Date) return console.warn("Esto no es una fecha");
    let actual= new Date();
    actual=actual.getTime();
    fecha=fecha.getTime();
    let total=((((((actual-fecha)/1000)/60)/60)/24)/365);
    console.log(`${Math.round(total)} años`)
}

pasado(new Date(1993, 9,26));