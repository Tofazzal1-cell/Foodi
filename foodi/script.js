let themebtn=document.getElementById("themebtn")
let style=document.getElementById("style")

themebtn.addEventListener("click", function(){
    let stylefile = style.getAttribute("href")
    console.log(stylefile)
    
    if(style.getAttribute("href")=="./css/style.css"){
        style.setAttribute("href", "./css/dark.css");

    }else{
        style.setAttribute("href", "./css/style.css");
    }
})