console.log("**********BOM: Objetos: URL, Historial y Navegador**********");
console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();
console.log("********** Objeto Historial (history) **********");
console.log(history);//historial pestaña en la que te encuentras
console.log(history.length);
//history.forward(1);//avanza esas posiciones en el historial
//history.go(-3);//puede avanzar atras o adelante dependiendo del valor positivo(delante) o negativo(atras)
//history.back(2);//regresa esas posiciones en el historial
console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);