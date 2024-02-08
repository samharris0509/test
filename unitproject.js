const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

let isDrawing = false;
let label = '';
var green = false;
var blue = false;
var red = false;
let lastX = 0;
let lastY = 0;
let currentColor = 'black'; 

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    if (currentColor === 'blue') {
        blue = true;
    } else if (currentColor === 'red') {
        red = true;
    } else if (currentColor === 'green') {
        green = true;
    }
    
    
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    context.strokeStyle = currentColor; 
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

document.getElementById('saveButton').addEventListener('click', saveDrawing);

document.getElementById('blueButton').addEventListener('click', () => {
    currentColor = 'blue';
});

document.getElementById('redButton').addEventListener('click', () => {
    currentColor = 'red';
});

document.getElementById('greenButton').addEventListener('click', () => {
    currentColor = 'green';
});

function saveDrawing() {
    if (blue === true)
    {
        label += "blue";
    }
    if (green === true)
    {
        label += "green";
    }
    if (red === true)
    {
        label += "red";
    }



    const drawingDataUrl = canvas.toDataURL();
    const drawingBox = document.createElement('div');
    drawingBox.classList.add('drawing-box');
    const imgElement = document.createElement('img');
    imgElement.src = drawingDataUrl;
    imgElement.alt = 'Drawing';
    imgElement.width = 200;
    imgElement.height = 150;
    
    
    
    const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete Image';
deleteButton.classList.add('delete-button'); 
deleteButton.addEventListener('click', function() {
    drawingBox.remove();


    
});
drawingBox.appendChild(imgElement);
drawingBox.appendChild(deleteButton);

    
    // Append label to drawing box
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    drawingBox.appendChild(labelSpan);
    
    document.getElementById('savedDrawings').appendChild(drawingBox);
    clearCanvas();

    green = false;
    blue = false;
    red = false;
    label = "";
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
