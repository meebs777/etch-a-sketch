const defaultSquares = 16;
const defaultGrid = defaultSquares * defaultSquares;
const container = document.querySelector(".container")
const body = document.querySelector("body");
const button = document.querySelector("button");
const gridPixelSize = 800;

for(let i = 0; i<defaultGrid; i++){
    const div = document.createElement("div");
    div.setAttribute("class","square");
    container.appendChild(div);
}

const squares = document.querySelectorAll("div .square");

const changeColor = (square) => {
    square.style.backgroundColor = "white";
}

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("blacksquare");
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        square.style.backgroundColor = rndCol;
    })
})

button.addEventListener("click",() => { 
    let maxSquares = 100;
    let squaresNumber = prompt("How many squares do you want on a side? No more than 100");
    if(squaresNumber === null) squaresNumber = defaultSquares;
    if (squaresNumber > 100 ) squaresNumber = maxSquares
    let gridSize = parseInt(squaresNumber) * parseInt(squaresNumber);
    let squareWidth = gridPixelSize/squaresNumber;
    resetDivs();

    for(let i = 0; i < gridSize; i++){
        const div = document.createElement("div");
        div.setAttribute("class","square");
        container.appendChild(div);
        div.style.width = squareWidth + "px";
    }
    
    
    body.appendChild(container);
    const squares = document.querySelectorAll("div .square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("blacksquare");
            const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
            square.style.backgroundColor = rndCol;
        })
    })

});

function resetDivs () {
    const divs = document.querySelectorAll("div .square");
    divs.forEach((div) => {
        div.classList.remove("blacksquare");
        div.remove();
    })
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }