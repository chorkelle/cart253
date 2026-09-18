/**
 * Rat
 * Charlotte Walsh
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates canvas
*/
function setup() {
    createCanvas(650, 650);

}

/**
 * Draws rat
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
    drawRat();
}

/**
 * Draws cat
*/
function drawRat() {
    push();
    fill(70, 70, 0);
    // Body
    ellipse(350, 350, 300, 200);
    ellipse(200, 250, 200, 200);
    // Ears
    triangle(115, 200, 150, 90, 200, 170);
    triangle(185, 200, 230, 90, 290, 210);
    // Face
    fill(0, 175, 70);
    ellipse(240, 250, 45, 30);
    pop();

}