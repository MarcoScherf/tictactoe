let fields = [];
let gameOver = false;
let currentShape = 'cross';

// Help function //
function getID(id) {
    return document.getElementById(id);
}
// ************* //

// changes the display of the players //
function fieldshape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            getID('player-2').classList.remove('player-inactive');
            getID('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            getID('player-2').classList.add('player-inactive');
            getID('player-1').classList.remove('player-inactive');
        }
        fields[id] = currentShape;
        showShape();
        checkForWin();
    }
}
// ************* //

// show cross or circle in the game field // 
function showShape() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            getID(`circle-${i}`).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            getID(`cross-${i}`).classList.remove('d-none');
        }
    }
}
// ************* //

// check winner //
function checkForWin() {
    let winner;
    horizontalWin(winner);
    vertikalWin(winner);
    diagonalWin(winner);
}
// ************* //

// check the horizontal line for winners //
function horizontalWin(winner) {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        getID('line-0').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        getID('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        getID('line-2').style.transform = 'scaleX(1)';
    }
    showWinner(winner);
}
// ************* //

//check the vertikal line for winners //
function vertikalWin(winner) {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        getID('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        getID('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        getID('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    showWinner(winner);
}
// ************* //

//check the diagonal line for winners //
function diagonalWin(winner) {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        getID('line-6').style.transform = 'rotate(45deg) scaleX(1.2)';

    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        getID('line-7').style.transform = 'rotate(-45deg) scaleX(1.2)';

    }
    showWinner(winner);
}
// ************* //

// shows which player won //
function showWinner(winner) {
    if (winner) {
        if (winner == 'circle') {
            playerOneWin();
        } else {
            if (winner == 'cross') {
                playerTwoWin();
            }
        }
    } else {
        if (fields.filter(String).length == 9) {
            draw();
        }
    }
}
// ************* //

// player one is winner //
function playerOneWin() {
    setTimeout(function() {
        getID('game-over').classList.remove('d-none');
        getID('game-over-img').src = 'img/player1win.png';
        getID('game-field').classList.add('d-none');
    }, 1000);
    gameOver = true;
}
// ************* //

// player two is winner //
function playerTwoWin() {
    setTimeout(function() {
        getID('game-over').classList.remove('d-none');
        getID('game-over-img').src = 'img/player2win.png';
        getID('game-field').classList.add('d-none');
    }, 1000);
    gameOver = true;
}
// ************* //

// game is a draw /
function draw() {
    setTimeout(function() {
        getID('game-over').classList.remove('d-none');
        getID('game-field').classList.add('d-none');
    }, 1000);
    gameOver = true;
}
// ************* //

// restrat the game //
function restart() {
    fields = [];
    currentShape = 'cross';
    gameOver = false;
    for (let i = 0; i < 9; i++) {
        getID('circle-' + i).classList.add('d-none');
        getID('cross-' + i).classList.add('d-none');
    }
    for (let i = 0; i < 8; i++) {
        getID('line-' + i).style.transform = 'scaleX(0)';
    }
    restartClasses();
}
// ************* //

// restart the classes // 
function restartClasses() {
    getID('game-over').classList.add('d-none');
    getID('game-field').classList.remove('d-none');
    getID('player-2').classList.add('player-inactive');
    getID('player-1').classList.remove('player-inactive');
}
// ************* //