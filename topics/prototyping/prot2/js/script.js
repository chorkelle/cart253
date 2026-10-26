/**
 * Cross the Pond
 * Charlotte Walsh
 * 
 * Try to get the frog (your mouse) across the pond.
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
    fill: {
        r: 200,
        g: 150,
        b: 100
    },
    velocity: 5
}

// Draws a fish
const fishB = {
    x: 500,
    y: 500,
    body: {
        w: 30,
        h: 60
    },
    fill: {
        r: 230,
        g: 120,
        b: 100
    },
    velocity: 3
}

// Draws a fish
const fishC = {
    x: 175,
    y: 0,
    body: {
        w: 30,
        h: 60
    },
    fill: {
        r: 230,
        g: 120,
        b: 100
    },
    velocity: 3
}

// Draws the user (frog)
const frog = {
    x: 0,
    y: 0,
    body: 30,
    fill: "green"
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
    noCursor();

    // Draws the fishies
    drawFish(fish);
    drawFish(fishB);
    drawFish(fishC);

    drawFrog();
    updateFrog();

    // Updates the fish and lets them move
    updateFish(fish);
    updateFish(fishB);
    updateFish(fishC);

    collision(fish);
    collision(fishB);
    collision(fishC);

}

/**
 * Draws a fish
*/
function drawFish(fish) {

    push();
    noStroke();
    fill(fish.fill.r, fish.fill.g, fish.fill.b);
    ellipse(fish.x, fish.y, fish.body.w, fish.body.h);
    pop();

}

/**
 * Draws a frog
*/
function drawFrog() {

    push();
    noStroke();
    fill(frog.fill);
    ellipse(frog.x, frog.y, frog.body);
    pop();

}

/**
 * Makes the frog your mouse position
*/
function updateFrog() {

    frog.x = mouseX;
    frog.y = mouseY;

}

/**
 * Draws a fish
*/
function updateFish(fish) {

    /**
    *if (fish.x > mouseX) {
       fish.x += fish.velocity;
       fish.fin.x += fish.velocity;
       fish.fin.x2 += fish.velocity;
       fish.fin.x3 += fish.velocity;
   }

    if (fish.y > mouseY) {
       fish.y += fish.velocity;
       fish.fin.y += fish.velocity;
       fish.fin.y2 += fish.velocity;
       fish.fin.y3 += fish.velocity;
   } */

    // Moves the fishies
    fish.y += fish.velocity

    // Makes the fishies bounce back
    if (fish.y >= 575) {
        fish.velocity -= 1;
    }

    // Makes the fishies bounce back
    if (fish.y <= 25) {
        fish.velocity += 1;
    }


}

function collision(fish) {

    // Calculate distance between frog and fish 
    const d = dist(frog.x, frog.y, fish.x, fish.y);
    const overlap = (d < frog.size / 2 + fish.size / 2 + 130
    );

    // Makes the game lose
    if (overlap) {
        frog.fill = "red";
    }

}