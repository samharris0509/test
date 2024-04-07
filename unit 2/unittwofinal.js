// Define a class for creating Rock objects with name, description, and imageUrl properties
class Rock {
    constructor(name, description, imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl; // Property for storing the image URL
    }

    // Method to return HTML content displaying the rock's information and image
    displayInfo() {
        return `
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <img src="${this.imageUrl}" alt="${this.name}" style="max-width: 100%; height: auto;">
        `;
    }
}

// Create an array of Rock instances, each representing different types of rocks
const rocks = [
    new Rock('Granite', 'A very hard, granular, crystalline, igneous rock consisting mainly of quartz, mica, and feldspar.', 'granite2-copy.jpg'),
    new Rock('Marble', 'A metamorphic rock composed of recrystallized carbonate minerals, most commonly calcite or dolomite.', 'marble2020(6).jpg'),
    new Rock('Slate', 'A fine-grained, foliated, homogeneous metamorphic rock derived from an original shale-type sedimentary rock composed of clay or volcanic ash.', 'Slate.png'),
    new Rock('Limestone', 'A sedimentary rock composed primarily of calcium carbonate (calcite) or the double carbonate of calcium and magnesium (dolomite).', 'iStock-183830933-1024x680.jpg'),
    new Rock('Sandstone', 'A clastic sedimentary rock composed mainly of sand-sized mineral particles or rock fragments.', '00105-IMG_5703-sandstone.jpg')
];

// Variable to track the current displayed rock
let currentRockIndex = 0;

// Function to be executed when the window is fully loaded
window.onload = function() {
    // Get the button element and add a click event listener
    const infoBtn = document.getElementById('rockInfoBtn');
    infoBtn.addEventListener('click', function() {
        // Get the div where rock information will be displayed
        const rockInfoDiv = document.getElementById('rockInfo');
        // Update the innerHTML of the div with the current rock's information
        rockInfoDiv.innerHTML = rocks[currentRockIndex].displayInfo();
        // Increment the index to show the next rock's information upon next click
        currentRockIndex = (currentRockIndex + 1) % rocks.length; 
    }, false);
};
