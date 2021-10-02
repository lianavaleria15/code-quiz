const startQuizBtn = document.querySelector("#start-button");
const startQuizContainer = document.querySelector("#start-container");
const main = document.querySelector("#main");

//initialise timer
let timeLeft = 5;

//render game over container
const gameOver = function () {
  //create game over container elements
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

  //append game over container elements
  gameOverContainer.appendChild(gameOverHeadingOne);
  gameOverContainer.appendChild(gameOverHeadingTwo);
  gameOverContainer.appendChild(gameOverText);
  main.appendChild(gameOverContainer);
};

//start timer function
const startTimer = function () {
  //target timer span on html file
  const timerSpan = document.querySelector("#timer");
  //decrement time value
  const timerThick = function () {
    if (timeLeft <= 0) {
      clearInterval(timer);

      //remove quiz container
      const questionContainer = document.querySelector("#question-container");
      questionContainer.remove();

      //render game over
      gameOver();
    } else {
      timeLeft -= 1;
      //update date timer on header
      timerSpan.textContent = timeLeft;
    }
  };

  const timer = setInterval(timerThick, 1000);
  console.log(timer);
};

//validate answer function here
const validateAnswer = function () {
  console.log("Answer clicked");
};

//here render question function
const renderQuestion = function () {
  //create answer buttons and answers container
  const answerBtn = document.createElement("button");
  answerBtn.setAttribute("id", "answer-button");

  // const answerBtn = document.createElement("button");
  // answerBtn.setAttribute("id", "answer-button");
  // const answerBtn = document.createElement("button");
  // answerBtn.setAttribute("id", "answer-button");
  // const answerBtn = document.createElement("button");
  // answerBtn.setAttribute("id", "answer-button");

  const answersContainer = document.createElement("div");
  answersContainer.setAttribute("class", "answers-container");
  answersContainer.appendChild(answerBtn);

  //create heading to display question
  const quizQuestion = document.createElement("h1");
  quizQuestion.textContent = "This is the question";

  //create question container
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");
  questionContainer.setAttribute("id", "question-container");

  //append question container
  questionContainer.appendChild(quizQuestion);
  questionContainer.appendChild(answersContainer);
  main.appendChild(questionContainer);

  //add event listener on answers button
  answerBtn.addEventListener("click", validateAnswer);
};

//here start quiz function
const startQuiz = function () {
  //remove start quiz container
  startQuizContainer.remove();

  //start timer function
  startTimer();

  //render quiz questions
  renderQuestion();
};

//add event listener on start quiz button
startQuizBtn.addEventListener("click", startQuiz);
