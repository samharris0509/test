
async function runningCompetition() {
    let loser = '';
    
 
    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, Math.random() * 10000); 
    });

    
    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, Math.random() * 10000); 
    });

    console.log("Promises created:");
    console.log("runner1Go:", runner1Go);
    console.log("runner2Go:", runner2Go);
    console.log("loser:", loser);

   
    const result1 = await runner1Go;
    const result2 = await runner2Go;

   
    return [result1, result2, loser];
}


runningCompetition()
    .then((resultArray) => {
        const loser = resultArray[2]; 
        console.log("Loser:", loser);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
