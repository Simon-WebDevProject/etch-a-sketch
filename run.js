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

//gen grid
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

//draw mouse path
function itemListener(){
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((gridItem) => gridItem.addEventListener('mouseover', function() {
        gridItem.style.backgroundColor = `${color}`;
    }));
}

//toggle sidebar
sideBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')){
        sideBtnText.textContent = "<";
    }
    else{
        sideBtnText.textContent = ">";
    }
});

//toggle grid lines
gridBtn.addEventListener('click', function() {
    gridItem.forEach((gridItem) => gridItem.classList.toggle('gridOn'));

    const gridCheck = document.querySelector('.grid-item-1')
    if (gridCheck.classList.contains('gridOn')){
        grid.style.border = '1px solid rgb(169, 169, 169)';
    }
    else{
        grid.style.border = '2px solid rgb(169, 169, 169)';
    }
});

//change Grid Size 
gridRegen.addEventListener('click', function() {
    gridSize = prompt('Enter new side length:');

    if (gridSize > 99){
        alert('error; too big, <100 only');
    }
    else{
        gridItem.forEach((gridItem) => gridItem.remove());
        gridGen();
    }
});

//clear all
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

//eraser mode
eraser.addEventListener('click', function() {
    color = 'rgb(255, 255, 255)';
    itemListener();
});