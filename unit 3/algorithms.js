document.addEventListener('DOMContentLoaded', function() {
    class Leaf {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    // Arrays to store traversal results
    let depth = [];
    let breadth = [];

    // Creating the tree with the head node and additional leaves
    const head = new Leaf(10);
    head.left = new Leaf(5);
    head.right = new Leaf(15);
    head.left.left = new Leaf(3);
    head.left.right = new Leaf(7);
    head.right.left = new Leaf(13);
    head.right.right = new Leaf(17);
    head.left.left.left = new Leaf(1);
    head.left.left.right = new Leaf(4);
    head.left.right.left = new Leaf(6);
    head.left.right.right = new Leaf(8);
    head.right.left.left = new Leaf(12);
    head.right.left.right = new Leaf(14);

    // Depth-first search function
    function depthFirstSearch(node) {
        if (node !== null) {
            depth.push(node.value);
            depthFirstSearch(node.left);
            depthFirstSearch(node.right);
        }
    }

    // Breadth-first search function
    function breadthFirstSearch(node) {
        let queue = [node];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current !== null) {
                breadth.push(current.value);
                if (current.left !== null) queue.push(current.left);
                if (current.right !== null) queue.push(current.right);
            }
        }
    }

    // Display function for the arrays
    function displayArray(array, elementId) {
        const ulElement = document.getElementById(elementId);
        ulElement.innerHTML = ''; // Clear previous contents
        array.forEach(value => {
            const liElement = document.createElement('li');
            liElement.textContent = value;
            ulElement.appendChild(liElement);
        });
    }

    // Attaching event listeners to buttons
    document.getElementById('dfsButton').addEventListener('click', function() {
        depth = []; // Reset the depth array
        depthFirstSearch(head);
        displayArray(depth, 'depthResults');
    });

    document.getElementById('bfsButton').addEventListener('click', function() {
        breadth = []; // Reset the breadth array
        breadthFirstSearch(head);
        displayArray(breadth, 'breadthResults');
    });
});
