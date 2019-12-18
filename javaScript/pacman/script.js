var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 3, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 0, 1, 3, 1, 1, 2],
    [2, 2, 1, 2, 1, 2, 1, 2, 1, 0, 1, 2, 2, 2, 2, 1, 1, 0, 2],
    [2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 3, 1, 2, 1, 3, 0, 2],
    [2, 1, 1, 1, 1, 1, 3, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 0, 2, 1, 2, 1, 3, 1, 2, 2, 0, 0, 1, 3, 1, 2],
    [2, 1, 2, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 1, 2],
    [2, 0, 1, 1, 1, 2, 1, 2, 1, 3, 1, 0, 1, 1, 1, 2, 2, 1, 2],
    [2, 0, 1, 1, 3, 1, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 2],
    [2, 3, 1, 2, 1, 1, 2, 2, 2, 1, 1, 0, 3, 1, 0, 0, 1, 3, 2],
    [2, 0, 1, 2, 1, 0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 0, 2],
    [2, 2, 1, 1, 1, 3, 0, 1, 1, 1, 2, 2, 2, 1, 1, 2, 3, 0, 2],
    [2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 3, 1, 0, 0, 0, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]

var pacman = {
    x: 1,
    y: 1
};

var ghost = {
    x: 8,
    y: 6
};

var score = 0;

function displayWorld() {
    var output = '';

    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if (world[i][j] == 3)
                output += "<div class='apple'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
}

function displayGhost() {
    document.getElementById('ghost').style.top = ghost.y * 20 + "px";
    document.getElementById('ghost').style.left = ghost.x * 20 + "px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

function checkIfGameOver() {
    if (pacman.y == ghost.y && pacman.x == ghost.x) {
        alert('Game over!');
        location = location;
    }
}

setInterval(function ghostMove() {
    var direction = Math.ceil(Math.random() * 4);
    if (direction == 1) { // then ghost goes up
        if (world[ghost.y - 1][ghost.x] != 2) {
            ghost.y = ghost.y - Math.ceil(Math.random());
            displayGhost();
            checkIfGameOver();
        } else ghostMove(); // if there is a brick on the way, throw dice (1 to 4), and move in given direction   
    }
    if (direction == 2) { // ghost goes right
        if (world[ghost.y][ghost.x + 1] != 2) {
            ghost.x = ghost.x + Math.ceil(Math.random());
            displayGhost();
            checkIfGameOver();
        } else ghostMove();
    }
    if (direction == 3) { // ghost goes down
        if (world[ghost.y + 1][ghost.x] != 2) {
            ghost.y = ghost.y + Math.ceil(Math.random());
            displayGhost();
            checkIfGameOver();
        } else ghostMove();
    }
    if (direction == 4) { // ghost goes left
        if (world[ghost.y][ghost.x - 1] != 2) {
            ghost.x = ghost.x - Math.ceil(Math.random());
            displayGhost();
            checkIfGameOver();
        } else ghostMove();
    }
    displayGhost();
}, 800);

displayWorld();
displayPacman();
displayGhost();

document.onkeydown = function (e) {
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
        checkIfGameOver();
        document.getElementById('pacman').style.backgroundImage = "url(./images/pacman-left.gif)";
    }
    if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
        checkIfGameOver();
        document.getElementById('pacman').style.backgroundImage = "url(./images/pacman-right.gif)";
    }
    if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
        checkIfGameOver();
    }
    if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
        checkIfGameOver();
    }
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayScore();
        displayWorld();
    }
    if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayScore();
        displayWorld();
    }
    displayGhost();
    displayPacman();
}
        // if(score == 1900){
        //     alert('Congratulations! You won!');
        //     location = location;
        // }