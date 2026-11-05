/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {

    background("pink");

    // Vertical lines variables
    let weight = 0;
    let x = 0;
    let y = 0;
    let x2 = 0;
    let y2 = 500;
    // // Vertical lines
    // while (x <= width) {
    //     push();
    //     strokeWeight(weight);
    //     line(x, y, x2, y2);
    //     pop();

    //     x += 50;
    //     x2 += 50;
    //     weight += 1;
    //     y2 -= 0;

    // }

    // Horizontal line variables
    let weight2 = 0;
    let a = 0;
    let b = 0;
    let a2 = 500;
    let b2 = 0;
    // // Horizontal lines
    // while (b <= height) {
    //     push();
    //     strokeWeight(weight2);
    //     line(a, b, a2, b2);
    //     pop();

    //     b += 50;
    //     b2 += 50;
    //     weight2 += 1;
    //     a2 -= 50;

    // }

    let startY = 0
    let space = 2
    let diameter = 50;
    for (let x = 0; x < width; 3) {

        let y = startY + x * diameter
        ellipse(x, y, diameter)

    }
}