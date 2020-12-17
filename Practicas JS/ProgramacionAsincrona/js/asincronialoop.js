/*Codigo sincrono bloqueante */
(()=>{
    console.log("Código Síncrono");
    console.log("inicio");
    
    function dos(){
        console.log("Dos");
    }
    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }
    uno();
    console.log("Fin");
})();
/*codigo asincrono no bloquenate*/
(()=>{
    console.log("Código Asíncrono");
    console.log("inicio");
    
    function dos(){
        setTimeout(function(){
            console.log("Dos");
        },1000);
    }
    function uno(){
        setTimeout(function(){
            console.log("Uno");
        },0);
        dos();
        console.log("Tres");
    }
    uno();
    console.log("Fin");
})();