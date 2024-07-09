var wordsHashTable = [];
var board = [];
var bag = [
            "A","A","A","A","A","A","A","A","A",
            "B","B",
            "C","C",
            "D","D","D","D",
            "E","E","E","E","E","E","E","E","E","E","E","E",
            "F","F",
            "G","G","G",
            "H","H",
            "I","I","I","I","I","I","I","I","I",
            "J",
            "K",
            "L","L","L","L",
            "M","M",
            "N","N","N","N","N","N",
            "O","O","O","O","O","O","O","O",
            "P","P",
            "Q",
            "R","R","R","R","R","R",
            "S","S","S","S",
            "T","T","T","T","T","T",
            "U","U","U","U",
            "V","V",
            "W","W",
            "X",
            "Y","Y",
            "Z",
            " "," "
        ];
var boardLayout = [
    {type: "3w", x: 1, y: 1},
    {type: "3w", x: 1, y: 13},
    {type: "3w", x: 13, y: 13},
    {type: "3w", x: 13, y: 1},
    

    {type: "3l", x: 0, y: 0},
    {type: "3l", x: 0, y: 2},
    {type: "3l", x: 2, y: 2},
    {type: "3l", x: 2, y: 0},

    {type: "3l", x: 0, y: 12},
    {type: "3l", x: 0, y: 14},
    {type: "3l", x: 2, y: 14},
    {type: "3l", x: 2, y: 12},

    {type: "3l", x: 12, y: 12},
    {type: "3l", x: 12, y: 14},
    {type: "3l", x: 14, y: 14},
    {type: "3l", x: 14, y: 12},

    {type: "3l", x: 12, y: 0},
    {type: "3l", x: 12, y: 2},
    {type: "3l", x: 14, y: 2},
    {type: "3l", x: 14, y: 0},

    {type: "3l", x: 6, y: 6},
    {type: "3l", x: 6, y: 8},
    {type: "3l", x: 8, y: 8},
    {type: "3l", x: 8, y: 6},
    

    {type: "2w", x: 1, y: 7},
    {type: "2w", x: 7, y: 1},
    {type: "2w", x: 13, y: 7},
    {type: "2w", x: 7, y: 13},

    {type: "2w", x: 3, y: 3},
    {type: "2w", x: 4, y: 5},
    {type: "2w", x: 5, y: 7},
    {type: "2w", x: 4, y: 9},
    {type: "2w", x: 3, y: 11},
    
    {type: "2w", x: 11, y: 3},
    {type: "2w", x: 10, y: 5},
    {type: "2w", x: 9, y: 7},
    {type: "2w", x: 10, y: 9},
    {type: "2w", x: 11, y: 11},
    

    {type: "2l", x: 0, y: 4},
    {type: "2l", x: 2, y: 4},
    {type: "2l", x: 4, y: 0},
    {type: "2l", x: 4, y: 2},

    {type: "2l", x: 14, y: 4},
    {type: "2l", x: 12, y: 4},
    {type: "2l", x: 10, y: 0},
    {type: "2l", x: 10, y: 2},

    {type: "2l", x: 14, y: 10},
    {type: "2l", x: 12, y: 10},
    {type: "2l", x: 10, y: 14},
    {type: "2l", x: 10, y: 12},

    {type: "2l", x: 4, y: 14},
    {type: "2l", x: 4, y: 12},
    {type: "2l", x: 0, y: 10},
    {type: "2l", x: 2, y: 10},
    
    {type: "2l", x: 6, y: 1},
    {type: "2l", x: 8, y: 1},
    {type: "2l", x: 1, y: 6},
    {type: "2l", x: 1, y: 8},
    {type: "2l", x: 6, y: 13},
    {type: "2l", x: 8, y: 13},
    {type: "2l", x: 13, y: 6},
    {type: "2l", x: 13, y: 8},
    
    {type: "2l", x: 5, y: 4},
    {type: "2l", x: 7, y: 3},
    {type: "2l", x: 9, y: 4},
    
    {type: "2l", x: 5, y: 10},
    {type: "2l", x: 7, y: 11},
    {type: "2l", x: 9, y: 10}

];
const pointsLookup = [
    {letter: "A", points: 1},
    {letter: "B", points: 3},
    {letter: "C", points: 3},
    {letter: "D", points: 2},
    {letter: "E", points: 1},
    {letter: "F", points: 4},
    {letter: "G", points: 2},
    {letter: "H", points: 4},
    {letter: "I", points: 1},
    {letter: "J", points: 8},
    {letter: "K", points: 5},
    {letter: "L", points: 1},
    {letter: "M", points: 3},
    {letter: "N", points: 1},
    {letter: "O", points: 1},
    {letter: "P", points: 3},
    {letter: "Q", points: 10},
    {letter: "R", points: 1},
    {letter: "S", points: 1},
    {letter: "T", points: 1},
    {letter: "U", points: 1},
    {letter: "V", points: 4},
    {letter: "W", points: 4},
    {letter: "X", points: 8},
    {letter: "Y", points: 4},
    {letter: "Z", points: 10},
    {letter: " ", points: 0}
];
var mouseSavedOffset = [];
var grabbedTile = null;
var trayTiles = [];

