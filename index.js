const frame = document.querySelector("#container");
const gameBoard = document.createElement("div");
gameBoard.setAttribute("id", "gameboard");
const clrBtn = document.getElementById("btn-clr");
let counter = 1;
console.log(counter);
let gridHeight = 60;
let gridWidth = 100;

const sizeBtn = document.getElementById("btn-size");
sizeBtn.addEventListener("click", function () {
	let oldDivs = document.querySelectorAll(".gridblock");
	oldDivs.forEach((oldDiv) => {
		oldDiv.parentNode.removeChild(oldDiv); // Remove each oldDiv from its parent
	});
	if (counter === 3) {
		counter = 1;
		gridHeight = 60;
		gridWidth = 100;
		console.log(gridHeight);
		for (i = size; i > 0; i--) {
			let div = document.createElement("div");
			div.classList.add("gridblock");
			div.addEventListener("mouseover", () => {
				div.style.backgroundColor = "black";
			});
			gameBoard.appendChild(div);
		}
	} else if (counter === 2) {
		counter++;
		gridHeight = 30;
		gridWidth = 50;
		console.log(gridHeight);
		for (i = size; i > 0; i--) {
			let div = document.createElement("div");
			div.classList.add("gridblock");
			div.addEventListener("mouseover", () => {
				div.style.backgroundColor = "black";
			});
			gameBoard.appendChild(div);
		}
	} else {
		counter++;
		gridHeight = 75;
		gridWidth = 125;
		console.log(gridHeight);
		for (i = size; i > 0; i--) {
			let div = document.createElement("div");
			div.classList.add("gridblock");
			div.addEventListener("mouseover", () => {
				div.style.backgroundColor = "black";
			});
			gameBoard.appendChild(div);
		}
	}
});

const size = gridHeight * gridWidth;
const blockHeight = (600 + gridHeight) / gridHeight;
const gameWidth = ((600 + gridHeight) / gridHeight) * gridWidth;
console.log(blockHeight);
/* gameBoard.style.width = (gameWidth + 'px'); */
frame.appendChild(gameBoard);

for (i = size; i > 0; i--) {
	let div = document.createElement("div");
	div.classList.add("gridblock");
	div.addEventListener("mouseover", () => {
		div.style.backgroundColor = "black";
	});
	gameBoard.appendChild(div);
}

const gridItems = document.querySelectorAll(".gridblock");

// Adding a click event listener to the button
clrBtn.addEventListener("click", function () {
	// Loop through each grid item and set its background color to white
	gridItems.forEach((item) => {
		item.style.backgroundColor = "white";
	});
});
