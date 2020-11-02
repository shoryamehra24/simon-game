

document.querySelector(".dark").addEventListener("click",function changeColor(){
    if(document.querySelector(".dark").innerText="Change Theme"){
     document.querySelector("body").classList.toggle("dark-mode")
    
    }
else
{document.querySelector("body").classList.toggle("dark-mode")
}
})



document.querySelector(".dark").addEventListener("click",function(){
    var audio = new Audio('sounds/button.mp3');
audio.play();

})
