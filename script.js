
function color() {
  const colour =document.getElementById("header");

 if(colour.style.background===""){
     colour.style.background="black"
 }
 else{
     colour.style.background=""
 }
 
}
setInterval(color,3000)

const container = document.getElementById("header");
const butto = document.getElementById("c");
const butt =document.getElementById("d")

butto.addEventListener("click", () => {
    const newPar = document.createElement("p");
    newPar.textContent= "This is the third paragraph";
    container.appendChild(newPar);

});

butt.addEventListener("click", () => {
    const paras = document.querySelectorAll("p");
    if (paras.length > 0) {
        paras[paras.length - 1].remove();
    }  
   

});

