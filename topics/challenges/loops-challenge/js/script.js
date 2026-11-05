/**
 * Instructions Challenge
 * Charlotte Walsh and Sofia
 * 
 * Duck.
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(640, 640)
}

/**
 * Sets the background
*/
function drawSky() {
    // Blue Sky
    background(0, 30, 170);

    // Got rid of strokes
    noStroke();
}

/**
 * Draws a landscape
 */
function draw() {
    drawSky();
    drawGround();
    drawSun();
    drawMountain();
    drawCloud();
    drawRiver();
    drawLilypad();
    drawDuck();

}

/**
 * Sets a ground
 */
function drawGround() {
    push();
    fill(50, 150, 50);
    rect(0, 320, 640, 320);
    pop();

}

/**
 * Draw a cloud
 */
function drawCloud() {

    push();
    fill(255);
    ellipse(100, 100, 100, 80);
    ellipse(150, 150, 100, 80);
    ellipse(70, 150, 100, 80);
    ellipse(400, 150, 100, 80);
    ellipse(450, 200, 100, 80);
    ellipse(370, 200, 100, 80);
    pop();

}

/**
 * Draw a mountain range
 */
function drawMountain() {

    push();
    fill(50, 150, 50);
    triangle(0, 320, 100, 80, 500, 320);
    triangle(450, 320, 580, 150, 750, 320);
    pop();
}

/**
 * Draw a river
 */
function drawRiver() {
    push();
    fill("blue");
    rect(0, 520, 640, 640);
    pop();
}

/**
 * Draw a duck
 */
function drawDuck() {
    // made a duck
    push();
    fill("yellow");
    ellipse(300, 550, 80, 40);
    ellipse(265, 530, 40, 40);
    fill("orange");
    triangle(230, 530, 250, 540, 250, 520);
    fill("black")
    ellipse(266, 530, 10, 10);
    pop();

}

/**
 * Draw a lily pad
 */
function drawLilypad() {
    push();
    fill(0, 200, 0);
    ellipse(500, 560, 50, 30);
    ellipse(525, 575, 50, 30);
    ellipse(150, 570, 50, 30);
    pop();

}

/**
 * Draw a sun
 */
function drawSun() {
    push();
    fill("yellow")
    ellipse(640, 0, 150, 150);
    pop();
}