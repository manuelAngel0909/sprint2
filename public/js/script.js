;
let hideText_button =document.getElementById("hideText_button");

let hideText= document.getElementById("hideText");
hideText_button.addEventListener("click", toogleText);

function toogleText(){
    hideText_button.classList.toogle("show")
    if(hideText.classList.contains("show")){
        hideText_button.innerHTML= "Leer Menos"
    }
    else{
        hideText_button.innerHTML="Leer Mas"
    }

}
