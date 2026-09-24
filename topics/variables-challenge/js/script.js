/**
 * Mr. Furious
 * Charlotte & Wassim
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};
let skyColour = {
    // Colour
    r: 160,
    g: 180,
    b: 200

};
let bird = {
    x: 0,
    y: 200,
    width: 30,
    height: 20,

}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Update Mr. Furious
 */
function updateMrFurious() {

    mrFurious.fill.g -= 0.5;
    mrFurious.fill.b -= 0.5;
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(skyColour.r, skyColour.g, skyColour.b);


    skyColour.r -= 0.5;
    skyColour.g -= 0.5;
    skyColour.b -= 0.5;


    updateMrFurious();
    drawMrFurious();
    drawBird();
}

/**
 * Draw Mr. Furious
 */
function drawMrFurious() {
    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

}

function drawBird() {
    push();
    noStroke();
    fill("gray");
    rect(bird.x, bird.y, bird.width, bird.height);
    pop();

}
