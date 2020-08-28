// world size variables:
const worldSize = 30;
const groundHight = worldSize / 2 + 2;

// select layout containers
const minecraft = document.querySelector("#minecraft");
const world = document.querySelector("#world");
const sideToolBar = document.querySelector("#sideToolBar");
const tools = document.querySelector("#tools");
const inventory = document.querySelector("#inventory");

// make a matrix of 10*10 of sky:
function createMatrix() {
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
  console.log(fromLine);
  for (let row = fromLine; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].setAttribute("data-type", "dirt");
    }
  }
}
// rock
function createRock(fromLine) {
  for (let col = 3; col < 9; col++) {
    worldMatrix[fromLine - 1][col].setAttribute("data-type", "rock");
  }
  for (let col = 3; col < 8; col++) {
    worldMatrix[fromLine - 2][col].setAttribute("data-type", "rock");
  }
}
// tree
function createTree(fromLine) {
  for (let row = fromLine - 5; row < fromLine; row++) {
    worldMatrix[row][(worldSize * 2) / 3].setAttribute("data-type", "trunk");
  }
  for (let row = fromLine - 10; row < fromLine - 5; row++) {
    for (
      let col = (worldSize * 2) / 3 - 2;
      col < (worldSize * 2) / 3 + 3;
      col++
    ) {
      worldMatrix[row][col].setAttribute("data-type", "leaves");
    }
  }
}
function resetWorld() {
  createSky();
  createCloud();
  createGround(groundHight);
  createRock(groundHight);
  createTree(groundHight);
}
// create the game the first time the webpage is opened
function createFirstGame() {
  createMatrix();
  resetWorld();
  // display landing page
  landingPage.classList.remove("hidden");
}
// call create first game function
let worldMatrix = [];
createFirstGame();

// sideToolBar
// add header
const sidebarHeader = document.createElement("h1");
sidebarHeader.textContent = "Inventory";
sidebarHeader.classList.add("header");
sideToolBar.insertAdjacentElement("afterbegin", sidebarHeader);

// add tools
// add header
const toolsHeader = document.createElement("h2");
toolsHeader.textContent = "Tools";
toolsHeader.classList.add("header");
tools.insertAdjacentElement("afterbegin", toolsHeader);
// create a tools
const toolsList = document.createElement("ul");
toolsList.classList.add("toolsList");
tools.insertAdjacentElement("beforeend", toolsList);

function creatTool(name) {
  const element = document.createElement("li");
  element.setAttribute("data-type", name);
  element.textContent = name;
  element.classList.add("toolBox");
  toolsList.appendChild(element);
}
creatTool("axe");
creatTool("pickaxe");
creatTool("shovel");

// add inventory
// add header
const inventoryHeader = document.createElement("h2");
inventoryHeader.textContent = "Elements";
inventoryHeader.classList.add("header");
inventory.insertAdjacentElement("afterbegin", inventoryHeader);
// create an inventory
const inventoryList = document.createElement("ul");
inventoryList.classList.add("inventoryList");
inventory.insertAdjacentElement("beforeend", inventoryList);

function creatInventoryItem(name) {
  const element = document.createElement("li");
  element.setAttribute("data-type", name);
  element.textContent = 0;
  element.classList.add("inventoryBox");
  inventoryList.appendChild(element);
}
creatInventoryItem("trunk");
creatInventoryItem("leaves");
creatInventoryItem("rock");
creatInventoryItem("dirt");

// create reset world button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset World";
resetButton.classList.add("resetBtn");
sideToolBar.insertAdjacentElement("beforeend", resetButton);

// create restart game button
const restartGameButton = document.createElement("button");
restartGameButton.textContent = "Restart Game";
restartGameButton.classList.add("restartGameButton");
sideToolBar.insertAdjacentElement("beforeend", restartGameButton);
