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

/**
 * Makes the canvas
*/
function setup() {

    createCanvas(600, 600);

}


/**
 * Draws the program
*/
function draw() {

    background("white");

    drawCircle();

    keysChange();

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

    if (key === 'w') {
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
        circle.fill.g += 10;
        circle.fill.b += 10;
    }

    if (key === 'p') {
        circle.fill.r -= 20;
        circle.fill.g -= 10;
        circle.fill.b -= 15;
    }

    if (key === 'a') {
        circle.size.w += 0.5;
    }

    if (key === 's') {
        circle.size.w += 0.5;
        circle.size.h += 0.5;
    }

    if (key === 'd') {
        circle.size.h += 0.5;
    }

    if (key === 'f') {
        circle.fill.r = 200;
        circle.fill.g = 15;
        circle.fill.b = 13;
    }

    if (key === 'g') {
        circle.x -= 0.5;
    } else {
        circle.x = 300;
    }

    if (key === 'm') {
        circle.size.w -= 0.5;
        circle.size.h -= 0.5;
    } else {
        circle.size.w = 300;
        circle.size.h = 300;
    }



}