let BurgerIcon=document.querySelector(".burger-icon");


BurgerIcon.addEventListener("click",()=>{
    BurgerIcon.previousElementSibling.classList.toggle("active")
})