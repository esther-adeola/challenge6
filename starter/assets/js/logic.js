var startScreen = document.querySelector("#start-screen")
var startBtn = document.querySelector("#start")
var quizSection = document.querySelector("#questions")
var questionText = document.querySelector("#question-title")
var option1 = document.querySelector("#btn1")
var option2 = document.querySelector("#btn2")
var option3 = document.querySelector("#btn3")
var option4 = document.querySelector("#btn4")

var index = 0

startBtn.addEventListener("click", function(){
    startScreen.classList.add("hide")
    quizSection.classList.remove("hide")
    quizSection.classList.add("start")

    questionText.textContent = questions[index].question
    option1.textContent = questions[index].answer1
    option2.textContent = questions[index].answer2
    option3.textContent = questions[index].answer3
    option4.textContent = questions[index].answer4

    option1.addEventListener("click", nextQuestion)    
    option2.addEventListener("click", nextQuestion)    
    option3.addEventListener("click", nextQuestion)    
    option4.addEventListener("click", nextQuestion)    
})

function nextQuestion (){
    index++
    questionText.textContent = questions[index].question
    option1.textContent = questions[index].answer1
    option2.textContent = questions[index].answer2
    option3.textContent = questions[index].answer3
    option4.textContent = questions[index].answer4
}




