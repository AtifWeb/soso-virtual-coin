let QuestionHeads=document.querySelectorAll(".question-box .head");



QuestionHeads.forEach(EachQuestionHead=>{
    EachQuestionHead.addEventListener("click",(e)=>{
        let Element=e.target;
        let QuestionBody=e.target.parentElement.lastElementChild;

        
        Element.classList.toggle("active")
        QuestionBody.classList.toggle("active")
    })
})