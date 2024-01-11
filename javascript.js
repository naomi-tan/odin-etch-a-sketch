let initSize = 16;
let grid = document.querySelector('.grid');

function drawGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < gridSize; j++) {
            let box = document.createElement('div');
            box.style.backgroundColor = 'rgba(0,0,0,0)';
            box.className = 'box';
            box.id = `${i},${j}`;
            row.appendChild(box);
        }
        grid.append(row);
    }
}

drawGrid(initSize);

grid.addEventListener("mouseover", (event) => {
    let rowHover = event.target;
    console.log(rowHover.id);
    let currBackgroundColor = rowHover.style.backgroundColor;
    let newBackgroundColor = currBackgroundColor.split(',');
    if (typeof(newBackgroundColor[3]) == "string") {
        if (Number(newBackgroundColor[3].split(")")[0]) == 0) {
            randomR = Math.floor(Math.random() * 256);
            randomG = Math.floor(Math.random() * 256);
            randomB = Math.floor(Math.random() * 256);
            newBackgroundColor = `rgba(${randomR}, ${randomG}, ${randomB}, 0)`.split(',');
        }
        newBackgroundColor = newBackgroundColor[0] + ',' + newBackgroundColor[1] + ',' + newBackgroundColor[2] + ', ' + (Number(newBackgroundColor[3].split(")")[0]) + 0.1) + ')';
        rowHover.style.backgroundColor = newBackgroundColor;
    }
});

function clearGrid() {
    let childNodes = grid.children;
    let len = childNodes.length;
    for (let k = 0; k < len; k++) {
        grid.removeChild(childNodes[0]);
    }
}

let resetButton = document.querySelector('button');

resetButton.addEventListener('click', (event) => {
    gridSize = parseInt(prompt('Enter number of squares per side of grid:'));
    if ((gridSize > 0) && (gridSize < 100)) {
        clearGrid();
        drawGrid(gridSize);
    }
})