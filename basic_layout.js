// select layout
const minecraft = document.querySelector("#minecraft");
const world = document.querySelector("#world");
const sideToolBar = document.querySelector("#sideToolBar");
const tools = document.querySelector("#tools");
const inventory = document.querySelector("#inventory");

// world size variables:
const worldSize = 20;

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
function resetWorld() {
  createMatrix();
  // sky
  for (let row = 0; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].setAttribute("data-type", "sky");
    }
  }
  // cloud
  for (let row = 6; row < 8; row++) {
    for (let col = 4; col < 9; col++) {
      worldMatrix[row][col].setAttribute("data-type", "cloud");
    }
  }
  worldMatrix[5][6].setAttribute("data-type", "cloud");
  worldMatrix[5][5].setAttribute("data-type", "cloud");
  worldMatrix[7][9].setAttribute("data-type", "cloud");
  worldMatrix[7][3].setAttribute("data-type", "cloud");

  // dirt
  for (let row = 13; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].setAttribute("data-type", "dirt");
    }
  }
  // rock
  for (let col = 3; col < 6; col++) {
    worldMatrix[12][col].setAttribute("data-type", "rock");
  }
  for (let col = 3; col < 6; col++) {
    worldMatrix[11][col].setAttribute("data-type", "rock");
  }
  // tree
  for (let row = 8; row < 13; row++) {
    worldMatrix[row][15].setAttribute("data-type", "trunk");
  }
  for (let row = 3; row < 8; row++) {
    for (let col = 13; col < 18; col++) {
      worldMatrix[row][col].setAttribute("data-type", "leaves");
    }
  }
  for (let col = 6; col < 9; col++) {
    worldMatrix[12][col].setAttribute("data-type", "leaves");
  }
  for (let col = 6; col < 8; col++) {
    worldMatrix[11][col].setAttribute("data-type", "leaves");
  }
  for (let col = 5; col < 8; col++) {
    worldMatrix[10][col].setAttribute("data-type", "leaves");
  }
}

let worldMatrix = [];
resetWorld();
// console.table(worldMatrix);

// sideToolBar
// add header
const sidebarHeader = document.createElement("h2");
sidebarHeader.textContent = "Inventory";
sidebarHeader.classList.add("header");
sideToolBar.insertAdjacentElement("afterbegin", sidebarHeader);

// add tools
// add header
const toolsHeader = document.createElement("h2");
toolsHeader.textContent = "tools";
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

// add inventory counter
// const trunkCounter = document.createElement("span");
// trunkCounter.classList.add("counter");
// trunk.appendChild(trunk);

// console.table(worldMatrix[row][col]);
