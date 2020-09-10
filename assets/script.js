const sketchBoard = document.querySelector("#sketch-board");
const button = document.querySelector("button");
let minSize = 50;
let maxSize = 64; 
let columns = minSize;
let rows = minSize;
let setGrid = rows * columns; 
let counter = 0;
let squareArr = [];

function addSquare(){
    const square = document.createElement("div");
    square.classList.add("square");
    squareArr.push(square); //added created squares to an array to keep track of them
    sketchBoard.appendChild(square);
}

function createBoard(){
    sketchBoard.style.cssText = 
        `
        grid-template-columns: repeat(${columns},1fr);
        grid-template-rows: repeat(${rows},1fr);              
        `
    while(counter < setGrid){
        addSquare();
        counter++;
    }
}

function color(){
    const color = Math.floor(Math.random()*16777215).toString(16);
    return color;
}

function hover(){
    for(let i = 0; i<squareArr.length;i++){
        squareArr[i].addEventListener("mouseover",()=>{
            let randColor = color();
            squareArr[i].style.cssText = `background: #${randColor}`;
        });
    }
}

function resetBoard(){

    button.addEventListener("click",()=>{
        let userChoice = prompt("Pick the size of your grid (16-64)");
        sketchBoard.removeChild() //delete current board

        while(userChoice < 16 || userChoice >64){
            userChoice = prompt("Invalid number... pick size between 16-64");
        }
        columns = userChoice;
        rows = userChoice;
        setGrid = userChoice * userChoice;
    });

}

createBoard();
hover();
//resetBoard();




