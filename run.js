//etch-a-sketch

const content = document.querySelector('.content');
const grid = document.querySelector('.grid');

function gridGen(){
    let gridSize = prompt("size?");

    for(i = 1; i <= (gridSize*gridSize); i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.classList.add(`grid-item-${i}`);
        gridItem.style.cssText = `width: ${500/gridSize}px;`;

        grid.appendChild(gridItem);
    }
}



gridGen();