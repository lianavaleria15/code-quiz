//target go back button
const goBackBtn = document.getElementById("go-back-btn");

//target clear scores button
const clearScoresBtn = document.getElementById("clear-scores-btn");

//target main
const parentContainer = document.getElementById("parent-container");

//function to go back to start quiz game
const goBackToGame = function () {
  location.href = "index.html";
};

//function to clear high scores
const clearHighScores = function () {
  localStorage.clear();

  //remove high scores container
  location.refresh();
};

//function to create high scores container
const createHighScoresContainer = function (highScores) {
  //create container div
  const containerDiv = document.createElement("div");
  //set attributes
  containerDiv.setAttribute("id", "high-scores-container");
  containerDiv.setAttribute("class", "high-scores-container");

  //function to display high scores
  for (highScore of highScores) {
    //create list elements
    const highScoreElement = document.createElement("li");
    highScoreElement.setAttribute = ("id", "score-item");
    highScoreElement.textContent = `Name:${highScore.nameInput} Score: ${highScore.timeInput}`;

    //append high scores container to main
    containerDiv.append(highScoreElement);
  }

  parentContainer.append(containerDiv);
};

// function to access scores in local storage
const getScoresFromLocalStorage = function () {
  //get high score values from local storage
  const highScores = JSON.parse(localStorage.getItem("high_score")) ?? [];

  if (highScores) {
    createHighScoresContainer(highScores);
  }
};

window.onload = function () {
  getScoresFromLocalStorage();
};

//add event on go back btn
goBackBtn.addEventListener("click", goBackToGame);

//add event on clear scores btn
clearScoresBtn.addEventListener("click", clearHighScores);
