let Flag=0;
window.addEventListener("scroll",(e)=>{
    
    if(window.pageYOffset> 140){
        if(Flag==0){
            Flag=1;
            document.querySelector("header").classList.add("scroll")
        }
    }else{
        Flag=0;
        document.querySelector("header").classList.remove("scroll")
    }
})
