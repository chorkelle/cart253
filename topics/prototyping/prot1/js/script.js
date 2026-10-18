/**
 * Mousey Maze 2.0
 * Charlotte Walsh
 * 
 * Get through the maze before the timer goes off and blows you up.
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
    size: 75,
    image: undefined

}

/**
 * Preloads the image
 */
async function preload() {

    cheese.image = await loadImage("./assets/images/cheese.png")
    win.image = await loadImage("./assets/images/mouse.png")
    mouse.image = await loadImage("./assets/images/mouse-emoji.png")
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
    background(220, 230, 240);

    noStroke();

    // Display the cheese
    push();
    image(cheese.image, cheese.x, cheese.y);
    pop();

    // draw the maze
    drawMaze();

    // draw the mouse
    drawMouse();

    // makes walls and cheese interactive
    mazeWalls();
    eatCheese();

    // win screen!
    push();
    image(win.image, win.x, win.y);
    pop();

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
    const overlap = (mouse.x + 25 > cheese.x + 10 &&
        //right of hedge
        mouse.x - 25 < cheese.x + cheese.size - 10 &&
        // top of hedge
        mouse.y + 25 > cheese.y &&
        // bottom of hedge
        mouse.y - 25 < cheese.y + cheese.size);


    // returns mouse to beginning
    if (overlap) {
        win.x = 0;
        win.y = 0;
    } else {
        win.x = win.x;
        win.y = win.y;
    }

}
