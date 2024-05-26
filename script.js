const NUMBER_OF_GRIDS = 16*16;
const container = document.querySelector(".container")

for(let i = 0; i<NUMBER_OF_GRIDS; i++){
    const div = document.createElement("div");
    container.appendChild(div);
}