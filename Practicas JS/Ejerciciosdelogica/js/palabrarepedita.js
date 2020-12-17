let i=0,
contar=0;
const palabraRepetida=(cadena="",palabra="")=>{
    if(!cadena)return console.warn("Ingresa una cadena");
    while(i!==-1){
        i=cadena.indexOf(palabra,i);
        if(i!==-1){
            i++;
            contar++;
        }
    }
    return console.log(`La palabra aparece ${contar} veces`);
}

palabraRepetida("Hola Hola Hola Hola Hola Hola","Hola");