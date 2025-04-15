//Sets a constant array which will be used as the gameboard
const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//To see the generated x numbers
const takenNumbers = [];

let turn = 1;
const xTurns = [1, 3, 5, 7, 9];
let gameRunning = true;


//Creates the gameboard using a template litiral. Calls the value which is stored in the gameboard array
function gameBoardDisplay(){
console.log(`
${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]} 
${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]} 
${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}`);
return;
};


while(gameRunning){
//Creates a random number that is used to place the X in the gameboard array
let i = Math.floor(Math.random() * 10);
    if(takenNumbers.length === 10){
        gameRunning = false;;
        console.log("Game done");
        return;
    } else if (takenNumbers.includes(i) == false){
        if(xTurns.includes(turn) == true){
            takenNumbers.push(i);
            gameBoard[i] = "X";
            gameBoardDisplay();
            console.log(takenNumbers);
            turn++;
        }else{
            takenNumbers.push(i);
            gameBoard[i] = "O";
            gameBoardDisplay();
            console.log(takenNumbers);
            turn++;
        };
    };
};
