document.addEventListener('DOMContentLoaded', function() {
    const maze = document.getElementById('maze');
    const startButton = document.getElementById('startButton');
    let dot;
    let gameStarted = false;

    // Define maze layout (1 represents walls, 0 represents open paths, 2 is the entrance, 3 is the exit)
    const mazeLayout = [
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
    ];

    function createMaze() {
        maze.innerHTML = ''; // Clear previous maze
        maze.style.gridTemplateColumns = `repeat(${mazeLayout[0].length}, 30px)`;
        maze.style.gridTemplateRows = `repeat(${mazeLayout.length}, 30px)`;

        // Create the maze walls and paths based on the layout
        for (let row = 0; row < mazeLayout.length; row++) {
            for (let col = 0; col < mazeLayout[row].length; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell', mazeLayout[row][col] === 1 ? 'wall' : 'path');
                maze.appendChild(cell);
            }
        }

        // Add the dot (player) to the maze at the entrance
        dot = document.createElement('div');
        dot.id = 'dot';
        // Place the dot at the maze's entrance (for example, position (2,2))
        dot.style.gridRowStart = 1; // Assuming the entrance is at row 1
        dot.style.gridColumnStart = 2; // Assuming the entrance is at column 2
        maze.appendChild(dot);
        gameStarted = true;
    }

    // Event listener to start the game
    startButton.addEventListener('click', function() {
        if (!gameStarted) {
            createMaze();
        }
    });

    // Function to handle the dot's movement
    function moveDot(event) {
        if (!gameStarted || !dot) {
            return; // Don't move the dot if the game hasn't started or if dot doesn't exist
        }

        let row = parseInt(dot.style.gridRowStart, 10);
        let col = parseInt(dot.style.gridColumnStart, 10);

        switch (event.key) {
            case 'ArrowUp':
                if (row > 1 && mazeLayout[row - 2][col - 1] === 0) row--;
                break;
            case 'ArrowDown':
                if (row < mazeLayout.length && mazeLayout[row][col - 1] === 0) row++;
                break;
            case 'ArrowLeft':
                if (col > 1 && mazeLayout[row - 1][col - 2] === 0) col--;
                break;
            case 'ArrowRight':
                if (col < mazeLayout[0].length && mazeLayout[row - 1][col] === 0) col++;
                break;
            default:
                return; // Exit this handler for other keys
        }

        // Update the dot's position
        dot.style.gridRowStart = row;
        dot.style.gridColumnStart = col;
        event.preventDefault(); // Prevent scrolling with arrow keys

        // Check for exit
        if (mazeLayout[row - 1][col - 1] === 3) {
            gameStarted = false; // End the game
            alert('Congratulations, you have completed the maze!');
        }
    }

    // Listen for arrow key presses on the document
    document.addEventListener('keydown', moveDot);
});
