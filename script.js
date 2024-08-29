const gameController = (function () {
    let boardArray, currentTurn, turnCounter;

    // Private function: Returns current turn in form of string ("X" or "O")
    const getCurrentTurn = function () {
        return currentTurn;
    }

    /* Accepts an array that of two integers that correspond to position of move on the board:

    Returns object with the y index, xindexm and current player of the last turn as a string ("X" or "O") */
    const move = function (position) {
        let [xIndex, yIndex] = position;
        boardArray[yIndex][xIndex] = currentTurn;
        turnCounter++;
        return { yIndex, xIndex, currentTurn }
    }

    // Toggles current turn 
    const changeTurn = function () {
        if (getCurrentTurn() === "X") {
            currentTurn = "O";
        } else {
            currentTurn = "X";
        }
    }

    // Sets boardArray to 9 empty strings
    const start = function () {
        boardArray = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]

        currentTurn = "X"

        turnCounter = 0;
    }

    /* Accepts an object (return of move method) containing index of latest (int) 
    and current turn (string)
    
    Returns object containing whether the game is over (bool) and result (string: "X", "O", or "tie"). 
    If gameEnd is false, an empty string is returned 
    
    TODO: insert logic that checks for 3 consecutive matches*/
    const findWinner = function (latestMove) {
        let gameEnd = false;
        let result = ""

        let { yIndex, xIndex, currentTurn } = latestMove;

        // test move column for win
        if (boardArray[0][xIndex] === boardArray[1][xIndex] && boardArray[1][xIndex] === boardArray[2][xIndex]) {
            gameEnd = true;
            result = currentTurn;
        } else if (boardArray[yIndex][0] === boardArray[yIndex][1] && boardArray[yIndex][1] === boardArray[yIndex][2]) {
            gameEnd = true;
            result = currentTurn;
        } else if (boardArray[0][0] === boardArray[1][1] && boardArray[1][1] === boardArray[2][2]) {
            gameEnd = true;
            result = currentTurn;
        } else if (boardArray[0][2] === boardArray[1][1] && boardArray[1][1] === boardArray[2][0]) {
            gameEnd = true;
            result = currentTurn;
        } else if (turnCounter >= 9) {
            gameEnd = true;
            result = "tie";
        }

        return { gameEnd, result }
    }

    return { getCurrentTurn, move, changeTurn, start, findWinner }

})();

