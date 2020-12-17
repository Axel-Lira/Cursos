console.log("**********BOM: Propiedades y Eventos**********");
window.addEventListener("resize",(e)=>{
    console.clear();
    console.log("**********Evento Resize**********")
    console.log(window.innerWidth);//tamaño visible
    console.log(window.innerHeight);//tamaño visible
    console.log(window.outerWidth);//tamaño navegador
    console.log(window.outerHeight);//tamaño navegador
    console.log(e);
});

window.addEventListener("scroll",(e)=>{
    console.clear();
    console.log("**********Evento Scroll**********");
    console.log(window.scrollX);//cuanto se aleja de top
    console.log(window.scrollY);//cuanto se aleja de left
    console.log(e);
});

window.addEventListener("load",(e)=>{
    //console.clear();
    console.log("**********Evento Load**********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded",(e)=>{
    //console.clear();
    console.log("**********Evento DOMContentLoaded**********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});
