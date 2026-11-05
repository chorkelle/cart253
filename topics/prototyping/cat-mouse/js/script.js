/**
 * Cat Mouse
 * Charlotte Walsh 
 *
 * Cat who grows as he eats all the mice. Soon he will take over the world.
 */



// Creates mice array
let mice = [];

// Makes cat variable
let cat = {
    x: 0,
    y: 0,
    w: 100,
    h: 121,
    // Movement
    image: undefined
};

// Makes time a variable
let time = 0;

/**
 * Creates the canvas, loads the image, and creates the mice
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

    // Cat image
    cat.image = await loadImage("./assets/images/cat.png")

}

/**
 * Creates the abstract mouse
 */
function createMouse() {
    // Mouse variable
    const newMouse = {
        // Position and size
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
    // Returns the mouse
    return newMouse;
}

/**
 * Draws cat and mouse, and moves them
 */
function draw() {
    // Draws the background
    background("#d0eb87");

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

    // Lets the cat eat the mice
    const d = dist(mouseX, mouseY, mouse.x, mouse.y);
    if (d < mouse.size) {

        // let mouse = [];
        mice.pop(mouse);
        // Makes the cat gradually larger the more it eats
        cat.w += 0.1;
        cat.h += 0.1;
        // Makes the mice gradually smaller the more they get eaten
        mouse.size -= 2;
    }

    // Constrain mice to canvas right & left
    if (runX) {
        mouse.velocity.x *= -1;
    }
    // Constrain mice to canvas top & bottom
    if (runY) {
        mouse.velocity.y *= -1;
    }
}

/**
 * Draw the mice
 */
function drawMouse(mouse) {
    // Draws the circle mice
    push();
    noStroke();
    fill(mouse.fill.r, mouse.fill.g, mouse.fill.b);
    ellipse(mouse.x, mouse.y, mouse.size);
    pop();
}

/**
 * Sets a timer
 */
function timer() {
    // Adds time
    time += 0.02;

    // Adds mice over time
    if (time > 5) {
        let mouse = createMouse();
        mice.push(mouse);
    }

}
