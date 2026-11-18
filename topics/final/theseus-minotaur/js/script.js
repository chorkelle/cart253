/**
 * Theseus and the Minotaur
 * Charlotte Walsh
 * 
 * Escape the minotaur's labyrinth
 */

"use strict";

let x, y;

let theseus = {
    x: 15,
    y: 20,
    size: 40,
    fill: "red",
    speed: 3,

}

let minotaur = {
    x: 425,
    y: 300,
    size: 45,
    fill: "black",
    speed: 1.5
}

function setup() {
    createCanvas(850, 600);
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(230);

    // Moves Theseus
    moveTheseus();

    moveMinotaur();
}

/**
 * Lets you use the arrow keys to move Theseus
 */
function moveTheseus() {

    // UP ARROW
    if (keyIsDown(UP_ARROW)) theseus.y -= theseus.speed;
    // DOWN ARROW
    if (keyIsDown(DOWN_ARROW)) theseus.y += theseus.speed;
    // LEFT ARROW
    if (keyIsDown(LEFT_ARROW)) theseus.x -= theseus.speed;
    // RIGHT ARROW
    if (keyIsDown(RIGHT_ARROW)) theseus.x += theseus.speed;

    // 2. Normalize so diagonal movement isn't faster
    let v = createVector(theseus.x, theseus.y);
    v.setMag(minotaur.speed);

    x += v.x;
    y += v.y;

    // Draws Theseus
    push();
    fill(theseus.fill);
    noStroke();
    ellipse(theseus.x, theseus.y, theseus.size, theseus.size);
    pop();
}

/**
 * Moves the minotaur towards Theseus
 */
function moveMinotaur() {

    // Calculate the distance between Theseus and the minotaur

    const d = dist(theseus.x, theseus.y, minotaur.x, minotaur.y);
    const overlap = (d < theseus.size / 2 + minotaur.size / 2);

    if (!overlap && minotaur.x < theseus.x) {
        minotaur.x += minotaur.speed
    }

    if (!overlap && minotaur.x > theseus.x) {
        minotaur.x -= minotaur.speed
    }

    if (!overlap && minotaur.y < theseus.y) {
        minotaur.y += minotaur.speed
    }

    if (!overlap && minotaur.y > theseus.y) {
        minotaur.y -= minotaur.speed
    }


    // Draws the minotaur
    push();
    noStroke();
    fill(minotaur.fill);
    ellipse(minotaur.x, minotaur.y, minotaur.size, minotaur.size);
    pop();
}
