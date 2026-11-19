/**
 * Icarus
 * Charlotte Walsh
 * 
 * Icarus flight sim
 */

"use strict";

let icarus = {
    x: 50,
    y: 50,
    size: 50,
    fill: "blue",
    speed: 3,
    velocity: {
        x: 0,
        y: 0
    },
    gravitySpeed: 0,
    gravity: 0.3
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(850, 600);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(230);

    icarusMove();
}

function icarusMove() {

    // UP ARROW
    if (keyIsDown(UP_ARROW)) { icarus.gravitySpeed = -icarus.speed; }
    // DOWN ARROW
    else if (keyIsDown(DOWN_ARROW)) { icarus.velocity.y = icarus.speed; }
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

    icarus.gravitySpeed += icarus.gravity;
    icarus.x += icarus.velocity.x;
    icarus.y += icarus.velocity.y + icarus.gravitySpeed;

    icarus.velocity.y += icarus.gravity;
    icarus.y += icarus.speed;

    push();
    noStroke();
    fill(icarus.fill);
    ellipse(icarus.x, icarus.y, icarus.size);
    pop();



}