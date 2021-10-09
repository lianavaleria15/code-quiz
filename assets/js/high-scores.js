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
  //
  location.refresh();
};

const createHighScoresContainer = function (highScores) {
  //create container div
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "high-scores-container");
  containerDiv.setAttribute("class", "high-scores-container");

  //create a for function to display high scores
  for (highScore of highScores) {
    //create list elements
    const highScoreElement = document.createElement("li");
    highScoreElement.setAttribute = ("id", "score-item");
    highScoreElement.textContent = `Name:${highScore.nameInput} Score: ${highScore.timeInput}`;

    //append high scores container to main
    containerDiv.append(highScoreElement);
  }

  parentContainer.append(containerDiv);
  // return containerDiv;
};

// function to access scores in local storage
const getScoresFromLocalStorage = function () {
  const highScores = JSON.parse(localStorage.getItem("high_score"));
  console.log(highScores);
  if (highScores) {
    createHighScoresContainer(highScores);
  } else {
  }
};
window.onload = function () {
  getScoresFromLocalStorage();
};
//add event on go back btn
goBackBtn.addEventListener("click", goBackToGame);

//add event on clear scores btn
clearScoresBtn.addEventListener("click", clearHighScores);
