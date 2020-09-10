const sketchBoard = document.querySelector("#sketch-board");
const button = document.querySelector("button");
let defaultSize = 10;
let setGrid = defaultSize * defaultSize; 
//let counter = 0;
let squareArr = [];

function addSquare(){
    const square = document.createElement("div");
    square.classList.add("square");
    squareArr.push(square); //added created squares to an array to keep track of them
    sketchBoard.appendChild(square);
}

function createBoard(){
    let counter = 0;
    sketchBoard.style.cssText = 
        `
        grid-template-columns: repeat(${defaultSize},1fr);
        grid-template-rows: repeat(${defaultSize},1fr);              
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
    while(sketchBoard.firstChild){
        sketchBoard.removeChild(sketchBoard.firstChild);
    }
    //counter = 0;
    squareArr = [];
}

function customBoard(){

    button.addEventListener("click",()=>{
    
        resetBoard();
        let userChoice = prompt("Pick the size of your board between 10-100");
        
        while(userChoice < 10 || userChoice > 100){
            userChoice = prompt("Invalid size... pick a number between 10-100");
        }
    
        defaultSize = Number(userChoice);
        setGrid = defaultSize * defaultSize;
    
        createBoard();
        hover();
    
    });

}


createBoard();
hover();
customBoard();




