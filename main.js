// List of interactive variables
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('raindbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeSlider = document.getElementById('sizeSlider');
let sizeValue = document.getElementById('sizeValue');
const grid = document.getElementById('grid-wrapper');

// Events to listen out for

// Grid interactivity 

// Create a 16x16 grid of square divs
grid.style.gridTemplateColumns = 'repeat(16, 1fr)'
grid.style.gridTemplateRows = 'repeat(16, 1fr)'

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('style', 'border: 1px solid rgb(0, 0, 0)')
    grid.appendChild(cell);
  }


//Display the default slider value
sizeValue.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`
// Update the current slider value (each time user drags the slider handle)
sizeSlider.oninput = function () {
    sizeValue.innerHTML = `${this.value} x ${this.value}`; //In HTML event handlers, this refers to the HTML element that received the event. In this case, it is the slider (input).
}


