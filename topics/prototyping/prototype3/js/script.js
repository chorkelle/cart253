/**
 * Colours
 * Charlotte Walsh
 * 
 * Circles that light up different colours depending on the key you press.
 */

"use strict";

let circleA = {

    x: 300,
    y: 300,
    size: 75,
    fill: "#00ff00"

}

/**
 * Creates canvas
*/
function setup() {
    createCanvas(600, 600);

}


/**
 * Draws some beautiful circles
*/
function draw() {

    drawCircles();

}

function drawCircles() {

    // Draw Circle A
    push();
    fill(circleA.fill);
    ellipse(circleA.x, circleA.y, circleA.size, circleA.size);
    pop();


}

/**
 * Makes mousey move
 */
function keyPressed() {
    if (key === 'w') {
        circleA.fill = "#006677"
    }

    if (key === 'a') {
        circleA.fill = "#fbe009"
    }

}