console.log("**********Texto y HTML**********");
const $whatIsDOM =document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;
//$whatIsDOM.innerText = text; internet explorer
$whatIsDOM.textContent = text;//ingresa el texto plano
$whatIsDOM.innerHTML = text;//ingresa como html al nodo
$whatIsDOM.outerHTML = text;//independiza 