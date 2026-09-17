/**
 * Instructions Challenge
 * Charlotte Walsh and 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
    drawMountain();
    drawCloud();

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