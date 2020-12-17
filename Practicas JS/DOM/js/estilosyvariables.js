console.log("**********Estilos y Variables**********");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");

$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.margin="auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//variables CSS - Custom Properties CSS
const $html=document.documentElement,
$body=document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor;

$html.style.setProperty("--dark-color","black");
varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color",varDarkColor);