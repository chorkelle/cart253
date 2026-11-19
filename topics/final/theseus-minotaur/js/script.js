/**
 * Theseus and the Minotaur
 * Charlotte Walsh
 * 
 * Escape the minotaur's labyrinth
 */

"use strict";

let x, y;

// Makes the canvas a variable
const Canvas = {
    right: 850,
    left: 0,
    top: 0,
    bottom: 600
}

let theseus = {
    x: 70,
    y: 70,
    size: 40,
    fill: "red",
    speed: 3,
    velocity: {
        x: 0,
        y: 0
    }
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
    height: 123
}
let H = {
    x: 258,
    y: 185,
    width: 95,
    height: 40
}
let I = {
    x: 258,
    y: 448,
    width: 97,
    height: 45
}
let J = {
    x: 453,
    y: 185,
    width: 95,
    height: 42
}
let K = {
    x: 451,
    y: 449,
    width: 97,
    height: 44
}
let L = {
    x: 517,
    y: -20,
    width: 45,
    height: 302
}
let M = {
    x: 517,
    y: 368,
    width: 45,
    height: 125
}
let N = {
    x: 681,
    y: 322,
    width: 42,
    height: 400
}
let O = {
    x: 640,
    y: 322,
    width: 42,
    height: 35
}
let P = {
    x: 160,
    y: 567,
    width: 160,
    height: 35
}
let Q = {
    x: 422,
    y: 567,
    width: 300,
    height: 35
}
let R = {
    x: 708,
    y: 0,
    width: 40,
    height: 221
}
let S = {
    x: 655,
    y: 184,
    width: 60,
    height: 37
}
let T = {
    x: 824,
    y: 0,
    width: 40,
    height: 90
}
let U = {
    x: 824,
    y: 214,
    width: 40,
    height: 400
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

    // Moves the Minotaur
    moveMinotaur();

    // there has to be a better way good god
    labyrinthWalls(A);
    labyrinthWalls(B);
    labyrinthWalls(C);
    labyrinthWalls(D);
    labyrinthWalls(E);
    labyrinthWalls(F);
    labyrinthWalls(G);
    labyrinthWalls(H);
    labyrinthWalls(I);
    labyrinthWalls(J);
    labyrinthWalls(K);
    labyrinthWalls(L);
    labyrinthWalls(M);
    labyrinthWalls(N);
    labyrinthWalls(O);
    labyrinthWalls(P);
    labyrinthWalls(Q);
    labyrinthWalls(R);
    labyrinthWalls(S);
    labyrinthWalls(T);
    labyrinthWalls(U);
}

/**
 * Lets you use the arrow keys to move Theseus
 */
function moveTheseus() {

    // UP ARROW
    if (keyIsDown(UP_ARROW)) theseus.velocity.y = -theseus.speed;
    // DOWN ARROW
    else if (keyIsDown(DOWN_ARROW)) theseus.velocity.y = theseus.speed;
    else theseus.velocity.y = 0;
    // LEFT ARROW
    if (keyIsDown(LEFT_ARROW)) theseus.velocity.x = -theseus.speed;
    // RIGHT ARROW
    else if (keyIsDown(RIGHT_ARROW)) theseus.velocity.x = theseus.speed;
    else theseus.velocity.x = 0;

    theseus.x += theseus.velocity.x
    theseus.y += theseus.velocity.y

    // // 2. Normalize so diagonal movement isn't faster
    // let v = createVector(theseus.x, theseus.y);
    // v.setMag(minotaur.speed);

    // x += v.x;
    // y += v.y;

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

    if (overlap) {
        theseus.size -= 1;
    }

    // Draws the minotaur
    push();
    noStroke();
    fill(minotaur.fill);
    ellipse(minotaur.x, minotaur.y, minotaur.size, minotaur.size);
    pop();
}


function labyrinthWalls(wall) {

    // push();
    // fill("blue");
    // rect(wall.x, wall.y, wall.width, wall.height)
    // pop();

    // Makes the labyrinth walls interactive
    const overlap = (theseus.x + theseus.size / 2 > wall.x &&
        // right of wall
        theseus.x - theseus.size / 2 < wall.x + wall.width &&
        // top of wall
        theseus.y + theseus.size / 2 > wall.y &&
        // bottom of wall
        theseus.y - theseus.size / 2 < wall.y + wall.height);


    // Returns mouse to beginning
    if (overlap) {
        theseus.x -= theseus.velocity.x;
        theseus.y -= theseus.velocity.y;
        theseus.velocity.x = 0;
        theseus.velocity.y = 0;
    } else {
        theseus.speed = theseus.speed;
    }

    // Constrains Theseus to canvas
    theseus.x = constrain(theseus.x, Canvas.left + theseus.size / 2, Canvas.right - theseus.size / 2);
    theseus.y = constrain(theseus.y, Canvas.top + theseus.size / 2, Canvas.bottom - theseus.size / 2);

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