console.log("**********Eventos con Parámetros y Remover Eventos**********");
const $eventoRemover=document.getElementById("evento-remover");

function saludar(nombre="Desconocid@"){
    alert(`Hola ${nombre}`);
}
$eventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar("Axel");
});

const removerDobleClick=(e)=>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled=true;
}
$eventoRemover.addEventListener("dblclick",removerDobleClick);