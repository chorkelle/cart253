/**
 * Mr. Furious
 * Charlotte & Wassim
 *
 * A guy who becomes visibly furious!
 */

"use strict";

let rageOffset = 0.5;
let rageMult = 0.1;

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
    x: 200,
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


    skyColour.r -= 0.3;
    skyColour.g -= 0.3;
    skyColour.b -= 0.3;


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

    // Make Mr Furious shake
    let x = random(-rageOffset, [rageOffset])
    let y = random(-rageOffset, [rageOffset])
    rageOffset += rageMult;

    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);

    // Make Mr Furious shake
    ellipse(mrFurious.x + x, mrFurious.y + y, mrFurious.size);
    pop();

}

function drawBird() {
    push();

    let x = random(-200, [200])
    let y = random(-200, [200])

    noStroke();
    fill("white");
    rect(bird.x + x, bird.y + y, bird.width, bird.height);
    pop();

}
