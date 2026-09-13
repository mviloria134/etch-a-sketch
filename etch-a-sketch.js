const grid = document.querySelector("#grid");
const grid_resize_button = document.querySelector(".resize-button");

const GRID_WIDTH = 960;
grid.style.width = `${GRID_WIDTH}px`;

function get_random_color() {
    return `rgb(${Math.random() * (255-100) + 100} ${Math.random() * 0} ${Math.random() * (200-50) + 50} / ${Math.random() * (1-0.25) + 0.25})`;
}

function create_grid(side_length = 16) {
    clear_grid();

    const squareWidth = Math.floor(GRID_WIDTH/side_length);
    for (let i = 0; i < side_length; i++) {
        for (let j = 0; j < side_length; j++) {
            const square = document.createElement('div');
            grid.append(square);
            square.style.width = `${squareWidth}px`;
            square.style.height = `${squareWidth}px`;
            square.classList.add("square");
        }
    }
}

function clear_grid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function get_size_input() {
    let size;
    function isNotValidInput(response) {
        return  !Number.isInteger(response) || response > 100 || response < 0;
    }
    do {
        size = Number(prompt("How many squares should each size of the grid have? (between 1 and 100)"));
        if (isNotValidInput(size)) {
            alert("Not a valid number. Try again");
        }
    } while (isNotValidInput(size));

    return size;
}

grid.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains("square")){
        event.target.style.backgroundColor = get_random_color();
    }
});

grid_resize_button.addEventListener('click', () => {
    const size = get_size_input();

    if (size) {
        create_grid(size);
    }
});

create_grid();