function onStart() {
    instantiateHashTable();
    setupBoard();
    setupBlankPopup();
    refillTray();
}

function refillTray() {
    const loopTimes = 7 - document.getElementById("tray").childElementCount;
    for (let i = 0; i < loopTimes; i++) {
        refillTrayOnce();
    }
}

function refillTrayOnce() {
    var element = document.createElement("div");
    element.classList.add("letter_tile");
    element.classList.add("placed");

    let index = Math.floor(Math.random()*bag.length);
    let letterLabel = document.createElement("div");
    letterLabel.textContent = bag[index];
    element.appendChild(letterLabel);
    let pointElement = document.createElement("div");
    pointElement.classList.add("tilePoints");
    for (let i = 0; i < pointsLookup.length; i++) {
        if (pointsLookup[i].letter === bag[index]) {
            pointElement.textContent = pointsLookup[i].points;
        }
    }
    element.appendChild(pointElement)
    bag.splice(index, 1);

    element.addEventListener("mousedown", (event) => {
        if (!element.classList.contains("placed")) {
            return;
        }
        var bounds = element.getBoundingClientRect();
        mouseSavedOffset = [event.clientX - bounds.x, event.clientY - bounds.y];
        grabbedTile = element;
        element.parentNode.removeChild(element);
        if (element.parentNode === document.getElementById("tray")) {
            trayTiles.splice(trayTiles.indexOf(element), 1);
        }
        document.body.appendChild(element);
        element.style.position = "absolute";
        element.style.left = bounds.x + "px";
        element.style.top = bounds.y + "px";

        if (element.id === "blankTBD") {
            element.firstElementChild.textContent = " ";
            element.classList.remove("mimicked");
        }

        displayIncorrectTiles();
    });

    document.getElementById("tray").appendChild(element);
    trayTiles.push(element);
}

document.addEventListener("mousemove", (event) => {
    if (grabbedTile !== null) {
        grabbedTile.style.left = event.clientX - mouseSavedOffset[0] + "px";
        grabbedTile.style.top = event.clientY - mouseSavedOffset[1] + "px";

        var boardBounds = document.getElementById("board").getBoundingClientRect();
        var tileBounds = grabbedTile.getBoundingClientRect();
        var trayBounds = document.getElementById("tray").getBoundingClientRect();
        if (tileBounds.x + tileBounds.width / 2 > trayBounds.x &&
            tileBounds.x + tileBounds.width / 2 < trayBounds.x + trayBounds.width &&
            event.clientY > boardBounds.y + boardBounds.height)
            // tileBounds.y + tileBounds.height / 2 > trayBounds.y &&
            // tileBounds.y + tileBounds.height / 2 < trayBounds.y + trayBounds.height) 
        {
            let allTiles = document.getElementsByClassName("letter_tile");
            let trayChildren = [];
            for (let i = 0; i < allTiles.length; i++) {
                if (allTiles[i].parentElement.id === "tray") {
                    trayChildren.push(allTiles[i]);
                }
            }

            for (let i = 0; i < trayChildren.length; i++) {
                trayChildren[i].style.transform =  `rotate(${Math.sign(trayChildren[i].getBoundingClientRect().x - tileBounds.x) * 10}deg)`;
            }
        } else {
            let allTiles = document.getElementsByClassName("letter_tile");
            let trayChildren = [];
            for (let i = 0; i < allTiles.length; i++) {
                if (allTiles[i].parentElement.id === "tray") {
                    trayChildren.push(allTiles[i]);
                }
            }
            for (let i = 0; i < trayChildren.length; i++) {
                trayChildren[i].style.transform =  `rotate(0deg)`;
            }
        }
    }
});

