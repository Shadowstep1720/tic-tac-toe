const gameController = (function () {
    let boardArray = ["", "", "", "", "", "", "", "", ""];
    let currentTurn = "X";

    // Private function: Returns current turn in form of string ("X" or "O")
    const getCurrentTurn = function () {
        return currentTurn;
    }

    /* Accepts integer that corresponds to position of move on the board:
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
    Returns object with integer representing index of current move in the
    board array and current turn as a string ("X" or "O") */
    const move = function (position) {
        let moveIndex = position - 1;
        boardArray[moveIndex] = currentTurn;
        return { moveIndex, currentTurn }
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
    const reset = function () {
        boardArray = ["", "", "", "", "", "", "", "", ""]
    }

    /* Accepts an object (return of move method) containing index of latest (int) 
    and current turn (string)
    
    Returns object containing whether the game is over (bool) and result (string: "X", "O", or "tie"). 
    If gameEnd is false, an empty string is returned 
    
    TODO: insert logic that checks for 3 consecutive matches*/
    const findWinner = function (latestMove) {
        let gameEnd = false;

        let { moveIndex, currentTurn } = latestMove;
        if (moveIndex === 0) {
            if (boardArray) {
                //logic to detect 3 same in a row...not sure best way to complete this
            }
        }

        return { gameEnd, result }
    }

    return { getCurrentTurn, move, changeTurn, reset, findWinner }

})();

