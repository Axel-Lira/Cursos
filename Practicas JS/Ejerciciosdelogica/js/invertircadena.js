const invertirCadena = (cadena="") => (!cadena)
?console.warn("No ingresaste una cadena")
:(console.log(cadena.split(``).reverse().join(``)));

invertirCadena("Hola Mundo");