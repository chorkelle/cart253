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
    velocity: 0.5
}

// Draws a fish
const fishB = {
    x: 500,
    y: 500,
    body: {
        w: 30,
        h: 60
    },
    fin: {
        x: 510,
        y: 455,
        x2: 500,
        y2: 480,
        x3: 490,
        y3: 455

    },
    fill: {
        r: 230,
        g: 120,
        b: 100
    },
    velocity: 0.5
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
    drawFish(fishB);

    updateFish(fish);
    updateFish(fishB);

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

    fish.y += fish.velocity
    fish.fin.y += fish.velocity;
    fish.fin.y2 += fish.velocity;
    fish.fin.y3 += fish.velocity;

    if (fish.x >= 550) {
        fish.x = 0
    }

    if (fish.y >= 550) {
        fish.y = 0
    }

    if (fish.x <= 50) {
        fish.x = 0
    }

}