document.addEventListener("mouseup", (event) => {
    if (grabbedTile !== null) {
        // If the mouse is over the board
        let boardBounds = document.getElementById("board").getBoundingClientRect();
        let trayBounds = document.getElementById("tray").getBoundingClientRect();
        if (event.clientX > boardBounds.x &&
            event.clientX < boardBounds.x + boardBounds.width &&
            event.clientY > boardBounds.y &&
            event.clientY < boardBounds.y + boardBounds.height) 
            {
            placeTileOnBoard(event);
        } else if (event.clientX > trayBounds.x &&
                    event.clientX < trayBounds.x + trayBounds.width)
                    // event.clientY > trayBounds.y &&
                    // event.clientY < trayBounds.y + trayBounds.height) 
            {
            placeTileOnTray();
        } else {
            returnTileToTray();
        }
        grabbedTile = null;
        for (let i = 0; i < trayTiles.length; i++) {
            trayTiles[i].style.transform =  `rotate(0deg)`;
        }
    }
});

function returnTileToTray() {
    document.body.removeChild(grabbedTile);
    document.getElementById("tray").appendChild(grabbedTile);
    trayTiles.push(grabbedTile);
    grabbedTile.style.position = "relative";
    grabbedTile.style.left = "0px";
    grabbedTile.style.top = "0px";
}

function placeTileOnTray() {
    let tileBounds = grabbedTile.getBoundingClientRect();
    let allTiles = document.getElementsByClassName("letter_tile");
    let trayChildren = [];
    for (let i = 0; i < allTiles.length; i++) {
        if (allTiles[i].parentElement.id === "tray") {
            trayChildren.push(allTiles[i]);
        }
    }

    for (let i = 0; i < trayChildren.length; i++) {
        if (trayChildren[i].getBoundingClientRect().x > tileBounds.x) {
            document.getElementById("tray").insertBefore(grabbedTile, trayChildren[i]);
            grabbedTile.style.position = "relative";
            grabbedTile.style.left = "0px";
            grabbedTile.style.top = "0px";
            return;
        }
    }

    returnTileToTray();
}

function placeTileOnBoard(event) {
    grabbedTile.style.left = event.clientX - mouseSavedOffset[0] + "px";
    grabbedTile.style.top = event.clientY - mouseSavedOffset[1] + "px";
    var tileBounds = grabbedTile.getBoundingClientRect();
    var elementslist = document.elementsFromPoint(event.clientX - mouseSavedOffset[0] + tileBounds.width / 2, event.clientY - mouseSavedOffset[1] + tileBounds.height / 2);
    var newElementContainer = "none";
    for (let i=0; i<elementslist.length; i++) {
        if (elementslist[i].classList.contains("box")) {
            newElementContainer = elementslist[i];
        }
    }

    if (newElementContainer.firstElementChild === null) {
        document.body.removeChild(grabbedTile);
        newElementContainer.appendChild(grabbedTile);
        if (grabbedTile.firstChild.textContent === " ") {
            grabbedTile.id = "blankTBD";
            document.getElementById("blankPopup").classList.remove("hidden");
        }
        displayIncorrectTiles();
    } else {
        document.getElementById("tray").appendChild(grabbedTile);
        trayTiles.push(grabbedTile);
    }
    grabbedTile.style.position = "relative";
    grabbedTile.style.left = "0px";
    grabbedTile.style.top = "0px";
}

