// create a landing page
const landingPage = document.querySelector("#landingPage");

// start button
const startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", startGame);
function startGame() {
  if (world.childElementCount === 0) {
    createMatrix();
  }
  landingPage.classList.add("hidden");
  resetWorld(20);
  // add event listener to every tile
  for (let row = 0; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].addEventListener("click", handleTileClick);
    }
  }
}

// add event listener to the restart game button to go back to the landing page
restartGameButton.addEventListener("click", restartGame);
function restartGame() {
  console.log(world.childElementCount);
  if (world.childElementCount === 0) {
    createMatrix();
  }
  landingPage.classList.remove("hidden");
  resetWorld();
  // add event listener to every tile
  for (let row = 0; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].addEventListener("click", handleTileClick);
    }
  }
}
