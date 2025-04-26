//Variables used for player turns and storing numbers 
let currentPlayer;
let turn = 1;
let gameRunning = true;
let x;
const xTurns = [1, 3, 5, 7, 9];
let playerWon = false;
let e = 0;
let winningPlayer;
let winningRow;

//Sets a constant array which will be used as the gameboard
const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//To see the generated x numbers
const takenNumbers = [];
const winConditions = [ [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                        [1, 4, 7],
                        [2, 5, 8],
                        [3, 6, 9],
                        [1, 5, 9],
                        [3, 5, 7]
                      ];

//Creates the gameboard using a template litiral. Calls the value which is stored in the gameboard array
function gameBoardDisplay(){
console.log(`
${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]} 
${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]} 
${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}
\n \n`);
return;
};


while(gameRunning){
    //Creates a random number that is used to place the X in the gameboard array
    let i = Math.floor(Math.random() * 10);
    for(let e = 0; e < winConditions.length; e++){
        const cellA = gameBoard[winConditions[e][0]];
        const cellB = gameBoard[winConditions[e][1]];
        const cellC = gameBoard[winConditions[e][2]];
        if(cellA == cellB && cellB == cellC){
            playerWon = true;
            winningPlayer = cellA;
            winningRow = winConditions[e];
            continue
        }
        else{
            continue
        }
    };
    if(takenNumbers.length === 10 || playerWon == true){
        gameRunning = false;
        if(takenNumbers.length === 10){
            console.log("Game over no moves left, no winners :(");
            gameBoardDisplay();
            return;
        }
        if(playerWon == true){
            console.log(`Player ${ winningPlayer } wins with a row on ${winningRow}! :D`);
            gameBoardDisplay();
            return;
        }
        else{
            console.log("Game error, please restart game");
            return;
        }    
    }
    else if (takenNumbers.includes(i) == false){
        if(xTurns.includes(turn) == true){
            currentPlayer = "X";
            console.log(`${ currentPlayer }'s turn. Please select an avalible number from the gameboard.`);
            gameBoardDisplay();
            console.log(`You have selected number ${ i }`);
            takenNumbers.push(i);
            gameBoard[i] = "X";
            console.log(`The updated game board is the following`);
            gameBoardDisplay();                
            turn++;
            continue
        }else{
            currentPlayer = "O";
            console.log(`${ currentPlayer }'s turn. Please select an avalible number from the gameboard.`);
            gameBoardDisplay();
            console.log(`You have selected number ${ i }`);
            takenNumbers.push(i);
            gameBoard[i] = "O";
            console.log(`The updated game board is the following`);
            gameBoardDisplay();
            turn++;
            continue
            }
        }
    }