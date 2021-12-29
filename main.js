
// Default settings
const DEFAULT_SIZE = 16;

// Initiaising key global variables
let currentSize = DEFAULT_SIZE;

/* Initialising FUNCTIONS */
function setCurrentSize(sizeValue) {
    currentSize = sizeValue;
}

// List of interactive variables
const colorPicker = document.getElementById('colorPicker'); 
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('raindbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeSlider = document.getElementById('sizeSlider');
let sizeValue = document.getElementById('sizeValue');
const grid = document.getElementById('grid-wrapper');

/* Events to capture */
sizeSlider.oninput = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

// Update the current slider value (each time user drags the slider handle)
function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function changeSize(sizeValue) {
    setCurrentSize(sizeValue);
    updateSizeValue(sizeValue);
    reloadGrid();
}

function clearGrid() {
    grid.innerHTML = '';
}

/* GRID INTERACTIVITY */
function setupGrid(sizeValue) {
    grid.style.gridTemplateColumns = `repeat(${sizeValue}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${sizeValue}, 1fr)`;

    // Create a dynamic grid of square divs
    for (let i = 0; i < sizeValue * sizeValue; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('style', 'border: 1px solid rgb(0, 0, 0)')
        grid.appendChild(cell);
      }

}

// MAIN
setupGrid(DEFAULT_SIZE)
//Display the default slider value + default grid size



