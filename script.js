const NUMBER_OF_GRIDS = 16*16;
const container = document.querySelector(".container")
const body = document.querySelector("body");
const button = document.querySelector("button");

for(let i = 0; i<NUMBER_OF_GRIDS; i++){
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
    })
})

button.addEventListener("click",() => { 
    body.removeChild(container);
    squares.forEach((square) => {
        
        square.classList.remove("blacksquare");
    })
    body.appendChild(container);
});
