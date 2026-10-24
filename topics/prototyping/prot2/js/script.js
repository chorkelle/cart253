/**
 * Pond Sim
 * Charlotte Walsh
 * 
 * Draws an interactive pond
 */

"use strict";

// Draws a fish
const fish = {
    x: 300,
    y: 300,
    body: {
        w: 30,
        h: 60
    },
    fin: {
        x: 310,
        y: 255,
        x2: 300,
        y2: 280,
        x3: 290,
        y3: 255

    },
    fill: {
        r: 200,
        g: 150,
        b: 100
    },
    velocity: 10
}

/**
 * Creates the canvas
*/
function setup() {

    createCanvas(600, 600);

}


/**
 * Draws a pond with fish in it
*/
function draw() {

    background(150, 200, 200);

    drawFish(fish);

}

/**
 * Draws a fish
*/
function drawFish(fish) {

    push();
    noStroke();
    fill(fish.fill.r, fish.fill.g, fish.fill.b);
    ellipse(fish.x, fish.y, fish.body.w, fish.body.h);
    triangle(fish.fin.x, fish.fin.y, fish.fin.x2, fish.fin.y2, fish.fin.x3, fish.fin.y3)
    pop();


}