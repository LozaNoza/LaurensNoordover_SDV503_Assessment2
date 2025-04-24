//Variables used for player turns and storing numbers 
let currentPlayer;
let turn = 1;
let gameRunning = true;
let x;
let playerWon = false;

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
    for(let e = 0; i < winConditions.length; e++){
        const condition = winConditions[e];
        const cellA = gameBoard[condition [1]];
        const cellB = gameBoard[condition [2]];
        const cellC = gameBoard[condition [3]];
        if(typeof cellA === 'number' ||  typeof cellB === 'number' ||  typeof cellC === 'number'){
            continue
        }
        if(cellA == cellB && cellB == cellC){
            playerWon = true;
            continue
        }
    }
    if(takenNumbers.length === 10 || playerWon == true){
        gameRunning = false;;
        if(takenNumbers.length === 10){
            console.log("Game over no moves left, no winners :(");
            gameBoardDisplay();
        }
        if(playerWon == true){
            console.log(`Player ${ "winner" } wins! :D`);
            gameBoardDisplay();
        }
        else{
            console.log("Game error, please restart game");
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
            };
        };
    };