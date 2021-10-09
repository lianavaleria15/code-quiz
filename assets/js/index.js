const startQuizBtn = document.querySelector("#start-button");
const startQuizContainer = document.querySelector("#start-container");
const main = document.querySelector("#main");

//store questions in an object array
const quizQuestions = [
  {
    question: "How can you add a comment in JavaScript?",
    answers: [
      "<!--This is a comment-->",
      "/*This is a comment*/",
      "//This is a comment",
      "!This is a comment",
    ],
    correctAnswer: "//This is a comment",
  },
  {
    question: "What is the correct way to declare an array?",
    answers: [
      "const cities = ['London','Dubai','Rome']",
      "const cities = {'London', 'Dubai', 'Rome'}",
      "const cities = 'London', 'Dubai', 'Rome'",
      "const cities = (London, Dubai, Rome)",
    ],
    correctAnswer: "const cities = ['London','Dubai','Rome']",
  },
  {
    question:
      "What is the correct JavaScript syntax to add text to a HTML element? ",
    answers: [
      "element.addText",
      "element.text",
      "element.textAdd",
      "element.textContent",
    ],
    correctAnswer: "element.textContent",
  },
  {
    question: "How do you link an external JavaScript file to HTML?",
    answers: [
      "<script.js></script.js>",
      "<javascript></javascript>",
      "<script></script>",
      "<javascript.js></javascript.js>",
    ],
    correctAnswer: "<script></script>",
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    answers: ["if i = 2", "if (i == 2)", "if (i = 2) then", "if i = 2 then"],
    correctAnswer: "if (i == 2)",
  },
];

//initialise timer
let timeLeft = 30;
let index = 0;

//render game over container
const gameOver = function () {
  //create game over container elements
  const retakeQuiz = document.createElement("button");
  retakeQuiz.setAttribute("id", "retake-quiz-button");
  retakeQuiz.textContent = "Retake quiz";

  const gameOverText = document.createElement("p");
  gameOverText.textContent =
    "If you want to try the quiz again, click the 'Retake quiz' button.";

  const gameOverHeadingTwo = document.createElement("h2");
  gameOverHeadingTwo.textContent = "Your time is up!";

  const gameOverHeadingOne = document.createElement("h1");
  gameOverHeadingOne.textContent = "Game Over";

  const gameOverContainer = document.createElement("div");
  gameOverContainer.setAttribute("id", "game-over-container");
  gameOverContainer.setAttribute("class", "game-over-container");

  //append elements to game over container
  gameOverContainer.append(
    gameOverHeadingOne,
    gameOverHeadingTwo,
    gameOverText,
    retakeQuiz
  );
  //remove quiz container and append game over container

  main.appendChild(gameOverContainer);

  //add event listener to retake quiz button to retake quiz
};

//validate answer function here
const verifyAnswer = function (event) {
  //use event bubbling to check the answer clicked by user
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    //get answer clicked value
    const answerClicked = target.getAttribute("data-attribute");
    //get correct value
    const correctAnswer = currentTarget.getAttribute("data-attribute");

    //verify if answer clicked matches correct answer
    if (answerClicked === correctAnswer) {
      main.removeChild(document.getElementById("question-container"));
      index += 1;
      renderQuiz();
    } else {
      timeLeft -= 5;
    }
  }
};

// function to create answers container
const renderAnswers = function (answers) {
  //create answers container
  const answersContainer = document.createElement("div");
  answersContainer.setAttribute("class", "answers-container");

  const createAnswersContainer = function (answer, index) {
    const answerBtn = document.createElement("button");
    answerBtn.setAttribute("id", "answer-button");
    answerBtn.setAttribute("data-attribute", answer);
    //set text content button
    answerBtn.textContent = answer;
    //append answer button to answer container
    answersContainer.appendChild(answerBtn);
  };

  answers.forEach(createAnswersContainer);
  return answersContainer;
};

