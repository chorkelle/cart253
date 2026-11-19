/**
 * Icarus
 * Charlotte Walsh
 * 
 * Icarus flight sim
 */

"use strict";

var offset = 0;
var strum = 1;

/**
 * Makes Icarus a variable
 */
let icarus = {
    //Starting coordinates, size, and colour information
    x: 50,
    y: 50,
    size: 50,
    fill: 230,
    // The speed and velocity at which Icarus moves
    speed: 3,
    velocity: {
        x: 0,
        y: 0
    },
    // Assigns a gravity and a gravity velocity to Icarus
    gravitySpeed: 0,
    gravity: 0.25
}

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(850, 600);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("skyblue");

    // Draws the wave
    drawWave();
    // Draws Icarus
    icarusMove();
}

/**
 * Draws and animates the waves
 */
function drawWave() {

    // Draws the waves using sine waves
    push();
    fill("blue");
    strokeWeight(5)
    stroke("white");
    beginShape();
    vertex(0, 600);
    for (var x = 0; x < 850; x++) {
        //var angle = map(x, 0, width, 0, TWO_PI);
        var angle = offset + x * 0.01;
        // map x between 0 and width to 0 and Two Pi
        var y = map(sin(angle), -strum, strum, random(450, 453), random(525, 528));
        vertex(x, y);
    }
    vertex(850, 600);
    endShape();
    offset += 0.1;
    pop();

}

/**
 * Draws and moves icarus
 */
function icarusMove() {

    // Controls Icarus' movement
    // UP ARROW
    if (keyIsDown(UP_ARROW)) { icarus.gravitySpeed = -icarus.speed; }
    else {
        icarus.velocity.y = 0;
    }
    // LEFT ARROW
    if (keyIsDown(LEFT_ARROW)) { icarus.velocity.x = -icarus.speed; }
    // RIGHT ARROW
    else if (keyIsDown(RIGHT_ARROW)) {
        icarus.velocity.x = icarus.speed;
    }
    else { icarus.velocity.x = 0; }

    // Gives Icarus the burden of gravity
    icarus.gravitySpeed += icarus.gravity;
    icarus.x += icarus.velocity.x;
    icarus.y += icarus.velocity.y + icarus.gravitySpeed;

    // Draws Icarus
    push();
    noStroke();
    fill(icarus.fill);
    ellipse(icarus.x, icarus.y, icarus.size);
    pop();

}