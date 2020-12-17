let cadenan;
const eliminarPatron=(cadena="",patron)=>{
    cadenan=cadena.replace(new RegExp(patron,"ig"),"");
    if(!cadena)return console.warn(("Ingrese una cadena"));
    if(!patron)return console.warn(("Ingrese un patron"));
    else return(console.log(cadenan));
}
eliminarPatron("xyz1,xyz2","xyz");