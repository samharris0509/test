// Get the drawing canvas and its 2D rendering context
const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

// Initialize drawing variables
let isDrawing = false;
let label = ''; // Label to describe the colors used in the drawing
var green = false; // Boolean indicating if green color is used in the drawing
var blue = false; // Boolean indicating if blue color is used in the drawing
var red = false; // Boolean indicating if red color is used in the drawing
let lastX = 0; // Last known X coordinate of the drawing cursor
let lastY = 0; // Last known Y coordinate of the drawing cursor
let currentColor = 'black'; // Default drawing color is black

// Event listener for mouse down on the canvas
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Update last known cursor position
    
    // Check the current drawing color and update the corresponding color flag
    if (currentColor === 'blue') {
        blue = true;
    } else if (currentColor === 'red') {
        red = true;
    } else if (currentColor === 'green') {
        green = true;
    }
});

// Event listener for mouse move on the canvas
canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return; // Return if not drawing

    // Set the drawing style and start drawing a path
    context.strokeStyle = currentColor;
    context.beginPath();
    context.moveTo(lastX, lastY); // Move to the last known cursor position
    context.lineTo(e.offsetX, e.offsetY); // Draw a line to the current cursor position
    context.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY]; // Update last known cursor position
});

// Event listener for mouse up on the canvas
canvas.addEventListener('mouseup', () => {
    isDrawing = false; // Stop drawing
});

// Event listener for clicking the save button
document.getElementById('saveButton').addEventListener('click', saveDrawing);

// Event listeners for clicking color buttons
document.getElementById('blueButton').addEventListener('click', () => {
    currentColor = 'blue'; // Set current color to blue
});

document.getElementById('redButton').addEventListener('click', () => {
    currentColor = 'red'; // Set current color to red
});

document.getElementById('greenButton').addEventListener('click', () => {
    currentColor = 'green'; // Set current color to green
});

// Function to save the drawing
function saveDrawing() {
    // Check which colors were used and update the label accordingly
    if (blue === true) {
        label += "blue";
    }
    if (green === true) {
        label += "green";
    }
    if (red === true) {
        label += "red";
    }

    // Convert the drawing on the canvas to a data URL
    const drawingDataUrl = canvas.toDataURL();

    // Create elements to display the saved drawing and label
    const drawingBox = document.createElement('div');
    drawingBox.classList.add('drawing-box');
    const imgElement = document.createElement('img');
    imgElement.src = drawingDataUrl;
    imgElement.alt = 'Drawing';
    imgElement.width = 200;
    imgElement.height = 150;

    // Create a delete button to remove the saved drawing
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Image';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        drawingBox.remove();
    });
    drawingBox.appendChild(imgElement);
    drawingBox.appendChild(deleteButton);

    // Display the label describing the colors used in the drawing
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    drawingBox.appendChild(labelSpan);

    // Append the drawing box to the container for saved drawings
    document.getElementById('savedDrawings').appendChild(drawingBox);

    // Clear the canvas and reset color flags and label
    clearCanvas();
    green = false;
    blue = false;
    red = false;
    label = "";
}

// Function to clear the canvas
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

