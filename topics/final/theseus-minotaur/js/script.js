/**
 * Theseus and the Minotaur
 * Charlotte Walsh
 * 
 * Escape the minotaur's labyrinth
 */

"use strict";

let x, y;

let theseus = {
    x: 70,
    y: 70,
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

let labyrinth = {
    x: 0,
    y: 0,
    image: undefined,
}

let A = {
    x: 0,
    y: -20,
    width: 30,
    height: 460
}
let B = {
    x: 0,
    y: 530,
    width: 30,
    height: 100
}
let C = {
    x: 0,
    y: 0,
    width: 599,
    height: 35
}
let D = {
    x: 128,
    y: -20,
    width: 42,
    height: 170
}
let E = {
    x: 118,
    y: 245,
    width: 50,
    height: 500
}
let F = {
    x: 258,
    y: 110,
    width: 48,
    height: 170
}
let G = {
    x: 258,
    y: 370,
    width: 48,
    height: 125
}
let H = {
    x: 258,
    y: 180,
    width: 48,
    height: 125
}

let restartGame = {
    undefined
}

async function preload() {

    labyrinth.image = await loadImage("./assets/images/labyrinth.png")
}

async function setup() {
    createCanvas(850, 600);
    x = width / 2;
    y = height / 2;

    await preload();
}

function draw() {
    background(230);

    // Makes the maze exist
    push();
    image(labyrinth.image, labyrinth.x, labyrinth.y);
    pop();

    // Moves Theseus
    moveTheseus();

    moveMinotaur();

    labyrinthWalls(A);
    labyrinthWalls(B);
    labyrinthWalls(C);
    labyrinthWalls(D);
    labyrinthWalls(E);
    labyrinthWalls(F);
    labyrinthWalls(G);
    labyrinthWalls(H);

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

    // Calculates the distance between Theseus and the minotaur
    const d = dist(theseus.x, theseus.y, minotaur.x, minotaur.y);
    const overlap = (d < theseus.size / 2 + minotaur.size / 2);

    // Makes the minotaur chase Theseus (LEFT)
    if (!overlap && minotaur.x < theseus.x) {
        minotaur.x += minotaur.speed
    }
    // Makes the minotaur chase Theseus (RIGHT)
    if (!overlap && minotaur.x > theseus.x) {
        minotaur.x -= minotaur.speed
    }
    // Makes the minotaur chase Theseus (TOP)
    if (!overlap && minotaur.y < theseus.y) {
        minotaur.y += minotaur.speed
    }
    // Makes the minotaur chase Theseus (BOTTOM)
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


function labyrinthWalls(wall) {

    push();
    fill("blue");
    rect(wall.x, wall.y, wall.width, wall.height)
    pop();

    // makes hedgeA a wall 
    const overlap = (theseus.x + theseus.size / 2 > wall.x &&
        //right of hedge
        theseus.x - theseus.size / 2 < wall.x + wall.width &&
        // top of hedge
        theseus.y + theseus.size / 2 > wall.y &&
        // bottom of hedge
        theseus.y - theseus.size / 2 < wall.y + wall.height);


    // Returns mouse to beginning
    if (overlap) {
        theseus.x = 300
    } else {
        theseus.x = theseus.x;
        theseus.y = theseus.y;
    }

}


// const walls = {
//     wallA: {
//         x: 0,
//         y: -20,
//         width: 30,
//         height: 460
//     },
//     wallB: {
//         x: 0,
//         y: 530,
//         width: 30,
//         height: 100
//     },
//     wallC: {
//         x: 0,
//         y: 0,
//         width: 599,
//         height: 35
//     }
// }