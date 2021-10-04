const startQuizBtn = document.querySelector("#start-button");
const startQuizContainer = document.querySelector("#start-container");
const main = document.querySelector("#main");

//store questions in an object array
const questions = [
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

//function to create answers container
const createAnswersContainer = function (answers) {
  //create answers container
  const answersContainer = document.createElement("div");
  answersContainer.setAttribute("class", "answers-container");

  const createButton = function (answer) {
    //create answer button
    const answerBtn = document.createElement("button");
    answerBtn.setAttribute("id", "answer-button");

    //set text content button
    answerBtn.textContent = answer;

    //append answer button to answer container
    answersContainer.appendChild(answerBtn);
  };

  answers.forEach(createButton);
};

//function to create quiz container
const createQuizContainer = function () {
  //create quiz container
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");
  questionContainer.setAttribute("id", "question-container");
  //create question container
  for (i = 0; i < questions.length; i++) {
    const quizQuestion = document.createElement("h1");
    quizQuestion.textContent = questions[i].question;
    //append question container
    questionContainer.appendChild(quizQuestion);

    //append answers container to quiz container
    //   questionContainer.appendChild(answersContainer);
    // }

    //append quiz container to main
    createAnswersContainer();
    return questionContainer;
  }
};

//here render question function
const renderQuestion = function () {};

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
  renderQuestion();

  createQuizContainer();
  createAnswersContainer();
};

//add event listener on start quiz button
startQuizBtn.addEventListener("click", startQuiz);
