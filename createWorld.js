// world size variables:
let worldSize = 30;
const groundHight = worldSize / 2 + 2;
// change world size in the css file
document.documentElement.style.setProperty("--world-size", worldSize);
// select layout containers
const minecraft = document.querySelector("#minecraft");
const world = document.querySelector("#world");

// make a matrix of 10*10 of sky:
function createMatrix() {
  // console.log(world);
  for (let row = 0; row < worldSize; row++) {
    worldMatrix[row] = [];
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col] = document.createElement("div");
      worldMatrix[row][col].setAttribute("data-row", row);
      worldMatrix[row][col].setAttribute("data-col", col);
      worldMatrix[row][col].classList.add("tile");

      // append to the world container:
      world.appendChild(worldMatrix[row][col]);
    }
  }
}
// reset the world tiles to the origin

// sky
function createSky() {
  for (let row = 0; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].setAttribute("data-type", "sky");
    }
  }
}
// cloud
function createCloud() {
  for (let row = 6; row < 8; row++) {
    for (let col = 4; col < 9; col++) {
      worldMatrix[row][col].setAttribute("data-type", "cloud");
    }
  }
  worldMatrix[5][6].setAttribute("data-type", "cloud");
  worldMatrix[5][5].setAttribute("data-type", "cloud");
  worldMatrix[7][9].setAttribute("data-type", "cloud");
  worldMatrix[7][3].setAttribute("data-type", "cloud");
}
// dirt
function createGround(fromLine) {
  for (let row = fromLine; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].setAttribute("data-type", "dirt");
    }
  }
}
// rock
function createRock(fromLine) {
  for (let row = fromLine - 1, rockWidth = 9; row > 0; row--, rockWidth--) {
    for (let col = 0; col < rockWidth; col++) {
      worldMatrix[row][col].setAttribute("data-type", "rock");
    }
  }
}
// tree
function createTree(fromLine) {
  for (let row = fromLine - 5; row < fromLine; row++) {
    worldMatrix[row][fromLine + 2].setAttribute("data-type", "trunk");
  }
  for (let row = fromLine - 10; row < fromLine - 5; row++) {
    for (let col = fromLine; col < fromLine + 5; col++) {
      worldMatrix[row][col].setAttribute("data-type", "leaves");
    }
  }

  for (let row = fromLine - 1; row > fromLine - 8; row--) {
    worldMatrix[row][fromLine - 4].setAttribute("data-type", "trunk");
  }
  for (let row = fromLine - 12; row < fromLine - 7; row++) {
    for (let col = fromLine - 5; col < fromLine - 2; col++) {
      worldMatrix[row][col].setAttribute("data-type", "leaves");
    }
  }
}
// reset inventory
function resetInventory() {
  document
    .querySelectorAll(".inventoryBox")
    .forEach((el) => (el.textContent = 0));
}

function resetWorld(size) {
  resetInventory();
  createSky();
  createCloud();
  createGround(groundHight);
  createRock(groundHight);
  createTree(groundHight);
}
// create the game the first time the webpage is opened
// function createFirstGame() {
//   console.log(world.childElementCount);
//   createMatrix();
//   console.log(world.childElementCount);
//   // display landing page
//   landingPage.classList.remove("hidden");
// }
// call create first game function
let worldMatrix = [];
// createFirstGame();
