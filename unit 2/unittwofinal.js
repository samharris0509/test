class Rock {
    constructor(name, description, imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl; // New property for the image URL
    }

    displayInfo() {
        return `
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <img src="${this.imageUrl}" alt="${this.name}" style="max-width: 100%; height: auto;">
        `;
    }
}


const rocks = [
    new Rock('Granite', 'A very hard, granular, crystalline, igneous rock consisting mainly of quartz, mica, and feldspar.', 'granite2-copy.jpg'),
    new Rock('Marble', 'A metamorphic rock composed of recrystallized carbonate minerals, most commonly calcite or dolomite.', 'marble2020(6).jpg'),
    new Rock('Slate', 'A fine-grained, foliated, homogeneous metamorphic rock derived from an original shale-type sedimentary rock composed of clay or volcanic ash.', 'Slate.png'),
    new Rock('Limestone', 'A sedimentary rock composed primarily of calcium carbonate (calcite) or the double carbonate of calcium and magnesium (dolomite).', 'iStock-183830933-1024x680.jpg'),
    new Rock('Sandstone', 'A clastic sedimentary rock composed mainly of sand-sized mineral particles or rock fragments.', '00105-IMG_5703-sandstone.jpg')
];

let currentRockIndex = 0;

window.onload = function() {
    const infoBtn = document.getElementById('rockInfoBtn');
    infoBtn.addEventListener('click', function() {
        const rockInfoDiv = document.getElementById('rockInfo');
        rockInfoDiv.innerHTML = rocks[currentRockIndex].displayInfo();
        currentRockIndex = (currentRockIndex + 1) % rocks.length; 
    }, false);
};
