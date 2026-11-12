/**
 * Terrible New Car
    * Charlotte Walsh
        * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
    * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;


// Starts with the instruction
let carName = "Click to generate a car name.";

// Starting RGB variables
let r = 20;
let g = 100;
let b = 100;
// Starting XY variables
let x = 300;
let y = 200;

/**
 * Load the car and dinosaur data
 */
async function preload() {
    // Car data
    carData = await loadJSON("assets/data/cars.json");
    // Dinosaur data
    dinosaurData = await loadJSON("assets/data/dinosaurs.json");
}

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);

    await preload();

    //Draws the background
    background(0);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    // Displays the car names 
    displayCar();

}

/**
 * Displays the car names
 */
function displayCar() {

    // Displays the name
    push();
    fill(r, g, b);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, x, y);
    pop();

}

/**
 * Generate a new car name
 */
function mousePressed() {
    // Picks a car
    const car = random(carData.cars);
    // Gets a dinosaur
    const dinosaur = random(dinosaurData.dinosaurs);
    // Make the terrible car name
    carName = car + " " + dinosaur;
    // Convert it to all lower case for consistency
    carName = carName.toLowerCase();
    // Replace all the spaces with \n to make each word go
    // on a new line
    carName = carName.replace(" ", "\n");

    // Random fill colour for the text to be 
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    // Random location for the text to show up
    x = random(10, 590);
    y = random(10, 390);

}