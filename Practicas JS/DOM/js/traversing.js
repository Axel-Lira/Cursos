console.log("**********Traversing: Recorriendo el DOM**********");
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);//primer nodo
console.log($cards.firstElementChild);//primer elemento
console.log($cards.lastChild);//ultimo nodo
console.log($cards.lastElementChild);//ultimo elemento
console.log($cards.previousSibling);//nodo previo
console.log($cards.previousElementSibling);//elemento previo
console.log($cards.nextSibling);//nodo siguiente
console.log($cards.nextElementSibling);//elemento siguiente
console.log($cards.closest("div"));//mas cercano
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));