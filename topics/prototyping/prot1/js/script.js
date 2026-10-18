/**
 * Mousey Maze 2.0
 * Charlotte Walsh
 * 
 * Get through the maze and avoid the bomb.
 */

"use strict";

// Makes the mouse a variable
let mouse = {

    x: 50,
    y: 50,
    size: 50,
    speed: 10,
    overlap: {
        x: 50,
        y: 50
    },
    ate: {
        r: "yellow",
        g: "yellow",
        b: "yellow"
    },
    image: undefined

}

// Makes dynamite a variable
let dynamite = {
    x: 500,
    y: 450,
    size: 75,
    image: undefined
}

// Makes cheese a variable
let cheese = {

    x: 40,
    y: 340,
    size: 75,
    image: undefined

}

// Makes the hedges variables
let hedgeA = {

    x: 150,
    y: -20,
    width: 100,
    height: 150,
    corner: 20,
    fill: "green"

}

let hedgeB = {

    x: -20,
    y: 210,
    width: 400,
    height: 100,
    corner: 20,
    fill: "green"

}

let hedgeC = {

    x: 346,
    y: 100,
    width: 100,
    height: 300,
    corner: 20,
    fill: "green"

}

let hedgeD = {

    x: -20,
    y: 420,
    width: 300,
    height: 100,
    corner: 20,
    fill: "green"

}

// Makes the canvas a variable
const Canvas = {
    right: 600,
    left: 0,
    top: 0,
    bottom: 600
}

// makes the win screen a variable
let win = {

    x: -600,
    y: -600,
    image: undefined

}

let lose = {

    x: -600,
    y: -600,
    image: undefined
}

let game = {
    lost: false,
    won: false
}

// Time
let time = 15;

/**
 * Preloads the image
 */
async function preload() {

    cheese.image = await loadImage("./assets/images/cheese.png")

    win.image = await loadImage("./assets/images/mouse.png")

    mouse.image = await loadImage("./assets/images/mouse-emoji.png")

    dynamite.image = await loadImage("./assets/images/dynamite.png")

    lose.image = await loadImage("./assets/images/lose.png")
}

/**
 * Sets up the canvas and adds the preload function for images
 */
async function setup() {
    createCanvas(600, 600);

    await preload();
}

/**
 * Draws a mouse in a maze
*/
function draw() {
    background("lightgreen");

    noStroke();

    // Display the cheese
    push();
    image(cheese.image, cheese.x, cheese.y);
    pop();

    // draw the maze
    drawMaze();

    // draw the mouse
    drawMouse();

    // makes you lose the game
    drawDynamite();
    blowUp();

    // makes walls and cheese interactive
    mazeWalls();
    eatCheese();

    // win screen!
    push();
    image(win.image, win.x, win.y);
    pop();

    // lose screen!
    push();
    image(lose.image, lose.x, lose.y);
    pop();
    loseScreen();

    // Makes the timer slowly go down if you havent already blown up
    if (!game.lost) {
        // Score increases relatively slowly
        time -= 0.03;
    }


    timer();

}

/**
 * Draws mousey
 */
function drawMouse() {

    // mousey
    push();
    image(mouse.image, mouse.x, mouse.y);
    pop();

}

/**
 * Draws the dynamite
 */
function drawDynamite() {

    // dynamite
    push();
    image(dynamite.image, dynamite.x, dynamite.y);
    pop();

}


/**
 * Makes mousey move
 */
function keyPressed() {

    // lets you control mousey using WASD controls
    if (key === 's') {
        mouse.y += mouse.speed
    }

    if (key === 'w') {
        mouse.y -= mouse.speed
    }

    if (key === 'a') {
        mouse.x -= mouse.speed
    }

    if (key === 'd') {
        mouse.x += mouse.speed
    }

    // constrains mousey to canvas
    mouse.x = constrain(mouse.x, Canvas.left, Canvas.right - 50);
    mouse.y = constrain(mouse.y, Canvas.top, Canvas.bottom - 50);

}

/**
 * Draws a maze
 */
