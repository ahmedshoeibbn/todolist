let inbutTodo = document.getElementById("inbutTodo");
let sub = document.getElementById("sub");
let todocontento = document.getElementById("todocontento");
let srch = document.getElementById("searchs")
let logo = document.getElementById("logo")
// srch.style.display="inline-block"
let arrayi = []

if (localStorage.getItem("key1") != null) {
  arrayi = JSON.parse(localStorage.getItem("key1"));
  display()
}




inbutTodo.oninput = function() {
  var srchElement = document.getElementById("searchs");
  if (inbutTodo.value) {
    srchElement.style.display = "inline-block";
  } else {
    srchElement.style.display = "none";
  }
  behavior:smoth;

};





/*this is a check
 console.log(inbutTodo,sub);*/

 sub.onclick = function () {
arrayi.push(inbutTodo.value)
// console.log(arrayi);
display()
clrear()

localStorage.setItem("key1",JSON.stringify(arrayi))
} 



// if(inbutTodo.value != ""){
// document.searchs.style.display="block"
// }

function display(){
cartona="";
for (let i = 0; i < arrayi.length; i++) {
// console.log(arrayi[i]);
    cartona += `
    <div class="content" id="content">
    <i class="fa-sharp fa-solid fa-star"></i>

    <p>${arrayi[i]}</p>
        <i   onclick="del(${i})"  class="fa-sharp  fa-solid fa-trash"></i>
        </div>
    `
}
todocontento.innerHTML=cartona;

}


function del(i){
console.log(i);
arrayi.splice(i,1)
display()
localStorage.setItem("key1",JSON.stringify(arrayi))

}

function clrear(){
    inbutTodo.value = ""

}

window.onscroll = function(){

if (scrollY >= 350) {
    logo.style.display =" block"
}else{
    logo.style.display =" none"

}

}
logo.onclick = function () {
scroll({
    top:0,
    left:0,
    behavior:"smooth",
    })
}


// logo.onclick = function () {
//     scroll ({
//         top:0,
//         left:0,
//         behavior:"smooth"
//     })
//     }