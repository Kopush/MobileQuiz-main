const questions = [
    {
        question : "One of the keywords of the Java language?",
        answers: [
            { text: "false"},  
            { text:  "null"},
            { text: "default"},
            { text: "double"}
        ],
        right_answers:["default"],
    },
  
    {
        question : "What value can a Boolean type variable take?",
        answers:[
          { text: "1"},
          { text: "false"},
          { text: "null"},
          { text: "0"}
        ],
        right_answers:["false"],
    },
  
    {
        question : "How many objects are generated when initializing the new int array[3][]?",
        answers:[
          { text: "1"},
          { text: "3"},
          { text: "2"},
          { text: "0"}
        ],
        right_answers:["1"],
    },
  
    {
        question : "Which method should be redefined to implement rendering of the component's appearance?",
        answers:[
          { text: "paint"},
          { text: "show"},
            { text: "repaint"},
          { text: "add"}
                ],
        right_answers:["paint"],
    },
  
    {
        question : "Which class does the InputStream OutputStream inherit from?",
        answers:[
          { text: "AbstractStream"},
          { text: "Object"},
          { text: " IOWriter"},
          { text: "Final"}
        ],
        right_answers:["Object"],
    },
  
    {
        question : "Note the correct statement regarding the Java and JavaScript languages",
        answers:[
          { text: "JavaScript is synonymous with Java"},
          { text: "their specifications are closed"},
          { text: "both languages are cross-platform"},
          { text: "the languages are based on C++"}
        ],
        right_answers:["both languages are cross-platform"],
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
  