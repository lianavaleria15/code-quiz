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

const abc = quizQuestions[0].question;
console.log(abc);
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
const validateAnswer = function () {
  // console.log("Answer clicked");
};

// function to create answers container
const renderAnswers = function (answers) {
  //create answers container
  const createAnswersContainer = function (answer, index) {
    const answersContainer = document.createElement("div");
    answersContainer.setAttribute("class", "answers-container");

    const answerBtn = document.createElement("button");
    answerBtn.setAttribute("id", "answer-button");

    //set text content button
    answerBtn.textContent = index;

    //append answer button to answer container
    answersContainer.appendChild(answerBtn);
  };

  answers.forEach(createAnswersContainer);
};

//function to create quiz container
const renderQuestions = function (quizQuestions) {
  const createQuizContainer = function (quizQuestion, index) {
    //create quiz container
    const questionContainer = document.createElement("div");
    questionContainer.setAttribute("class", "question-container");
    questionContainer.setAttribute("id", "question-container");

    //create question container
    const createQuestion = document.createElement("h1");
    createQuestion.setAttribute("id", "quiz-question");
    createQuestion.textContent = quizQuestion;
    questionContainer.appendChild(createQuestion);
  };
  quizQuestions.forEach(createQuizContainer);
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
  renderAnswers();
  renderQuestions();
};

//add event listener on start quiz button
startQuizBtn.addEventListener("click", startQuiz);
