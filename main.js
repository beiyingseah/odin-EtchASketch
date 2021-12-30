
// Default settings
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'classic';

// Initiaising key global variables
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

/* Initialising key FUNCTIONS */
function setCurrentSize(sizeValue) {
    currentSize = sizeValue;
}

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}


// List of interactive variables
const colorPicker = document.getElementById('colorPicker'); 
const classicBtn = document.getElementById('classicBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeSlider = document.getElementById('sizeSlider');
let sizeValue = document.getElementById('sizeValue');
const grid = document.getElementById('grid-wrapper');

/* Events to capture */
classicBtn.onclick = () => setCurrentMode('classic');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => reloadGrid();
sizeSlider.oninput = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

// Update the current slider value (each time user drags the slider handle)
function changeSize(sizeValue) {
    setCurrentSize(sizeValue);
    updateSizeValue(sizeValue);
    reloadGrid();
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
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
        cell.setAttribute('style', 'border: 1px solid rgb(0, 0, 0)');
        //cell.addEventListener('mouseover', changeColor)
        //insert cell.SetAttribute: background colour
        grid.appendChild(cell);
      }

}

/* COLOUR BUTTONS INTERACTIVITY */
function activateButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active'); 
    } else if (currentMode === 'classic') {
        classicBtn.classList.remove('active');
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    }

    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active'); //add back the 'active' class(es) to the button element
    } else if (newMode === 'classic') {
        classicBtn.classList.add('active');
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active');
    }
}
//function changeColor()


// MAIN
setupGrid(DEFAULT_SIZE)
activateButton(DEFAULT_MODE)
//Display the default slider value + default grid size



