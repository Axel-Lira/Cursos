console.log("**********Modificar Elementos (Cool Style)**********");
/* .insertAdjacent...
  .insertAdjacentElement(position, elemento)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, texto)
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/
let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");
$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards.prepend($newCard);hijo primero
//$cards.append($newCard);hijo ultimo
//$cards.before($newCard);anterior
//$cards.after($newCard);posterior