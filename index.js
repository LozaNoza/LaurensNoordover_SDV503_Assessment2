/*The program that has been written is a simple tic-tac-toe game
When node . is typed in the terminal, a 3x3 game board is created, that fills X's and O's randomly until one of the letters is the first to create a horizontal, vertical or diagonal line of their letter.
Once this has happened, the game will finish.
If neither of the letters can create a line of their letter, and the game board is full, the game will be classified as a draw and will come to an end.*/

//Variables used for player turns and storing numbers 
let turn = 1;
let gameRunning = true;
let playerWon = false;
let winningPlayer;
let winningRow;

//Sets a constant array which will be used as the gameboard
const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//To see the generated x numbers
const takenNumbers = [];

//Creates a 2D array which contains all of the indexs that if a line of X's or O's are at, result in a game win
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
${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}`);
return;
};

//Creates a function for the X's and O's to play thier turns
function gameFunction(pickedNumber, currentPlayer){
    gameBoardDisplay();
    console.log(`\n${ currentPlayer }'s are the current player. Please select an avalible number from the gameboard.`)
    console.log(`\n${ currentPlayer } has selected number ${ pickedNumber }`);
    takenNumbers.push(pickedNumber);
    gameBoard[pickedNumber] = currentPlayer;               
    turn++;
}

//Messages that outlines the objective of the game and how it will play out
console.log(`Welcome to this game of tic tac toe. The computer will alternate between playing for the X's and O's.
			\nIt will select a random number that is avalible from the bellow game board and replace it with the current players letter.
			\nThe same number is unable to be used more than once, so if X or O wants to insert a number into a square which has already been filled by one of them, they will need to select a new one.
			\nIf either X or O is the first to make a horizontal, vertical or diaganal line, they will be crowned the winner. 
            \nIf neither letter is able to create a line and there are no moves left. The game will end in a draw...
            \nLet the game BEGIN!`)

//Creates a looping while loop that continues to run while the gameRunning variable is false and the game board is not yet full, or no one has won yet.
while(gameRunning){
    //Creates a random number that is used to place the X in the gameboard array
    let pickedNumber = Math.floor((Math.random() * 9) + 1);
    //Checks to see if any of the win condtions set in the winCondition array are met. If they aren't the while loop will continue on from the else statement
    for(let e = 0; e < winConditions.length; e++ ){
        const cellA = gameBoard[winConditions[e][0]];
        const cellB = gameBoard[winConditions[e][1]];
        const cellC = gameBoard[winConditions[e][2]];
		//If all the cells that are set aove match eachother, the game will prepair to conclude by setting playerWon to true, recording what letter has won and which paturn has caused the win.
        if(cellA == cellB && cellB == cellC){
            playerWon = true;
            winningPlayer = cellA;
            winningRow = winConditions[e];
            break
        }
		//If the game has run through all the possable win condtions and has not been able to find one the program will contnue to the following code
        else{
            continue
        }
    }

    //Checks to see if the taken numbers variable is has 9 numbers meaning the game board is full, and also checks to see if there are any winning players found in the previous for loop.
    if(takenNumbers.length === 9 || playerWon == true){
        gameRunning = false;
        //If the takenNumbers has 9 indexes filled it means that the gameBoard is full. The gameboard will be displayed one last time and the game will notify the player that there are no more moved left.
        if(takenNumbers.length === 9){
            gameBoardDisplay();
            console.log(`\nGame over no moves left, no winners. This match is a draw.`);
            return;
        }
        //If a player has been found in the previous for loop, the game will display the gameBoard one last time and say who won and where the winning line is.
        if(playerWon == true){
            gameBoardDisplay();            
            console.log(`\nPlayer ${ winningPlayer } wins with a row on ${winningRow}! Congratulations!`);
            return;
        }
        //If for any reason the game enters the if statement this else is in, and there are no winners and the gameBoard is not full. An error code will display.
        else{
            console.log("Game error, please restart game.");
            return;
        }
    }

    //If there are no winners, the gameboard is not full and the number that has been generated by pickedNumbers has not yet been used. The X or O's will use the number to fill in thier letter on the game board.
    else if (takenNumbers.includes(pickedNumber) == false){
        //If the turns are even, the O's will play
        if(turn % 2 == 0){
            let currentPlayer = "O";
            gameFunction(pickedNumber, currentPlayer);
            continue;
        //Else if the turn is not even, meaning it is an odd number. The X's will play
        }else{
            let currentPlayer = "X";
            gameFunction(pickedNumber, currentPlayer);
            continue;
        }
    }
}