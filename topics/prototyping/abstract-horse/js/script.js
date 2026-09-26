/**
 * Rainbow Horse
 * Charlotte Walsh
 * 
 * A beautiful horse who changes colour depending on where your mouse is positioned.
 */

"use strict";

// makes horse colour variables changeable
let horse = {
    r: 30,
    g: 30,
    b: 30
}

/**
 * Sets up the canvas
*/
function setup() {

    createCanvas(640, 640);

}

/**
 * Sets the background colour and removes stroke
*/
function drawBackground() {
    // Draws background (using RGB which indicates that the colour should change every time the mouse is pressed)
    background("lightgreen");
    // Gets rid of stroke
    noStroke();
}

/**
 * Draws a horse
*/
function draw() {

    drawBackground();
    drawHorse();

}

/**
 * Draws the horse
*/
function drawHorse() {
    push();
    fill(horse.r, horse.g, horse.b);

    // head
    ellipse(width / 2, height / 2, 200, 230);

    // ears
    triangle(230, 270, 260, 160, 320, 270);
    triangle(330, 270, 380, 160, 410, 270);

    // get rid of stroke again
    noStroke();

    // eye shines
    fill("white");
    ellipse(370, 290, 50, 35);
    ellipse(270, 290, 50, 35);

    // eyes
    fill("black");
    ellipse(370, 290, 30, 30);
    ellipse(270, 290, 30, 30);

    // Nose
    fill("black");
    ellipse(340, 400, 10, 10);
    ellipse(300, 400, 10, 10);
    pop();

}

/**
 * Makes the horse colours change based on where the mouse is positioned.
*/
function mouseMoved() {
    // Update the grayscale value.
    horse.r += 50;
    horse.g += 30;
    horse.b += 10;

    // Reset the red value
    if (horse.r > 255) {
        horse.r -= 20;
    }
    // Reset the green value
    if (horse.g > 255) {
        horse.g -= 20;
    }
    // Reset the blue value
    if (horse.b > 255) {
        horse.b -= 20;
    }
}

