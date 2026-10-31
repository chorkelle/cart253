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
        size: random(45, 50),
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


    drawCat(cat);
    cat.x = mouseX - 50;
    cat.y = mouseY - 50;

    // Loop to add infinite balls
    for (let mouse of mice) {
        moveMouse(mouse);
        runMouse(mouse);
        drawMouse(mouse);
    }

    // Calculates the time
    timer();

}

/**
 * Moves the ball according to its velocity
 */
function drawCat(cat) {
    push();
    translate(CENTER, CENTER);
    image(cat.image, cat.x, cat.y);
    pop();
}

/**
 * Moves the ball according to its velocity
 */
function moveMouse(mouse) {
    mouse.x += mouse.velocity.x;
    mouse.y += mouse.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function runMouse(mouse) {
    // Check if the mouse has reached the left or right
    const runX = (mouse.x > width || mouse.x < 0);
    // Check if the mouse has reached the top or bottom
    const runY = (mouse.y > height || mouse.y < 0);



    // Handle bouncing horizontally
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

function timer() {
    // Score increases relatively slowly
    time += 0.02;

    // Adds mice over time
    if (time > 5) {
        let mouse = createMouse();
        mice.push(mouse);
    }

}

/**
 * Erases the last ball created
 */
function mousePressed() {
    let mouse = [];
    mice.pop(mouse);
}