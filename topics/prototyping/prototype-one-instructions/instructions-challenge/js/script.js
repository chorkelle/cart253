/**
 * Rat
 * Charlotte Walsh
 * 
 * Beautiful drawing of a cat made by yours truly.
 */

"use strict";

let shapeColor

/**
 * Creates canvas
*/
function setup() {
    createCanvas(650, 650);

    shapeColor = color(245, 10, 90);

}

/**
 * Draws cat
*/
function drawBackground() {
    // Draws background
    background(15, 15, 15);
    // Gets rid of stroke
    noStroke();
}

/**
 * Draws a landscape
 */
function draw() {
    drawBackground();
    drawCat();
}

/**
 * Draws cat
*/
function drawCat() {
    push();
    fill(shapeColor);
    // Body
    ellipse(350, 350, 300, 200);
    ellipse(200, 250, 200, 200);
    // Ears
    triangle(105, 220, 140, 90, 190, 170);
    triangle(195, 200, 240, 90, 296, 220);
    // Eyes (pupils)
    fill("black");
    ellipse(250, 250, 50, 35);
    ellipse(140, 250, 50, 35);
    // Eyes
    fill(0, 175, 70);
    ellipse(250, 250, 45, 30);
    ellipse(140, 250, 45, 30);
    fill("black");
    ellipse(250, 250, 9, 30);
    ellipse(140, 250, 9, 30);
    // Nose
    fill("lightpink");
    triangle(175, 275, 190, 295, 205, 275);
    pop();

}

/**
 * Randomizes colour
*/
function mousePressed() {
    shapeColor(random(255), random(255), random(255))

}

