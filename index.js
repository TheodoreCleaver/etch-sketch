const frame = document.querySelector("#container");
const gameBoard = document.createElement("div");
gameBoard.setAttribute("id", "gameboard");


let gridHeight = 16;
let gridWidth = 16;
let size = gridHeight * gridWidth;
let blockHeight = ((600 + gridHeight ) / gridHeight);
let gameWidth = (((600 + gridHeight ) / gridHeight) * gridWidth);
gameBoard.style.width = (gameWidth + 'px');
frame.appendChild(gameBoard);

let div

for (i = size ; i > 0; i-- ) {
    let div = document.createElement("div");
    div.classList.add("gridblock");
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "black";})
    gameBoard.appendChild(div);
};

