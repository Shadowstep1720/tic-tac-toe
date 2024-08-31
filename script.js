const game = (function () {
    let boardArray, currentTurn, turnCounter;

    // Private function: Returns current turn in form of string ("X" or "O")
    const getCurrentTurn = function () {
        return currentTurn;
    }

    const getBoard = function () {
        return boardArray;
    }

    /* Accepts two integers that correspond to position of move on the board:

    Returns object with the y index, xindexm and current player of the last turn as a string ("X" or "O") */
    const move = function (yIndex, xIndex) {
        boardArray[yIndex][xIndex] = getCurrentTurn();
        turnCounter++;
        return { yIndex, xIndex }
    }

    // Toggles current turn 
    const changeTurn = function () {
        if (getCurrentTurn() === "X") {
            currentTurn = "O";
        } else {
            currentTurn = "X";
        }
    }

    // Sets boardArray to 9 empty strings, currentTurn to "X" and turnCounter to 0
    const reset = function () {
        boardArray = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]

        currentTurn = "X"

        turnCounter = 0;

        return { boardArray, currentTurn }
    }

    /* Accepts an object (return of move method) containing index of latest (int) 
    and current turn (string)
    
    Returns object containing whether the game is over (bool) and result (string: "X", "O", or "tie"). 
    If gameEnd is false, an empty string is returned 
    
    TODO: insert logic that checks for 3 consecutive matches*/
    const findWinner = function (latestMove) {
        let gameEnd = false;
        let result = ""
        let currentTurn = getCurrentTurn()

        let { yIndex, xIndex } = latestMove;

        // test move column for win
        if (boardArray[0][xIndex] === boardArray[1][xIndex] && boardArray[1][xIndex] === boardArray[2][xIndex]) {
            gameEnd = true;
            result = currentTurn;
        } else if (boardArray[yIndex][0] === boardArray[yIndex][1] && boardArray[yIndex][1] === boardArray[yIndex][2]) {
            gameEnd = true;
            result = currentTurn;
        }
        else if (boardArray[0][0] === boardArray[1][1] && boardArray[1][1] === boardArray[2][2] && boardArray[1][1] != "") {
            gameEnd = true;
            result = currentTurn;
        }
        else if (boardArray[0][2] === boardArray[1][1] && boardArray[1][1] === boardArray[2][0] && boardArray[1][1] != "") {
            gameEnd = true;
            result = currentTurn;
        } else if (turnCounter >= 9) {
            gameEnd = true;
            result = "tie";
        }

        return { gameEnd, result }
    }

    const runRound = function (yIndex, xIndex) {
        let lastMove = move(yIndex, xIndex);
        let result = findWinner(lastMove);
        let gameBoard = getBoard();
        changeTurn();
        let currentTurn = getCurrentTurn();

        return { gameBoard, result, currentTurn }
    }

    return { reset, runRound }

})();



game.reset()

let test = game.runRound(0, 0);
console.log(test);

test = game.runRound(1, 1);
console.log(test);

test = game.reset();
console.log(test);