function displayIncorrectTiles() {
    var [invalidWords, invalidLetters] = validateBoard();
    if (invalidWords.length > 0) {
        if (invalidWords.length === 1) {
            document.getElementById("incorrectLabel").textContent = invalidWords[0] + " is not a word.";
        } else {
            document.getElementById("incorrectLabel").textContent = invalidWords.join(", ") + " are not words.";
        }
        document.getElementById("acceptButton").classList.add("greyed");
    } else if (invalidLetters > 0) {
        if (invalidLetters === 1) {
            document.getElementById("incorrectLabel").textContent = "1 tile out of place.";
            document.getElementById("acceptButton").classList.add("greyed");
        } else {
            document.getElementById("incorrectLabel").textContent = invalidLetters + " tiles out of place.";
            document.getElementById("acceptButton").classList.add("greyed");
        }
    } else {
        document.getElementById("incorrectLabel").textContent = "+ " + assessPlay() + " points";
        document.getElementById("acceptButton").classList.remove("greyed");
    }
}

// God this took forever
function validateBoard() {
    // Find both letters and words by searching vertically and horizontally.
    var foundLetters = [];
    var foundHorizontalWords = [];
    var foundVerticalWords = [];
    for (let i = 0; i < 15; i++) {
        var currentWord = "";
        var currentLetters = [];
        for (let j = 0; j < 15; j++) {
            if (board[i][j].firstElementChild === null) {
                if (currentWord.length > 0) {
                    foundHorizontalWords.push({word: currentWord, letters: currentLetters});
                    currentWord = "";
                    currentLetters = [];
                }
            } else {
                foundLetters.push({letter: board[i][j].firstElementChild.firstChild.textContent, x: j, y: i});
                currentWord += board[i][j].firstElementChild.firstChild.textContent;
                currentLetters.push({letter: board[i][j].firstElementChild.firstChild.textContent, x: j, y: i});
                if (j === board[i].length - 1 && currentWord.length > 0) {
                    foundHorizontalWords.push({word: currentWord, letters: currentLetters});
                    currentWord = "";
                    currentLetters = [];
                }
            }
        }
    }
    for (let i = 0; i < 15; i++) {
        var currentWord = "";
        var currentLetters = [];
        for (let j = 0; j < 15; j++) {
            if (board[j][i].firstElementChild === null) {
                if (currentWord.length > 0) {
                    foundVerticalWords.push({word: currentWord, letters: currentLetters});
                    currentWord = "";
                    currentLetters = [];
                }
            } else {
                currentWord += board[j][i].firstElementChild.firstChild.textContent;
                currentLetters.push({letter: board[j][i].firstElementChild.firstChild.textContent, x: i, y: j});
                if (j === board[i].length - 1 && currentWord.length > 0) {
                    foundVerticalWords.push({word: currentWord, letters: currentLetters});
                    currentWord = "";
                    currentLetters = [];
                }
            }
        }
    }

    var invalidWords = [];

    // Check if each word found is an actual word, if it is, then remove each of its letters from the letters array.
    // Do this for both horizontal and vertical.
    // When done, the letters array should be empty if all letters are validated.
    //
    // For each word in the 'foundHorizontalWords' array, check if it is a valid word, if so index through its
    // letters and then index through the letters array to find the one that matches its x,y then remove it from
    // the letters array.
    for (let i = 0; i < foundHorizontalWords.length; i++) {
        if (foundHorizontalWords[i].word.length === 1) {
            continue;
        }
        if (checkWord(foundHorizontalWords[i].word)) {
            for (let j = 0; j < foundHorizontalWords[i].letters.length; j++) {
                let thisLetter = foundHorizontalWords[i].letters[j];
                for (let k = 0; k < foundLetters.length; k++) {
                    if (thisLetter.x === foundLetters[k].x && thisLetter.y === foundLetters[k].y) {
                        foundLetters.splice(k, 1);
                    }
                }
            }
        } else {
            invalidWords.push(foundHorizontalWords[i].word);
        }
    }
    // For each word in the 'foundVerticalWords' array, check if it is a valid word, if so index through its
    // letters and then index through the letters array to find the one that matches its x,y then remove it from
    // the letters array.
    for (let i = 0; i < foundVerticalWords.length; i++) {
        if (foundVerticalWords[i].word.length === 1) {
            continue;
        }
        if (checkWord(foundVerticalWords[i].word)) {
            for (let j = 0; j < foundVerticalWords[i].letters.length; j++) {
                let thisLetter = foundVerticalWords[i].letters[j];
                for (let k = 0; k < foundLetters.length; k++) {
                    if (thisLetter.x === foundLetters[k].x && thisLetter.y === foundLetters[k].y) {
                        foundLetters.splice(k, 1);
                    }
                }
            }
        } else {
            invalidWords.push(foundVerticalWords[i].word);
        }
    }

    return [invalidWords, foundLetters.length];
}

