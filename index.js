//Sets a constant array which will be used as the gameboard
const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//Creates the gameboard using a template litiral. Calls the value which is stored in the gameboard array
function gameBoardDisplay(){
console.log(`
${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]} 
${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]} 
${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}`);
return;
};

