//etch-a-sketch
//Odin Project

let gridSize = 12, gridItem, color = '#000000';
const  content = document.querySelector('.content'),
    sidebar = document.querySelector('.sidebar'),
    sideBtn = document.querySelector('.sidebarBtn'),
    sideBtnText = sideBtn.querySelector('span'),
    gridBtn = document.querySelector('.gridSwitch'),
    gridRegen = document.querySelector('.gridRegen'),
    clearBtn = document.querySelector('.gridClear'),
    colorSel = document.querySelector('.colorSel'),
    eraser = document.querySelector('.eraser');


const grid = document.createElement('div');
grid.classList.add('grid');
content.appendChild(grid);

//Gen grid
function gridGen(){
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;

    for(i = 1; i <= (gridSize*gridSize); i++){
        gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.classList.add(`grid-item-${i}`);
        gridItem.classList.add('gridOn');

        grid.appendChild(gridItem);
    }
    itemListener();
}
gridGen();

//Draw mouse path
function itemListener(){
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((gridItem) => gridItem.addEventListener('mouseover', function() {
        gridItem.style.backgroundColor = `${color}`;
    }));
}

//Toggle sidebar
sideBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')){
        sideBtnText.textContent = "<";
    }
    else{
        sideBtnText.textContent = ">";
    }
});

//Toggle grid lines
gridBtn.addEventListener('click', function() {
    gridItem.forEach((gridItem) => gridItem.classList.toggle('gridOn'));
});

//Change Grid Size 
gridRegen.addEventListener('click', function() {
    gridSize = prompt('Enter new side length:');
    gridItem.forEach((gridItem) => gridItem.remove());
    gridGen()
});

//clear All
const gridSel = document.querySelector('.grid');
clearBtn.addEventListener('click', function() {
    gridItem.forEach((gridItem) => gridItem.style.backgroundColor = 'white');
});

//color selector
colorSel.addEventListener('click', function() {
    colorSel.addEventListener('input', function() {
        color = colorSel.value;
    });
    itemListener();
});

eraser.addEventListener('click', function() {
    color = 'rgb(255, 255, 255)';
    itemListener();
});