const grid = document.querySelector("#grid");

const GRID_WIDTH = 960;
grid.style.width = `${GRID_WIDTH}px`;

function create_grid(width = 16, height = 16) {
    const squareWidth = Math.floor(GRID_WIDTH/width);
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const square = document.createElement('div');
            grid.append(square);
            square.style.width = `${squareWidth}px`;
            square.style.height = `${squareWidth}px`;
            square.classList.add("square");
        }
    }
}

create_grid();