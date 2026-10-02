/**
 * Umbrella Sim 
 * Charlotte Walsh 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


/**
 * Makes raindrop a variable
*/
let raindrop = {

    x: 300,
    y: 0,
    size: 15,
    fill: {
        r: 150,
        g: 150,
        b: 200,
    },
    velocity: 2

}

/**
 * Umbrella
*/
let umbrella = {

    x: mouseX,
    y: mouseY,

}

/**
 *  Creates the canvas
*/
function setup() {

    createCanvas(600, 600);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(20, 45, 66);

    drawRain();
    drawRain(50, 0);

}

/**
 * Draws the rain
*/
function drawRain() {

    noStroke();
    push();
    fill(raindrop.fill.r, raindrop.fill.g, raindrop.fill.b);
    ellipse(raindrop.x, raindrop.y, raindrop.size, raindrop.size);
    pop();

    // moves the rain down
    raindrop.y += raindrop.velocity

    // brings back the raindrop
    if (raindrop.y >= 600) {
        raindrop.y = 0,
            raindrop.x = random(0, 600);
    }

}
