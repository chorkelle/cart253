/**
 * Bouncy Fish
 * Charlotte Walsh
 * 
 * Bouncing fish that you can dribble as if they were basket balls.
 */

"use strict";

// Makes all the fishies exist
let fish = undefined
let fishB = undefined
let fishC = undefined
let fishD = undefined
let fishE = undefined

// Draws the user (frog)
const frog = {
    x: 0,
    y: 0,
    body: 30,
    fill: {
        r: 0,
        g: 150,
        b: 20
    }
}

/**
 * Creates the canvas
*/
function setup() {

    createCanvas(600, 600);


    // createFish(x, y, size, r, g, b, velocity)
    fish = createFish(290, 0, 30, 220, 130, 120, 5);
    fishB = createFish(500, 0, 40, 200, 100, 130, 3);
    fishC = createFish(410, 0, 20, 190, 130, 100, 1);
    fishD = createFish(200, 0, 50, 200, 150, 100, 2);
    fishE = createFish(120, 0, 30, 210, 140, 110, 4);

}


/**
 * Draws a fish
 */
function createFish(x, y, size, r, g, b, velocity) {
    const fish = {
        x: x,
        y: y,
        size: size,
        fill: {
            r: r,
            g: g,
            b: b,
        },
        velocity: velocity
    }
    // Makes the fish a variable
    return fish;
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
    drawFish(fishD);
    drawFish(fishE);

    // Draws the frog
    drawFrog(frog);
    //Makes the frog your mouse position
    frog.x = mouseX;
    frog.y = mouseY;

    // Updates the fish and lets them move
    updateFish(fish);
    updateFish(fishB);
    updateFish(fishC);
    updateFish(fishD);
    updateFish(fishE);

    // Calculates the collision distance
    collision(frog, fish);
    collision(frog, fishB);
    collision(frog, fishC);
    collision(frog, fishD);
    collision(frog, fishE);

}

/**
 * Draws a fish
*/
function drawFish(fish) {
    // Draws the fishies
    push();
    noStroke();
    fill(fish.fill.r, fish.fill.g, fish.fill.b);
    ellipse(fish.x, fish.y, fish.size);
    pop();

}

/**
 * Draws a frog
*/
function drawFrog(frog) {
    // Draws the forggy
    push();
    noStroke();
    fill(frog.fill.r, frog.fill.g, frog.fill.b);
    ellipse(frog.x, frog.y, frog.body);
    pop();

}


/**
 * Moves the fish
*/
function updateFish(fish) {

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

function collision(frog, fish) {

    // Calculate distance between frog and fish 
    const d = dist(frog.x, frog.y, fish.x, fish.y);
    const overlap = (d < frog.body / 2 + fish.size / 2
    );

    // Makes the fish freak out if you touch them
    if (overlap) {
        fish.velocity += 2;
        fish.x += random(1, 3);
        fish.x -= random(1, 3);
    }

    // Makes the fish normal
    if (!overlap) {
        fish.velocity = fish.velocity;
    }
}
