function addnew(){
    var pop=document.getElementById("popup")
    var popupitem=document.getElementById("popup-inside")
    pop.style.display="block"
    popupitem.style.display="block"
}
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(){
    var pop=document.getElementById("popup")
    var popupitem=document.getElementById("popup-inside")
    pop.style.display="none"
    popupitem.style.display="none"
})
var add=document.getElementById("adds")
add.addEventListener("click",function(){
    var what=document.getElementById("whats")
    var when=document.getElementById("whens")
    var list=document.getElementById("list")
    var div=document.createElement("div")
    // var h2=div.appendChild(document.createElement("h2"))
    // var h3=div.appendChild(document.createElement("h3"))
    // // var btn=div.appendChild(document.createElement("button"))
    // h2.textContent=what.value 
    // h3.textContent=when.value 
    // btn.innerHTML='<button onclick="done(event)" id="btn">Done</button>'
    div.setAttribute("id","list")
    div.innerHTML=`<h2>${what.value}</h2>
            <h3>${when.value}</h3>
            <button onclick="done(event)" id="btn">Done</button>`
    var container=document.getElementById("todolist")
    container.appendChild(div)
    var pop=document.getElementById("popup")
    var popupitem=document.getElementById("popup-inside")
    pop.style.display="none"
    popupitem.style.display="none"



})
function done(event){
    event.target.parentElement.style.opacity="0.8"
}