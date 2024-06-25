//add li element

const addLang = (language)=>
{
    const li = document.createElement("li")
    li.innerHTML = `${language}`
    document.querySelector('.lang').appendChild(li)
    //it way is not good
    //because it travels all node
}

// 2 way with opti

const addOpti= (lang)=>{
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(lang))
    document.querySelector('.lang').appendChild(li)
}

addLang("java")
addOpti("Reactjs")


// Edit 

const secondlang = document.querySelector("li:nth-child(2)")
// secondlang.innerHTML="mojo"it is not good waay

const newli = document.createElement("li")
newli.textContent="mojo"
secondlang.replaceWith(newli)

const Firstlang = document.querySelector('li:first-child')
Firstlang.outerHTML="<li>Java</li>"

//remove

const removeFirst = document.querySelector('li')
removeFirst.remove()