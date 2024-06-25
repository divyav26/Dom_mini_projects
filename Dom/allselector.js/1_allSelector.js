//all selector

const classSelector = document.querySelector("#para")
console.log(classSelector)

//change color for first li

const changeColor = document.querySelector('ul')
console.log(changeColor)

const changeli = document.querySelector('li')
console.log(changeli)

changeli.style.background="green"
changeli.innerText="divya"

//

const templist = document.querySelectorAll("h1")
console.log(templist)
//this is return Node list 



templist[0].style.color="red"//


const headingAll = document.getElementsByClassName("heading")
console.log(headingAll)//it retrun Html Collection

//we can convert html collection to array using Array.from()
const convertheading = Array.from(headingAll)
console.log(convertheading)
convertheading.forEach((item)=>{
    item.style.background="pink"
})