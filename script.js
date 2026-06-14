const questions = [
    {
        question: "Who is known as God of the Cricket ?",
        answers: [
            {text : "Virat Kohli" ,correct: false},
            {text : "Rohit Sharma" ,correct: false},
            {text : "Sachin tendulkar" ,correct: true},
            {text : "virendr sahevag" ,correct: false},
        ]
    },
    {
        question: "Who is known as Hitman ?",
        answers: [
            {text : "Virat Kohli" ,correct: false},
            {text : "virendr sahevag" ,correct: false},
            {text : "Sachin tendulkar" ,correct: false},
            {text : "Rohit Sharma" ,correct: true},
        ]
    },
    {
        question: "Who is known as Chase Master ?",
        answers: [
            {text : "Virat Kohli" ,correct: true},
            {text : "Rohit Sharma" ,correct: false},
            {text : "Sachin tendulkar" ,correct: false},
            {text : "virendr sahevag" ,correct: false},
        ]
    },
    {
        question: "Who is higest wicket tecker in the IPL ?",
        answers: [
            {text : "Bumarah" ,correct: false},
            {text : "Chahal" ,correct: true},
            {text : "Sachin tendulkar" ,correct: false},
            {text : "Malinga" ,correct: false},
        ]
    },
]
const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

 function startQuize(){
    currentQuestionIndex=0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion(); 
 }
 function showQuestion(){
     resetState();
        let currentQuestion =questions[currentQuestionIndex];
        let questionNo =currentQuestionIndex+1;
        questionElement.innerHTML = questionNo +". "+currentQuestion.question;

        currentQuestion.answers.forEach(answer =>{
            const button = document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerbuttons.appendChild(button);
            if(answer.correct){
                button.dataset.correct =answer.correct;
            }
            button.addEventListener("click",selectAnswer)
        });
 }
 
   function resetState(){
      nextbutton.style.display ="none";
      while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
      }
   }
   function selectAnswer(e){
        const selectedbtn =e.target;
        const isCorrect = selectedbtn .dataset.correct === "true";
        if(isCorrect){
            selectedbtn.classList.add("correct");
            score++;
        }else{
            selectedbtn.classList.add("incorrect");
        }
        Array.from(answerbuttons.children).forEach(button =>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled =true;
        });
        nextbutton.style.display ="block";
   }
   function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display ="block";
   }
  
   function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
   }

   nextbutton.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuize();
        }
   });
 startQuize();

