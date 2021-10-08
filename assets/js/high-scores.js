//target go back button
const goBackBtn = document.getElementById("go-back-btn");

//target clear scores button
const clearScoresBtn = document.getElementById("clear-scores-btn");

//function to go back to start quiz game
const goBackToGame = function () {
  location.href = "index.html";
};

//function to clear high scores
const clearHighScores = function () {
  localStorage.clear();
};

//add event on go back btn
goBackBtn.addEventListener("click", goBackToGame);

//add event on clear scores btn
clearScoresBtn.addEventListener("click", clearHighScores);
