const frame = document.querySelector("#container");
const gameBoard = document.createElement("div");
gameBoard.setAttribute("id", "gameboard");
const clrBtn = document.getElementById("btn-clr");
let pixelSize = 10;

//Create Grid Block Function
function createGrid(size) {
	for (let i = size; i > 0; i--) {
		let div = document.createElement("div");
		div.classList.add("gridblock");
		div.addEventListener("mouseover", () => {
			div.style.backgroundColor = "black";
		});
		gameBoard.appendChild(div);
	}
	changePixels(pixelSize);
}

//Change Pixel Size Function
function changePixels(pixelSize) {
	const gridBlocks = document.querySelectorAll(".gridblock");
	gridBlocks.forEach((block) => {
		block.style.width = pixelSize + "px";
		block.style.height = pixelSize + "px";
	});
}

//Default gameboard
const defaultHeight = 60;
const defaultWidth = 100;
const defaultSize = defaultHeight * defaultWidth;
frame.appendChild(gameBoard);
createGrid(defaultSize);

//Size Button
const sizeBtn = document.getElementById("btn-size");
let sizeCounter = 1;
sizeBtn.addEventListener("click", function () {
	let oldDivs = document.querySelectorAll(".gridblock");
	oldDivs.forEach((oldDiv) => {
		oldDiv.parentNode.removeChild(oldDiv);
	});
	if (sizeCounter === 3) {
		sizeCounter = 1;
		gridHeight = 60;
		gridWidth = 100;
		pixelSize = 10;
	} else if (sizeCounter === 2) {
		sizeCounter++;
		gridHeight = 30;
		gridWidth = 50;
		pixelSize = 20;
	} else if (sizeCounter === 1) {
		sizeCounter++;
		gridHeight = 12;
		gridWidth = 20;
		pixelSize = 50;
	}

	let size = gridHeight * gridWidth;
	createGrid(size);
});

// Clear Button

clrBtn.addEventListener("click", function () {
	const gridItems = document.querySelectorAll(".gridblock");
	gridItems.forEach((item) => {
		item.style.backgroundColor = "white";
	});
});
