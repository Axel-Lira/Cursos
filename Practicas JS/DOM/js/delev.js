console.log("**********Delegación de Eventos**********");
document.addEventListener("click",(e)=>{
    console.log("click en",e.target);
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
    if(e.target.matches(".eventos-flujo a")){
        alert("Hola Soy Axel :3");
        e.preventDefault();
    }
})