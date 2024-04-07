let array = [];

function update() {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = array.reduce((acc, currentValue, index) => {
        return acc + `${index + 1}. ${currentValue}<br>`;
    }, "");
}

function pushItem() {
    const inputValue = document.getElementById("inputValue").value;
    array.push(inputValue);
    update();
}

function popItem() {
    array.pop();
    update();
}

function unshiftItem() {
    const inputValue = document.getElementById("inputValue").value;
    array.unshift(inputValue);
    update();
}

function shiftItem() {
    array.shift();
    update();
}

function arrMap() {
    const prefix = document.getElementById("inputValue").value;
    array = array.map(item => prefix + item);
    update();
}
