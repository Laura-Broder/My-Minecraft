// create a landing page
const landingPage = document.querySelector("#landingPage");

// start button
const startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", startGame);

function startGame() {
  landingPage.classList.add("hidden");
  resetWorld();
}
// add event listener to the restart game button to go back to the landing page
restartGameButton.addEventListener("click", restartGame);
function restartGame() {
  landingPage.classList.remove("hidden");
  resetWorld();
}
