/**
 * Don't Click Me Kitty
 * Charlotte Walsh
 * 
 * A kitty who is normal until the mouse is clicked and then he disappears :(
 * 
 * Controls:
 * Click to hide kitty.
 * 
 */

"use strict";

// Letting the screen fill when mouse is clicked
let shadow = 0;
let textX = 0;
let textY = 0;

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(650, 650);

}

/**
 * Sets the background colour and removes stroke
*/
function drawBackground() {
    // Draws background (using RGB which indicates that the colour should change every time the mouse is pressed)
    background(100, 40, 20);
    // Gets rid of stroke
    noStroke();

}

/**
 * Draws a pretty picture of a cat
 */
function draw() {
    drawBackground();
    drawCat();

    // Covers the screen when mouse is toggled
    push();
    fill("black");
    rect(0, 0, shadow, shadow);
    pop();

    push();
    fill("white");
    textSize(50);
    text('You Clicked :(', textX, textY);
    pop();

}

/**
 * Draws the cat
*/
function drawCat() {
    push();
    fill(20, 20, 70);

    // Body
    ellipse(350, 350, 300, 200);
    ellipse(200, 250, 200, 200);

    // Legs
    rect(200, 300, 50, 245, 30);
    rect(275, 300, 50, 245, 30);
    rect(375, 300, 50, 245, 30);
    rect(450, 325, 50, 220, 30);

    // Ears
    triangle(105, 220, 140, 90, 190, 170);
    triangle(195, 200, 240, 90, 296, 220);

    // Tail
    noFill();
    stroke(20, 20, 70);
    strokeWeight(40);
    bezier(490, 330, 550, 300, 400, 200, 530, 150)

    // get rid of stroke again
    noStroke();

    // Eyes (pupils)
    fill("black");
    ellipse(250, 250, 50, 35);
    ellipse(140, 250, 50, 35);

    // Eyes
    fill("lightgreen");
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
 * Actually runs the mouseClicked variables
 */
function mouseClicked() {
    if (shadow === 0) {
        shadow = 650;
    }

    if (mouseClicked = true) {
        textX = 150
        textY = 325;
    }

}
