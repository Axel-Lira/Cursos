const temperatura=(numero=undefined,unidad="")=>{
    if(!numero||!unidad) return console.warn("Ingresa los datos correspondientes");
    if(typeof(numero)!=`number`||typeof(unidad)!=`string`) return console.warn("Verifica los tipos de dato");
    if(unidad.length!==1||!/(c|f)/.test(unidad)) return console.warn("La unidad no es valida");
    if(unidad=="f"){
        numero=(5/9)*(numero-32);
        return console.log(`La temperatura en celsius es ${numero}`);
    }
    if(unidad=="c"){
        numero=((9/5)*numero)+32;
        return console.log(`La temperatura en fahrenheit es ${numero}`);
    }
}
temperatura(20,"c");