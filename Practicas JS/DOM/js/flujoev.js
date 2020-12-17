console.log("**********Flujo de Eventos (Burbuja y Captura)**********");
const $divsEventos=document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);
function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);//this refiere a cada div en cuestion
    e.stopPropagation();//detiene la propagación
}
/*$divsEventos.forEach(div=>{
    div.addEventListener("click",flujoEventos);//tercer elemento false o no especificar refiera a fase de burbuja del mas interno al mas externo, 
    //div.addEventListener("click",flujoEventos,true);//la fase de captura del externo al interno usa true
    //div.addEventListener("click",flujoEventos,{
        //capture:false, otra forma de usar burbuja
        //capture:true, otra forma de usar captura
        //capture:false,
        //once:true//solo se ejecuta una vez el evento
    //});
})*/