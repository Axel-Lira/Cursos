console.log("**********Modificar Elementos (Old Style)**********");
const $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);//clona estructura completa true, con false solo clona la estructura padre
$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");
//$cards.replaceChild($newCard, $cards.children[2]);remplaza en la posicion
//$cards.removeChild($cards.lastElementChild); eliminar ultima
$cards.insertBefore($newCard, $cards.firstElementChild);//inserta antes de
document.body.appendChild($cloneCards);//agrega al final