function drawMaze() {

    // hedge A
    push();
    fill(hedgeA.fill);
    rect(hedgeA.x, hedgeA.y, hedgeA.width, hedgeA.height, hedgeA.corner);
    pop();

    // hedge B
    push();
    fill(hedgeB.fill);
    rect(hedgeB.x, hedgeB.y, hedgeB.width, hedgeB.height, hedgeB.corner);
    pop();

    // hedge C
    push();
    fill(hedgeC.fill);
    rect(hedgeC.x, hedgeC.y, hedgeC.width, hedgeC.height, hedgeC.corner);
    pop();

    // hedge D
    push();
    fill(hedgeD.fill);
    rect(hedgeD.x, hedgeD.y, hedgeD.width, hedgeD.height, hedgeD.corner);
    pop();

}

/**
 * Makes maze walls interactive
 */
function mazeWalls() {

    // makes hedgeA a wall 
    const overlap = (mouse.x + 50 > hedgeA.x &&
        //right of hedge
        mouse.x < hedgeA.x + hedgeA.width &&
        // top of hedge
        mouse.y + 50 > hedgeA.y &&
        // bottom of hedge
        mouse.y < hedgeA.y + hedgeA.height);


    // Returns mouse to beginning
    if (overlap) {
        mouse.x = mouse.overlap.x;
        mouse.y = mouse.overlap.y;
    } else {
        mouse.x = mouse.x;
        mouse.y = mouse.y;
    }

    // HEDGE B 
    const overlapB = (mouse.x + 50 > hedgeB.x &&
        //right of hedge
        mouse.x < hedgeB.x + hedgeB.width &&
        // top of hedge
        mouse.y + 50 > hedgeB.y &&
        // bottom of hedge
        mouse.y < hedgeB.y + hedgeB.height);


    // returns mouse to beginning
    if (overlapB) {
        mouse.x = mouse.overlap.x;
        mouse.y = mouse.overlap.y;
    } else {
        mouse.x = mouse.x;
        mouse.y = mouse.y;
    }

    // HEDGE C
    const overlapC = (mouse.x + 50 > hedgeC.x &&
        //right of hedge
        mouse.x < hedgeC.x + hedgeC.width &&
        // top of hedge
        mouse.y + 50 > hedgeC.y &&
        // bottom of hedge
        mouse.y < hedgeC.y + hedgeC.height);


    // returns mouse to beginning
    if (overlapC) {
        mouse.x = mouse.overlap.x;
        mouse.y = mouse.overlap.y;
    } else {
        mouse.x = mouse.x;
        mouse.y = mouse.y;
    }

    // HEDGE D
    const overlapD = (mouse.x + 50 > hedgeD.x &&
        //right of hedge
        mouse.x < hedgeD.x + hedgeD.width &&
        // top of hedge
        mouse.y + 50 > hedgeD.y &&
        // bottom of hedge
        mouse.y < hedgeD.y + hedgeD.height);


    // returns mouse to beginning
    if (overlapD) {
        mouse.x = mouse.overlap.x;
        mouse.y = mouse.overlap.y;
    } else {
        mouse.x = mouse.x;
        mouse.y = mouse.y;
    }
}

/**
 * Lets you eat the cheese and win the game!
 */
function eatCheese() {

    // CHEESE
    const overlap = (mouse.x + mouse.size > cheese.x &&
        //right of hedge
        mouse.x < cheese.x + cheese.size &&
        // top of hedge
        mouse.y + mouse.size > cheese.y &&
        // bottom of hedge
        mouse.y < cheese.y + cheese.size);


    // returns mouse to beginning
    if (overlap) {
        win.x = 0;
        win.y = 0;
    } else {
        win.x = win.x;
        win.y = win.y;
    }

}

function blowUp() {


    // CHEESE
    const overlap = (mouse.x + mouse.size > dynamite.x &&
        //right of hedge
        mouse.x < dynamite.x + dynamite.size &&
        // top of hedge
        mouse.y + mouse.size > dynamite.y &&
        // bottom of hedge
        mouse.y < dynamite.y + dynamite.size);


    // returns mouse to beginning
    if (overlap) {
        game.lost = true;
    }

}

/**
 * Displays the bomb timer
 */
function timer() {
    push();
    textSize(30);
    textStyle(BOLD);
    textAlign(50, 450);
    text(floor(time), 550, 50);
    pop();
}
/**
 * Shows that the bomb went off
 */
function loseScreen() {
    if (game.lost) {
        push();
        image(lose.image, 0, 0);
        pop();
    }
    timer();

    // Blows up the bomb
    if (time <= 0) {
        game.lost = true;
    }



}