//function to create quiz container
const renderQuestion = function (quizQuestion) {
  //create quiz container
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");
  questionContainer.setAttribute("id", "question-container");
  questionContainer.setAttribute("data-attribute", quizQuestion.correctAnswer);

  //create question container
  const createQuestion = document.createElement("h1");
  createQuestion.setAttribute("id", "quiz-question");
  createQuestion.textContent = quizQuestion.question;
  questionContainer.appendChild(createQuestion);

  //append answers
  let answerChoices = renderAnswers(quizQuestion.answers);
  questionContainer.appendChild(answerChoices);

  //add event listener question container
  questionContainer.addEventListener("click", verifyAnswer);

  return questionContainer;
};

const renderQuiz = function () {
  //render questions
  if (index < quizQuestions.length) {
    const currentQuestion = renderQuestion(quizQuestions[index]);
    main.appendChild(currentQuestion);
  } else {
    //append submit score container
    SubmitScoreContainer();
    // set quiz score value to the time left on timer
    quizScore = timeLeft;
    //set time to zero
    timeLeft = 0;
  }
};

const submitScores = function (event) {
  event.preventDefault();
  //get final score from suer input and timer
  const nameInput = document.getElementById("score-input").value;
  const timeInput = quizScore;
  const highScoreUser = {
    nameInput,
    timeInput,
  };
  //declare a new array and push high scoreUser used null coalescing
  const highScores = JSON.parse(localStorage.getItem("high_score")) ?? [];
  highScores.push(highScoreUser);
  console.log(highScores);
  // add high score to local storage
  localStorage.setItem("high_score", JSON.stringify(highScores));
};

//create submit score container
const SubmitScoreContainer = function () {
  //create submit scores container
  const scoreContainer = document.createElement("div");
  scoreContainer.setAttribute("id", "score-container");
  scoreContainer.setAttribute("class", "score-container");

  //create heading and paragraph elements
  const h1 = document.createElement("h1");
  h1.textContent = "Congratulations!";

  const h2 = document.createElement("h2");
  h2.textContent = "You reached the end of the quiz";

  const p = document.createElement("p");
  p.textContent =
    "To save your score and compare with opponents, please enter your 2 name initials followed by the score showed on the timer and press 'submit score' button.";

  // create submit score div
  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", "submit-score-button");
  submitButton.textContent = "Submit score";
  submitButton.addEventListener("click", submitScores);

  const scoreInput = document.createElement("input");
  scoreInput.setAttribute("type", "text");
  scoreInput.setAttribute("placeholder", "Enter initials and score here");
  scoreInput.setAttribute("id", "score-input");

  const submitScore = document.createElement("div");
  submitScore.setAttribute("id", "submit-score-container");
  submitScore.setAttribute("class", "submit-score-container");
  submitScore.append(scoreInput, submitButton);

  //append headings paragraph and input elements to score container
  scoreContainer.append(h1, h2, p, submitScore);

  main.appendChild(scoreContainer);
  //add event listener on submit button
  submitButton.addEventListener("click", submitScores);
};

//start timer function
const startTimer = function () {
  //target timer span on html file
  const timerSpan = document.querySelector("#timer");
  timerSpan.textContent = timeLeft;
  //decrement time value
  const timerThick = function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      main.removeChild(document.getElementById("question-container"));
      //render game over
      gameOver();
    } else {
      timeLeft -= 1;
      timerSpan.textContent = timeLeft;
    }
  };

  const timer = setInterval(timerThick, 1000);
};
//here start quiz function
const startQuiz = function () {
  //remove start quiz container
  startQuizContainer.remove();

  //start timer function
  startTimer();

  //render first quiz question
  const firstQuestion = renderQuestion(quizQuestions[0]);
  main.appendChild(firstQuestion);
};

//add event listener on start quiz button
startQuizBtn.addEventListener("click", startQuiz);
