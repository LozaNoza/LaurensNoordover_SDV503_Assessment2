//Sets a constant array which will be used as the gameboard
const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//To see the gnerated x numbers
const takenNumbers = [];


//Creates the gameboard using a template litiral. Calls the value which is stored in the gameboard array
function gameBoardDisplay(){
console.log(`
${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]} 
${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]} 
${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}`);
return;
};

//Sets a game status that changes if the game should stop running
let gameRunning = true;

let total = 0;

//Using what was learnt during Nayland visit
while(gameRunning){
//Creates a random number that is used to place the X in the gameboard array
let i = Math.floor(Math.random() * 10);
    //Shows updated gameboard
    if (!takenNumbers.includes(i)){
        takenNumbers.push(i);
        gameBoard[i] = "x";
        gameBoardDisplay();
        console.log(takenNumbers);
    }
    if(takenNumbers.length === 10){
        gameRunning = false;
        console.log(takenNumbers);
    };
};