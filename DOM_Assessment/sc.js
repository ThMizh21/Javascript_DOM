const container=document.getElementsByClassName("container");
const h1= document.querySelector("h1");
const add = document.getElementById("addBox");
const remove = document.getElementById("removeBox");
const show = document.getElementById("showBoxCount");
const alrt = document.getElementById("showAlert");
const link = document.getElementById("addLink");

alrt.addEventListener("click", ()=>{
     alert(h1.textContent);
});

add.addEventListener("click", () => {
    const newdiv = document.createElement("div");
    newdiv.textContent= "New Box";
    newdiv.classList.add("box-style")
    container[0].appendChild(newdiv);

});

remove.addEventListener("click", () => {
    const di = document.querySelectorAll("div");
    if (di.length > 1) {
        di[di.length - 1].remove();
    }  

});

link.addEventListener("click",()=>{
    
    let a = document.createElement('a');
    a.textContent = "Hi thre...";
    a.href = "https://www.geeksforgeeks.org";
    document.body.appendChild(a);

});
show.addEventListener("click",()=>{
   let al = document.querySelectorAll("div");
   alert(al.length-1);
});

