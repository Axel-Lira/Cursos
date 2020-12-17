let cadena="Hola Mundo",
caracter=4;
if (typeof(cadena)==`string`){
    function cortarCadena(){
        console.log(cadena.substring(0,caracter));
    }
    cortarCadena();
}else{
    console.log(`Favor de ingresar una cadena`);
}