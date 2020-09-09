const sketchBoard = document.querySelector("#sketch-board");
let columns = 60;
let rows = 60;
let setGrid = rows * columns; 
let counter = 0;

function addSquare(){
    const square = document.createElement("div");
    square.classList.add("square");
    sketchBoard.appendChild(square);
}

function createBoard(){
    sketchBoard.style.cssText = 
        `grid-template-columns: repeat(${columns}, 25px);
        grid-template-rows: repeat(${rows}, 25px);
        grid-gap: 0px;                 
        `
}

createBoard();

while(counter < setGrid){
    addSquare();
    counter++;
}





