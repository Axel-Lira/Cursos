const correo=(cadena=undefined)=>{
    if(!cadena)return console.warn("Ingrese el correo");
    if(!/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(cadena))return console.warn("Email sin formato valido");
    console.log("El correo es correcto");
}

correo("axel@gmail.com");