function assessPlay() {
    // Find both letters and words by searching vertically and horizontally.
    var foundNewWords = [];
    for (let i = 0; i < 15; i++) {
        var currentWord = "";
        var currentLetters = [];
        var isNew = false;
        for (let j = 0; j < 15; j++) {
            if (board[i][j].firstElementChild === null) {
                if (currentWord.length > 0) {
                    if (isNew && currentWord.length > 1) {
                        foundNewWords.push({word: currentWord, letters: currentLetters});
                    }
                    currentWord = "";
                    currentLetters = [];
                }
            } else {
                if (board[i][j].firstElementChild.classList.contains("placed")) {
                    isNew = true;
                }
                currentWord += board[i][j].firstElementChild.firstChild.textContent;
                currentLetters.push({letter: board[i][j].firstElementChild.firstChild.textContent, x: j, y: i, points: parseInt(board[i][j].firstElementChild.firstChild.nextSibling.textContent)});
                if (j === board[i].length - 1 && currentWord.length > 0) {
                    if (isNew && currentWord.length > 1) {
                        foundNewWords.push({word: currentWord, letters: currentLetters});
                    }
                    currentWord = "";
                    currentLetters = [];
                }
            }
        }
    }
    for (let i = 0; i < 15; i++) {
        var currentWord = "";
        var currentLetters = [];
        var isNew = false;
        for (let j = 0; j < 15; j++) {
            if (board[j][i].firstElementChild === null) {
                if (currentWord.length > 0) {
                    if (isNew && currentWord.length > 1) {
                        foundNewWords.push({word: currentWord, letters: currentLetters});
                    }
                    currentWord = "";
                    currentLetters = [];
                }
            } else {
                if (board[j][i].firstElementChild.classList.contains("placed")) {
                    isNew = true;
                }
                currentWord += board[j][i].firstElementChild.firstChild.textContent;
                currentLetters.push({letter: board[j][i].firstElementChild.firstChild.textContent, x: i, y: j, points: parseInt(board[j][i].firstElementChild.firstChild.nextSibling.textContent)});
                if (j === board[i].length - 1 && currentWord.length > 0) {
                    if (isNew && currentWord.length > 1) {
                        foundNewWords.push({word: currentWord, letters: currentLetters});
                    }
                    currentWord = "";
                    currentLetters = [];
                }
            }
        }
    }

    let totalPoints = 0;
    for (let i = 0; i < foundNewWords.length; i++) {
        let multiplier = 1;
        let points = 0;
        for (let j = 0; j < foundNewWords[i].letters.length; j++) {
            let foundMod = false;
            for (let k = 0; k < boardLayout.length; k++) {
                if (boardLayout[k].x === foundNewWords[i].letters[j].x && boardLayout[k].y === foundNewWords[i].letters[j].y) {
                    foundMod = true;
                    if (boardLayout[k].type === "3w") {
                        points += foundNewWords[i].letters[j].points;
                        multiplier *= 3;
                    } else if (boardLayout[k].type === "2w") {
                        points += foundNewWords[i].letters[j].points;
                        multiplier *= 2;
                    } else if (boardLayout[k].type === "3l") {
                        points += foundNewWords[i].letters[j].points * 3;
                    } else if (boardLayout[k].type === "2l") {
                        points += foundNewWords[i].letters[j].points * 2;
                    }
                    // multiplier *= boardLayout[k].type;
                    break;
                }
            }
            if (!foundMod) {
                points += foundNewWords[i].letters[j].points;
            }
        }
        totalPoints += points * multiplier;
    }

    return totalPoints;
}

function completePlay() {
    let points = assessPlay();
    alert(points);
    let tiles = Array.from(document.getElementsByClassName("placed"));
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].parentElement.classList.contains("box")) {
            tiles[i].classList.remove("placed");
        }
    }
    refillTray();
    document.getElementById("incorrectLabel").textContent = "";
    document.getElementById("acceptButton").classList.add("greyed");
}

