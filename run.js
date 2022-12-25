//etch-a-sketch
//Odin Project

let gridSize = 12, gridItem;
const content = document.querySelector('.content');
const sidebar = document.querySelector('.sidebar');
const sideBtn = document.querySelector('.sidebarBtn'),
        sideBtnText = sideBtn.querySelector('span');
const gridBtn = document.querySelector('.gridSwitch');
const gridRegen = document.querySelector('.gridRegen');
const grid = document.createElement('div');

grid.classList.add('grid');
content.appendChild(grid);

function gridGen(){
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;

    for(i = 1; i <= (gridSize*gridSize); i++){
        gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.classList.add(`grid-item-${i}`);
        gridItem.classList.add('gridOn');

        grid.appendChild(gridItem);
    }
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((gridItem) => gridItem.addEventListener('mouseover', function() {
        gridItem.style.backgroundColor = '#000000';
    }));
}
gridGen();

sideBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')){
        sideBtnText.textContent = "<<";
    }
    else{
        sideBtnText.textContent = ">>";
    }
});

gridBtn.addEventListener('click', function() {
    gridItem.forEach((gridItem) => gridItem.classList.toggle('gridOn'));
});

gridRegen.addEventListener('click', function() {
    gridSize = prompt('Enter new side length:');
    gridItem.forEach((gridItem) => gridItem.remove());
    gridGen()
});