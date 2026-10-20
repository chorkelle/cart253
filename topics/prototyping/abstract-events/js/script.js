/**
 * Abstract Events
 * Charlotte Walsh
 * 
 * A simple circle that does different things depending on the events triggered.
 */

"use strict";

let circle = {
    x: 300,
    y: 300,
    size: {
        w: 300,
        h: 300
    },
    fill: {
        r: 149,
        g: 235,
        b: 52,
    }
}

let chaos = false;

let time = 0;

/**
 * Makes the canvas
*/
function setup() {

    createCanvas(600, 600);

    addEventListener("wheel", multiply);

}


/**
 * Draws the program
*/
function draw() {

    background("white");

    drawCircle();

    keysChange();

    multiply();

    // Only increase the score if the game is not over
    if (!chaos) {
        // Score increases relatively slowly
        time += 0.05;
    }

    timer();



}

/**
 * Draws a beautiful circle
*/
function drawCircle() {

    push();
    noStroke();
    fill(circle.fill.r, circle.fill.g, circle.fill.b);
    ellipse(circle.x, circle.y, circle.size.w, circle.size.h);
    pop();

}

/**
 * Changes the circle differently based on certain keys
*/
function keysChange() {

    if (key === 'q') {
        circle.fill.r = 0;
        circle.fill.g = 88;
        circle.fill.b = 189;
    }

    if (key === 'k') {
        circle.fill.r += 10;
        circle.fill.g += 10;
        circle.fill.b += 10;
    }

    if (key === 'e') {
        circle.fill.r -= 10;
        circle.fill.g -= 10;
        circle.fill.b -= 10;
    }

    if (key === 'r') {
        circle.fill.r -= 10;
    }

    if (key === 't') {
        circle.fill.r += 10;
        circle.fill.g -= 10;
    }

    if (key === 'y') {
        circle.fill.r = 212;
        circle.fill.g = 0;
        circle.fill.b = 155;
    }

    if (key === 'u') {
        circle.fill.b += 10;
    }

    if (key === 'i') {
        circle.fill.r = 100;
        circle.fill.g = 15;
        circle.fill.b = 200;
    }

    if (key === 'o') {
        circle.fill.r += 10;
        circle.fill.g = random(0, 250);
        circle.fill.b += 10;
    }

    if (key === 'p') {
        circle.fill.r -= 20;
        circle.fill.g -= 10;
        circle.fill.b -= 15;
    }

    if (key === 'h') {
        circle.size.w += 0.5;
    }

    if (key === 'g') {
        circle.size.h += 0.5;
    }

    if (key === 'f') {
        circle.fill.r = 200;
        circle.fill.g = 15;
        circle.fill.b = 13;
    }

    if (key === 'j') {
        circle.fill.r = random(3, 250);
        circle.fill.g = random(0, 250);
        circle.fill.b = random(4, 250);
    }

    if (key === 'a') {
        circle.x -= 0.5;
    }

    if (key === 'd') {
        circle.x += 0.5;
    }

    if (key === 's') {
        circle.y += 0.5;
    }

    if (key === 'w') {
        circle.y -= 0.5;
    }

    if (key === 'm') {
        circle.size.w -= random(0, 10);
        circle.size.h -= random(0, 10);
    }

    if (key === 'l') {
        circle.size.w += random(0, 10);
        circle.size.h += random(0, 10);
    }

    if (key === 'c') {
        circle.size.w += 10;
        circle.size.h += 15;
    }

    if (key === 'b') {
        circle.size.w -= 15;
        circle.size.h -= 5;
    }

    if (key === 'v') {
        circle.size.w -= 15;
        circle.size.h -= 5;
    }

    // makes the circle normal again
    if (key === ' ') {
        circle.size.w = 300;
        circle.size.h = 300;
        circle.fill.r = 149;
        circle.fill.g = 235;
        circle.fill.b = 52;
        circle.x = 300;
        circle.y = 300;
    }

}

/**
 * Makes things happen when you move your mouse
 */
function multiply() {

    if (mouseIsPressed) {
        push();
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(random(0, 600), random(0, 600), random(0, 400), random(0, 400));
        pop();
    }

}

function timer() {

    floor(time);

    if (time >= 30) {
        chaos = true;
    }

    if (chaos = true) {
        push();
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(random(0, 600), random(0, 600), random(0, 400), random(0, 400));
        pop();
    }

}

