//target go back button
const goBackBtn = document.getElementById("go-back-btn");

//target clear scores button
const clearScoresBtn = document.getElementById("clear-scores-btn");

//target main
const main = document.getElementById("main");

//function to go back to start quiz game
const goBackToGame = function () {
  location.href = "index.html";
};

//function to clear high scores
const clearHighScores = function () {
  localStorage.clear();
};

//function to create high scores container
const createHighScoresContainer = function () {
  //create container div
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "high-scores-container");
  console.log(containerDiv);
  //create list elements
  const highScoreElement = document.createElement("li");
  highScoreElement.setAttribute = ("id", "score-item");
  console.log(highScoreElement);
  //append high scores container to main
  containerDiv.append(highScoreElement);
  main.append(containerDiv);
};
createHighScoresContainer();

//add event on go back btn
goBackBtn.addEventListener("click", goBackToGame);

//add event on clear scores btn
clearScoresBtn.addEventListener("click", clearHighScores);
