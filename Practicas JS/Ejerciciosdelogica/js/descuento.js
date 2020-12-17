const descuento=(numero=undefined,descuento=undefined)=>{
    if(!numero||!descuento) return console.warn("Ingresa los datos");
    if(typeof(numero)!=`number`||typeof(descuento)!=`number`) return console.warn("El tipo de dato es incorrecto");
    if(Math.sign(numero)==-1||Math.sign(descuento)==-1) return console.warn("Ningun numero puede ser negativo");
    descuento=(descuento/100);
    numero=numero-(numero*descuento);
    console.log(`${numero}`);
}

descuento(1000,20);