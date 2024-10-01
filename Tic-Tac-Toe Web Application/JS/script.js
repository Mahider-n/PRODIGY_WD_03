const playerText = document.getElementById("playerText");
const restartBtn = document.getElementById("restartBtn");
const boxes = Array.from(document.getElementsByClassName("box"));

const O_TEXT = "O";
const X_TEXT = "X";

let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

// Variables to track consecutive wins
let consecutiveWins = {
    X: 0,
    O: 0
};
let lastWinner = null;

const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked));
}

function boxClicked(e) {
    const id = e.target.id;
    
    // Check if the clicked box is empty
    if (!spaces[id]) {
        // Set the current player's symbol in the clicked box
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        // Check if the current player has won
        const winningBlock = playerHasWon();
        if (winningBlock) {
            // Check if the current player is the same as last time, increment consecutive wins
            if (lastWinner === currentPlayer) {
                consecutiveWins[currentPlayer]++;
            } else {
                // Reset the opponent's consecutive wins and set the current player's count to 1
                consecutiveWins[currentPlayer] = 1;
                consecutiveWins[getOpponent(currentPlayer)] = 0;
            }

            lastWinner = currentPlayer; // Update the last winner

            // Apply balloon pop effect to winning cells
            winningBlock.forEach(box => boxes[box].classList.add("balloon-pop"));

            // If the player has won 3 consecutive games, show the final win message
            if (consecutiveWins[currentPlayer] === 3) {
                playerText.innerHTML = `${currentPlayer} has won the game!!`;
                playerText.classList.add('roll-animation');
                return;
            }

            // Automatically restart the game after a win (without displaying intermediate messages)
            setTimeout(restart, 2000); // Add a small delay before restarting the game
            return;
        }

        // Switch the current player
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
    }
}

// Define the winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Check if a player has won
function playerHasWon() {
    for (const condition of winningCombinations) {
        let [a, b, c] = condition;
        if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
            return [a, b, c]; // Return the winning combination
        }
    }
    return false;
}

// Get the opponent of the current player
function getOpponent(player) {
    return player === X_TEXT ? O_TEXT : X_TEXT;
}

// Reset the game when the restart button is clicked
restartBtn.addEventListener('click', restart);
function restart() {
    spaces.fill(null);
    
    // Reset the board and remove any balloon-pop effects
    boxes.forEach(box => {
        box.innerText = '';
        box.classList.remove("balloon-pop"); // Remove the balloon pop effect
    });
    currentPlayer = X_TEXT;  
    playerText.classList.remove('roll-animation'); 
}

startGame(); // Initialize the game

















































//


/*const playerText = document.getElementById("playerText");
const restartBtn = document.getElementById("restartBtn");
const boxes = Array.from(document.getElementsByClassName("box"));

const O_TEXT = "O";
const X_TEXT = "X";

// Variables to track consecutive wins
let consecutiveWins = 0;
let lastWinner = null;

let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked));
    }

function boxClicked(e) {
    const id = e.target.id;
     // Check if the clicked box is empty
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
    // Check if the current player has won
    const winningBlock = playerHasWon();
    if (winningBlock) {
        playerText.innerHTML = `${currentPlayer} has won!!`;
        
        // Apply balloon pop effect to winning cells
        winningBlock.forEach(box => boxes[box].classList.add("balloon-pop"));
        return;
    }
    
    // Switch the current player
    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
    }
}
// Define the winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Check if a player has won
function playerHasWon() {
    for (const condition of winningCombinations) {
        let [a, b, c] = condition;
        if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
            return [a, b, c]; // Return the winning combination
        }
    }
    return false;
}

// Reset the game when the restart button is clicked
restartBtn.addEventListener('click', restart);
function restart() {
    spaces.fill(null);
    
    // Reset the board and remove any balloon-pop effects
    boxes.forEach(box => {
        box.innerText = '';
        box.classList.remove("balloon-pop"); // Remove the balloon pop effect
    });

    playerText.innerHTML = 'Tic Tac Toe';
    currentPlayer = X_TEXT; // Reset to player X
}

startGame(); // Initialize the game



        /*if (playerHasWon() !== false) {
            playerText.innerHTML = `${currentPlayer} has won!!`;
            let winning_block = playerHasWon();
            winning_block.map(box => boxes[box].classList.add("balloon-pop"));
            return;
            }
            currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
            }
        }

const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

function playerHasWon() {
    for (const condition of winningCombinations) {
        let [a, b, c] = condition;
        if (spaces[a] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])) {
            return [a, b, c];
        }
    }
    return false;
}

restartBtn.addEventListener('click', restart);
function restart() {
    spaces.fill(null);
    boxes.forEach(box => {

        box.innerText = '';
        box.style.backgroundColor = '';
        box.classList.remove("balloon-pop"); // Remove the balloon pop effect
            });

        playerText.innerHTML = 'Tic Tac Toe';
        currentPlayer = X_TEXT;
    }
startGame();*/