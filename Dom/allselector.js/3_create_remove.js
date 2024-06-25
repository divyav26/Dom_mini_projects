//create new element in js

const div = document.createElement("div")
console.log(div)
div.className="parernt"
div.id="parDiv"
// div.innerHTML="Welcome"

div.style.color="white"

const textNode = document.createTextNode("Welcome to create remove")
document.body.appendChild(div)