/**
 * Cat Mouse
 * Charlotte Walsh 
 *
 * Cat who scares the mice.
 */



let mice = []; // Will create it with createBall()

let cat = {     // Position and dimensions
    x: 0,
    y: 0,
    w: 100,
    h: 121,
    // Movement
    image: undefined
};

let time = 0;

/**
 * Create the canvas and the ball
 */
async function setup() {
    // Create the canvas
    createCanvas(600, 500);

    await preload();

    // Makes all the mice
    mouse = createMouse();
}

/**
 * Preloads the kitty
 */
async function preload() {

    cat.image = await loadImage("./assets/images/cat.png")

}

/**
 * Creates a random ball
 */
function createMouse() {
    // Create a ball object with appropriate properties
    const newMouse = {
        // Position and dimensions
        x: random(0, 500),
        y: random(0, 400),
        size: random(25, 35),
        // Colour
        fill: {
            r: 128,
            g: 128,
            b: 128,
        },
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };
    return newMouse;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    // Loop to add infinite mouse
    for (let mouse of mice) {
        moveMouse(mouse);
        runMouse(mouse);
        drawMouse(mouse);
    }

    // Draws the cat and assigns its position to the mouseX and mouseY
    drawCat(cat);
    cat.x = mouseX - 50;
    cat.y = mouseY - 50;

    // Calculates the time
    timer();
    // mousePressed();


}

/**
 * Moves the ball according to its velocity
 */
function drawCat(cat) {
    push();
    translate(CENTER, CENTER);
    image(cat.image, cat.x, cat.y, cat.w, cat.h);
    pop();
}

/**
 * Makes the mouse run
 */
function moveMouse(mouse) {
    mouse.x += mouse.velocity.x;
    mouse.y += mouse.velocity.y;
}

/**
 * Keeps the mice from leaving 
 */
function runMouse(mouse) {
    // Check if the mouse has reached the left or right
    const runX = (mouse.x > width || mouse.x < 0);
    // Check if the mouse has reached the top or bottom
    const runY = (mouse.y > height || mouse.y < 0);

    // // Apply friction to the stone by multiplying it by a fraction
    // // less than 1, reducing it
    // mouse.velocity.x *= 0.95;
    // mouse.velocity.y *= 0.95;
    // // If it gets close to 0, make it zero
    // if (abs(mouse.velocity.x) < 0.1) {
    //     mouse.velocity.x = 0;
    // }
    // if (abs(mouse.velocity.y) < 0.1) {
    //     mouse.velocity.y = 0;
    // }

    // Lets the cat eat the mice
    const d = dist(mouseX, mouseY, mouse.x, mouse.y);
    if (d < mouse.size) {
        // Change the stone's velocity based on the mouse position 
        // relative to the stone position
        // (Essentially it accelerates away from the mouse)
        // mouse.velocity.x += (mouse.x - mouseX) * 0.1;
        // mouse.velocity.y += (mouse.y - mouseY) * 0.1;

        let mouse = [];
        mice.pop(mouse);
        // Makes the cat gradually larger the more it eats
        cat.w += 0.1;
        cat.h += 0.1;
        // Makes the mice gradually smaller the more they get eaten
        mouse.size /= 0.5;
    }



    //Handle bouncing horizontally
    if (runX) {
        mouse.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (runY) {
        mouse.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawMouse(mouse) {
    // Draws the circle mice
    push();
    noStroke();
    fill(mouse.fill.r, mouse.fill.g, mouse.fill.b);
    ellipse(mouse.x, mouse.y, mouse.size);
    pop();
}

// /**
//  * Applies friction (diminishing velocity over time) and
//  * the mouse force (movement based on running away from the mouse)
//  */
// function scaredyMouse(mouse) {
//     // Apply friction to the stone by multiplying it by a fraction
//     // less than 1, reducing it
//     mouse.velocity.x *= 0.95;
//     mouse.velocity.y *= 0.95;
//     // If it gets close to 0, make it zero
//     if (abs(mouse.velocity.x) < 0.1) {
//         mouse.velocity.x = 0;
//     }
//     if (abs(mouse.velocity.y) < 0.1) {
//         mouse.velocity.y = 0;
//     }

//     // If the mouse is in range it affects the stone...
//     const d = dist(mouseX, mouseY, mouse.x, mouse.y);
//     if (d < mouse.size) {
//         // Change the stone's velocity based on the mouse position 
//         // relative to the stone position
//         // (Essentially it accelerates away from the mouse)
//         mouse.velocity.x += (mouse.x - mouseX) * 0.005;
//         mouse.velocity.y += (mouse.y - mouseY) * 0.005;
//     }
// }

function timer() {
    // Score increases relatively slowly
    time += 0.02;

    // Adds mice over time
    if (time > 5) {
        let mouse = createMouse();
        mice.push(mouse) * 0.0001;
    }


}

// /**
//  * Erases the last ball created
//  */
// function mousePressed() {
//     // Makes the mice run from the cat
//     const d = dist(mouseX + 50, mouseY + 50, mouse.x, mouse.y);
//     if (d < mouse.size) {
//         // eat the mouse
//         let mouse = [];
//         mice.pop(mouse);
//     }

// }