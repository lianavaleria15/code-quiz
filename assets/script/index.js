const startQuizBtn = document.querySelector("#start-button");
const startQuizContainer = document.querySelector("#start-container");
const main = document.querySelector("#main");

//store questions in an object array
const quizQuestions = [
  {
    question: "Question1",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "answer2",
  },
  {
    question: "Question2",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "answer1",
  },
  {
    question: "Question3",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "answer4",
  },
  {
    question: "Question4",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "answer3",
  },
  {
    question: "Question5",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "answer2",
  },
];

//initialise timer
let timeLeft = 5;
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

  //append game over container elements
  gameOverContainer.appendChild(gameOverHeadingOne);
  gameOverContainer.appendChild(gameOverHeadingTwo);
  gameOverContainer.appendChild(gameOverText);
  gameOverContainer.appendChild(retakeQuiz);
  main.appendChild(gameOverContainer);
};

//validate answer function here
const verifyAnswer = function (event) {
  //use event bubbling to check the answer clicked by user
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    console.log("Button clicked");
  } else {
    console.log("Mistake");
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
    answerBtn.setAttribute("data-attribute", "data-answer  ");
    //set text content button
    answerBtn.textContent = index;
    //append answer button to answer container
    answersContainer.appendChild(answerBtn);
  };

  answers.forEach(createAnswersContainer);
  return answersContainer;
};

//function to create quiz container
const renderQuestion = function (quizQuestion) {
  // const createQuizContainer = function (quizQuestion, index) {
  //create quiz container
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");
  questionContainer.setAttribute("id", "question-container");
  questionContainer.setAttribute("data-attribute", "correct-answer");

  //create question container
  const createQuestion = document.createElement("h1");
  createQuestion.setAttribute("id", "quiz-question");
  createQuestion.textContent = quizQuestion.question;
  questionContainer.appendChild(createQuestion);

  //append asnwers
  let answerChoices = renderAnswers(quizQuestion.answers);
  questionContainer.appendChild(answerChoices);
  //add event listener question container
  questionContainer.addEventListener("click", verifyAnswer);
  // main.replaceChildren(questionContainer);
  return questionContainer;
};

const renderQuiz = function () {
  //render questions
  if (index < quizQuestions.length) {
    const currentQuestion = renderQuestion(quizQuestions[index]);
    main.appendChild(currentQuestion);
  }
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
      // questionContainer.remove();

      //render game over
      gameOver();
    } else {
      timeLeft -= 1;
      //update date timer on header
      timerSpan.textContent = timeLeft;
      // renderQuestion();
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
  //render quiz questions
  //   renderQuestion();
  renderQuiz();
};

//add event listener on start quiz button
startQuizBtn.addEventListener("click", startQuiz);
