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

// tutorial
// select tutorial container
const tutorialContainer = document.querySelector(".tutorial-container");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");

const 