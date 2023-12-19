const questions = [
    {
        question : "What is a regular expression?",
        answers: [
            { text: "template for searching files in a directory"},  
            { text:  "syntactically correct expression in Python"},
            { text: "a set of functions"},
            { text: "a template describing a set of strings"}
        ],
        right_answers:["a template describing a set of strings"],
    },
  
    {
        question : "Why use namespaces in XML?",
        answers:[
          { text: "to combine XML with different DTDs in one document"},
          { text: "namespaces allow you to include the same type of XML documents in each other"},
          { text: "namespaces allow you to specify options for an application that processes XML"},
          { text: "to go to the next record of the query result"}
        ],
        right_answers:["to combine XML with different DTDs in one document"],
    },
  
    {
        question : "Is it possible to use custom tags in XML?",
        answers:[
          { text: "cannot"},
          { text: "it is possible if namespaces are specified"},
          { text: "possible"},
          { text: "it is possible if the classes are specified"}
        ],
        right_answers:["possible"],
    },
  
    {
        question : "Which method allows you to find out if a given message has multiple parts?",
        answers:[
          { text: "items()"},
          { text: "get_main_type()"},
            { text: "get_payload()"},
          { text: "chain()"}
                ],
        right_answers:["get_main_type()"],
    },
  
    {
        question : "What level of the open systems interaction model does the FTP protocol belong to??",
        answers:[
          { text: "applications"},
          { text: "representations"},
          { text: "network"},
          { text: "electronetwork"}
        ],
        right_answers:["applications"],
    },
  
    {
        question : "Which Python standard library module allows you to work with WWW at a lower level",
        answers:[
          { text: "urlparse"},
          { text: "urllib2"},
          { text: "urllib3"},
          { text: "httplib"}
        ],
        right_answers:["httplib"],
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
  