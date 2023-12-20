const questions = [
  {
      question : "The name of the main program in C++?",
      answers: [
          { text: "mian"},  
          { text:  "main"},
          { text: "mein"},
          { text: "maen"}
      ],
      right_answers:["main"],
  },

  {
      question : "Which variable names are correct? (select several possible answers)",
      answers:[
        { text: "1Bа"},
        { text: "D234"},
        { text: "_gh"},
        { text: "“D(f)”"}
      ],
      right_answers:["D234"],
  },

  {
      question : "Which operations can be overloaded?",
      answers:[
        { text: "unary and binary"},
        { text: "only unary ones"},
        { text: "binary only"},
        { text: "logical and relational"}
      ],
      right_answers:["unary and binary"],
  },

  {
      question : "Choose the correct statement",
      answers:[
        { text: "an integer constant can be assigned a real variable"},
        { text: "an integer variable can be assigned a real constant"},
          { text: "an entire constant can be assigned an entire variable"},
        { text: "all options are correct"}
              ],
      right_answers:["an integer variable can be assigned a real constant"],
  },

  {
      question : "A number can be stored in an unsigned char variable ___",
      answers:[
        { text: "-1"},
        { text: "1213"},
        { text: "13"},
        { text: "-13"}
      ],
      right_answers:["13"],
  },

  {
      question : "From which tag descriptive list starts ?",
      answers:[
        { text: "LL"},
        { text: "DL"},
        { text: "DD"},
        { text: "DS"}
      ],
      right_answers:["DL"],
  },
];

const questionElement = document.getElementById("question");
const answer_buttons = document.getElementById("answer__buttons");
const next_button = document.getElementById("next__btn");

let currentButton;

let currentQuestionIndex =0;
let score = 0;

var delay = 3000;
setTimeout( startQuiz, delay )


//Старт тестирования
function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    next_button.innerHTML = "Next";
    showQuestion();
}


function showQuestion()
{
  resetState();
    document.getElementById("back").classList.remove("backgrnd");
    document.getElementById("back").classList.add("purple__background");
    
    document.getElementById("navigate_tomain").classList.remove("nav_style");
    document.getElementById("navigate_tomain").classList.add("nav_style_none");
    
    document.getElementById("Qform").classList.remove("Question__section_score");
    document.getElementById("Qform").classList.add("Question__section");
   
    document.getElementById("wrk_space").classList.remove("Workspace_score");
    document.getElementById("wrk_space").classList.add("Workspace");
    
    document.getElementById("next__btn").classList.remove("nxtBtn_score");
    document.getElementById("next__btn").classList.add("nxtBtn");
   
    document.getElementById("img_score").classList.remove("Img_complete_score");
    document.getElementById("img_score").classList.add("Img_complete");
   
//Добавление к вопросу его порядкового номера

  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  //Окрашивание border
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("static-border")
    answer_buttons.appendChild(button);

    button.addEventListener("click", selectAnswer);
  });
}

function resetState()
{
    next_button.style.display = "none";
    while(answer_buttons.firstChild)
    {
      answer_buttons.removeChild(answer_buttons.firstChild);
    }
}

function selectAnswer(e)
{
  const selectedBtn = e.target;// Выбор конкретной кнопки
  
  currentButton = selectedBtn;
  next_button.style.display = "block";
}

function showScore()
{
  resetState();

    document.getElementById("back").classList.remove("purple__background");
    document.getElementById("back").classList.add("backgrnd");

    document.getElementById("navigate_tomain").classList.remove("nav_style_none");
    document.getElementById("navigate_tomain").classList.add("nav_style");

    document.getElementById("Qform").classList.remove("Question__section");
    document.getElementById("Qform").classList.add("Question__section_score");

    document.getElementById("wrk_space").classList.remove("Workspace");
    document.getElementById("wrk_space").classList.add("Workspace_score");
    
    document.getElementById("next__btn").classList.remove("nxtBtn");
    document.getElementById("next__btn").classList.add("nxtBtn_score");

    document.getElementById("img_score").classList.remove("Img_complete");
    document.getElementById("img_score").classList.add("Img_complete_score");


  questionElement.innerHTML = `You get ${score} points in ${questions.length} questions`;
  next_button.innerHTML = "Restart";
  next_button.style.display = "block";
}


function handleNextButton()
{
  let currentQuestion = questions[currentQuestionIndex];

  if (currentButton.innerHTML == currentQuestion.right_answers)
      {
        currentButton.classList.add("green-border");
        score++;//Начисление очков 
        
        currentQuestionIndex++;
  if(currentQuestionIndex < questions.length)
  {
    var delay = 3000;
        setTimeout( showQuestion, delay )
  }
  else
  {
    var delay = 3000;
        setTimeout( showScore, delay )
  }
      } 
      else  
      {
        currentButton.classList.add("red-border");
        
        currentQuestionIndex++;
  if(currentQuestionIndex < questions.length)
  {
    var delay = 3000;
        setTimeout( showQuestion, delay )
    
  }
  else
  {
    var delay = 3000;
        setTimeout( showScore, delay )
  }
      }

  
}

next_button.addEventListener("click",() => {
  if(currentQuestionIndex < questions.length)
  {
    handleNextButton();
  }
  else
  {
    document.getElementById("back").classList.add("purple__background");
    startQuiz();
  }
} );

startQuiz();
