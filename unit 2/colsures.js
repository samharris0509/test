function createCharacter(Name, HP, ...moves) {
   
    let hp = HP;
    let name = Name;
    let movesList = moves;

    
    return {
        getHP: function() {
            return hp;
        },
        getName: function() {
            return name;
        },
        displayMoves: function() {
            const movesDiv = document.querySelector('.moves');
            for (const move of movesList) {
                const paragraph = document.createElement('p');
                paragraph.textContent = move;
                movesDiv.appendChild(paragraph);
            }
        }
    };
}


const player = createCharacter("Player", 100, "Move 1", "Move 2", "Move 3");


player.displayMoves();


console.log(player.getHP());
console.log(player.getName());