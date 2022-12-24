//etch-a-sketch
//Odin Project

const content = document.querySelector('.content');

function gridGen(){
    let gridSize = prompt("size?");

    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    content.appendChild(grid);

    for(i = 1; i <= (gridSize*gridSize); i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.classList.add(`grid-item-${i}`);

        grid.appendChild(gridItem);
    }
}

gridGen();

const gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach((gridItem) => gridItem.addEventListener('mouseover', function() {
    gridItem.style.backgroundColor = 'red';
}));