function checkWord(word) {
    if (word.length === 1) {
        return false;
    }
    let list = wordsHashTable[word.toUpperCase().charAt(0)];
    var found = false;
    for (let i = 0; i < list.length; i++) {
        if (word.toUpperCase() === list[i]) {
            found = true;
            break;
        }
    }
    return found;
}

function setupBoard() {
    for (let i = 0; i < 15; i++) {
        var row = [];
        var elem = document.createElement("div");
        elem.classList.add("row");
        for (let j = 0; j < 15; j++) {
            var box = document.createElement("div");
            box.classList.add("box");

            for (let k = 0; k < boardLayout.length; k++) {
                if (j === boardLayout[k].x && i === boardLayout[k].y) {
                    box.classList.add(boardLayout[k].type.replace("2","d").replace("3","t"));
                }
            }

            elem.appendChild(box);
            row.push(box);
        }
        document.getElementById("board").appendChild(elem);
        board.push(row);
    }
}

function setupBlankPopup() {
    var rootNode = document.getElementById("blankPopup");
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWX.YZ.";
    for (let i = 0; i < 7; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 4; j++) {
            if (characters.charAt(i*4+j) === ".") {
                row.appendChild(document.createElement("div"));
                continue;
            }
            var tile = document.createElement("div");
            tile.classList.add("letter_tile");
            tile.setAttribute("onclick", `setBlankTileLetter("${characters.charAt(i*4+j)}")`);
            tile.textContent = characters.charAt(i*4+j);
            row.appendChild(tile);
        }
        rootNode.appendChild(row);
    }
}

function shuffleTray() {
    let allTiles = document.getElementsByClassName("letter_tile");
    let trayChildren = [];
    for (let i = 0; i < allTiles.length; i++) {
        if (allTiles[i].parentElement.id === "tray") {
            trayChildren.push(allTiles[i]);
        }
    }

    let trayElement = document.getElementById("tray");
    const length = trayChildren.length;
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random()*trayChildren.length);
        trayElement.insertBefore(trayChildren[index], trayElement.firstElementChild);
        trayChildren.splice(index, 1);
    }
}

function returnPlacedTiles() {
    let placedTiles = Array.from(document.getElementsByClassName("placed"));

    let trayCount = 0;
    for (let i = 0; i < placedTiles.length; i++) {
        if (placedTiles[i].parentElement.id === "tray") {
            trayCount++;
        }
    }

    if (trayCount === placedTiles.length) {
        shuffleTray();
    }

    for (let i = 0; i < placedTiles.length; i++) {
        let thisTile = placedTiles[i];
        if (thisTile.id === "blankTBD") {
            thisTile.insertBefore(" ", thisTile.firstElementChild);
        }
        if (thisTile.parentElement.classList.contains("box")) {
            document.getElementById("tray").appendChild(thisTile);
            thisTile.style.position = "relative";
            thisTile.style.left = "0px";
            thisTile.style.top = "0px";
        }
    }

    document.getElementById("incorrectLabel").textContent = "";
    document.getElementById("acceptButton").classList.remove("greyed");
}

function setBlankTileLetter(letter) {
    var blankTile = document.getElementById("blankTBD");
    blankTile.firstChild.textContent = letter;
    blankTile.classList.add("mimicked");
    document.getElementById("blankPopup").classList.add("hidden");
    displayIncorrectTiles();
}

function instantiateHashTable() {
    wordsHashTable.length = 27;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-"; // '-' For special characters, when a 'word' does not contain a character matching [a-zA-Z].
    for (let i=0; i<alphabet.length; i++) {
        wordsHashTable[alphabet.charAt(i)] = [];
    }
    
    for (let i = 0; i < words.length; i++) {
        hash(words[i]);
    }
}

function hash(word) {
    if (/[a-zA-Z]/.test(word.charAt(0))) {
        let firstCharacter = word.toUpperCase().charAt(0);
        if (wordsHashTable[firstCharacter]) {
            wordsHashTable[firstCharacter].push(word);
        } else {
            wordsHashTable[firstCharacter] = [word];
        }
    } else {
        wordsHashTable["-"].push(word);
    }
}
