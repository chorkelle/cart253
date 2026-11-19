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

let sun = {
    x: 775,
    y: 100,
    size: 75,
    fill: 255,
    speed: 0.1,
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
    // Draws the sun
    drawSun();
    // Draws Icarus
    icarusMove();
    // Draws the wave
    drawWave();


}

/**
 * Draws the sun
 */
function drawSun() {

    // Calculates the distance between Icarus and the sun
    const d = dist(icarus.x, icarus.y, sun.x, sun.y);
    const overlap = (d < icarus.size / 2 + sun.size / 2);

    // Makes the minotaur chase Theseus (LEFT)
    if (!overlap && icarus.x < sun.x) {
        icarus.x += 0.1
    }
    // Makes the minotaur chase Theseus (RIGHT)
    if (!overlap && icarus.x > sun.x) {
        icarus.x -= 0.1
    }
    // Makes the minotaur chase Theseus (TOP)
    if (!overlap && icarus.y < sun.y) {
        icarus.y += 0.1
    }
    // Makes the minotaur chase Theseus (BOTTOM)
    if (!overlap && icarus.y > sun.y) {
        icarus.y -= 0.1
    }

    // Makes Icarus fall 
    if (overlap) {
        icarus.gravity += 1;
    }

    // Draws Icarus
    push();
    noStroke();
    fill(sun.fill);
    ellipse(sun.x, sun.y, sun.size);
    pop();

    // Moves the sun slowly across the screen
    sun.x -= sun.speed;



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
    if (keyIsDown(LEFT_ARROW)) { icarus.velocity.x = (-icarus.speed + 2); }
    // RIGHT ARROW
    else if (keyIsDown(RIGHT_ARROW)) {
        icarus.velocity.x = (icarus.speed - 2);
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