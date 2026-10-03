/**
 * Mousey Maze
 * Charlotte Walsh
 * 
 * Mousey maze is a mouse that tries to go through a maze.
 */

"use strict";


let mouse = {

    x: 50,
    y: 50,
    size: 50,
    fill: {
        r: 240,
        g: 130,
        b: 130
    },
    speed: 10

}

let cheese = {

    x: 40,
    y: 340,
    size: 75,
    image: undefined

}

let hedgeA = {

    x: 150,
    y: -20,
    width: 100,
    height: 150,
    corner: 20,
    fill: "black"

}

let hedgeB = {

    x: -20,
    y: 210,
    width: 400,
    height: 100,
    corner: 20,
    fill: "black"

}

let hedgeC = {

    x: 346,
    y: 100,
    width: 100,
    height: 300,
    corner: 20,
    fill: "black"

}

let hedgeD = {

    x: -20,
    y: 420,
    width: 300,
    height: 100,
    corner: 20,
    fill: "black"

}

/**
 * Preloads the images
 */
async function preload() {

    cheese.image = await loadImage("./assets/images/cheese.png")
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

    drawMaze();
    drawMouse();

    // Display the cheese
    push();
    image(cheese.image, cheese.x, cheese.y);
    pop();

}

/**
 * Draws mousey
 */
function drawMouse() {

    push();
    fill(mouse.fill.r, mouse.fill.g, mouse.fill.b);
    ellipse(mouse.x, mouse.y, mouse.size, mouse.size);
    pop();


}


/**
 * Makes mousey move
 */
function keyPressed() {
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


