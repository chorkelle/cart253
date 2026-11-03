/**
 * Firework Sim
 * Charlotte Walsh
 *
 * Fireworks.
 */

// The speech itself as an array of strings
const dialogue = [
    "Hi there!",
    "I'm XXX",
    "I was wondering if you could help me with something...",
    "I don't know what to do with my next prototype!",
    "What do you think I should do?",
];

// Organizes the dialogue sequence
let dialogueIndex = 0;
// Text box
let box = {
    x: 50,
    y: 300,
    width: 300,
    height: 80,
    padding: 20,
    fontSize: 18
};
// Marc Anthony (we will preload an image into this)
let Image = undefined;

/**
 * Loads the Marc Anthony image
 */
function preload() {
    marcImage = loadImage("assets/images/marc.png");
}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Displays Marc Anthony giving a speech
 */
function draw() {
    image(marcImage, 0, 0);

    // Display Marc Anthony and his dialog
    showDialogue();
}

/**
 * Display the speech in a dialog box
 */
function showDialogue() {
    // The background box
    push();
    fill(0);
    stroke(255);
    strokeWeight(3);
    rect(box.x, box.y, box.width, box.height);
    pop();

    // The text
    // Note how we're using extra arguments in text() to specify
    // the dimensions we want the text to wrap inside, including
    // using the padding of the dialog box
    push();
    fill(255);
    textSize(18);
    text(dialogue[dialogueIndex], box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2 * box.padding);
    pop();
}

/**
 * Lets you click to keep listening
 */
function mousePressed() {
    // Make sure we're not at the end of the speech aready
    if (dialogueIndex < dialogue.length - 1) {
        // Advance the line
        dialogueIndex++;
    }
}

