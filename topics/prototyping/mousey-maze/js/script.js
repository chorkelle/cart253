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
    }

}

let cheese = {

    x: 500,
    y: 500,
    size: 75,
    fill: {
        r: 180,
        g: 175,
        b: 90
    }
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

/**
 * Creates a canvas
*/
function setup() {
    createCanvas(600, 600);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220, 230, 240);

    noStroke();

    drawMaze();

    drawMouse();
    moveMouse();

    drawCheese();
    updateCheese();

}

/**
 * Draws a mouse
 */
function drawMouse() {

    push();
    fill(mouse.fill.r, mouse.fill.g, mouse.fill.b);
    ellipse(mouse.x, mouse.y, mouse.size + 10, mouse.size);
    pop();


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

}