// let img = document.querySelectorAll("#img");
let show_img = document.querySelector(".show_img")
let close = document.querySelector("#close");
let min_show_img = document.querySelector("#min_img");

close.addEventListener("click",()=>{
    show_img.style.display="none";
})
window.addEventListener("click",(e)=>{
    if(e.target.tagName=="IMG"){
        show_img.style.display="flex";
    }
})

function MyFunction(img){
    min_show_img.src=img.src;
}