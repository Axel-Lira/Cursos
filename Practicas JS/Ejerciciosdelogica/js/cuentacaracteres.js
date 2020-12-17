let cadena="Hola Mundo";
if(typeof(cadena)==`string`){
    function cuenta(){
        console.log(`El texto contiene ${cadena.length} caracteres`);
    }
    cuenta();
}else{
    console.log(`Ingrese un texto`)
}
