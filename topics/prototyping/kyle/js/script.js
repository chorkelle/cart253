/**
 * Kyle
 * Charlotte Walsh
 *
 * Small dialogue experiment using arrays for images and text. The character is a spoof of a character in Look Outside (a very cool Montreal based horror game that was made by a montrealer originally as a game jam piece!).
 */


// Kyle's dialogue
const dialogue = [
    "Oh my god you're normal!",
    "Oh sorry, I'm Kyle.",
    "I uh . . . work here at Couche Tard.",
    "There's something weird going on outside . . .",
    "I can't get ahold of my manager.",
    "She told me she was on her way here yesterday but never showed up.",
    "I called the police but they told me to get away from the windows.",
    "Then I saw that the mice in our breakroom were . . . weird.",
];

// Kyle's picture array
const kylepics = [];

// Kyle's index
let kyleIndex = 0;

// Organizes the dialogue sequence
let dialogueIndex = 0;
// Text box
let box = {
    x: 65,
    y: 300,
    width: 350,
    height: 80,
    // Space around text and size of text
    padding: 20,
    fontSize: 18,
    // Rounds the corners of the text box
    round: 15,
};

/**
 * Creates canvas and loads the images in the array
 */
async function setup() {

    createCanvas(500, 417);

    // Loads the beautiful pictures of Kyle
    for (let i = 0; i < 7; i++) {
        // load a image file
        // use the i from our loop to refer to each file name
        let kylepic = await loadImage("assets/images/" + i + ".png");

        // add image file to pics array
        kylepics.push(kylepic);
    }

    // Loads the kyle pics
    console.log(kylepics);
}

// NOT WORKING EITHER
// Creates Kyle
function createKyle() {

    // Creates Kyle
    const kyle = {
        // Position and dimensions
        x: 0,
        y: 0,
        width: 500,
        height: 417
    };
    return kyle;

}

// /**
//  * Creates the canvas
//  */
// function setup() {
//     createCanvas(500, 417);

//     // Loads the kyle pics
//     console.log(kylepics);

//     createKyle(kylepics);

// }

// Draws Kyle and his dialogue
function draw() {
    background(220);

    // Displays kyle????????
    if (kylepics.length > 0) {


        image(kylepics[kyleIndex], 0, 0);
    }

    // Displays Kyle's yapping
    showDialogue();
}

/**
 * NOT WORKING
 */
// function drawKyle() {
//     // if there are images in the array
//     // if (kylepics.length > 0) {

//     // use index variable to access image file at each position in the pics array
//     // draw image in corner of canvas
//     // using the image's native width and height
//     image(kylepics[kyleIndex], kyle.x, kyle.y, kyle.width, kyle.height);
//     // }
// }

/**
 * Displays Kyle's dialogue
 */
function showDialogue() {
    // Box behind the text
    push();
    fill(0);
    stroke(255);
    strokeWeight(3);
    rect(box.x, box.y, box.width, box.height, box.round);
    pop();

    // Displays the dialogue
    push();
    fill(255);
    textSize(18);
    // Organizes the text within the text box 
    text(dialogue[dialogueIndex], box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2);
    pop();
}

/**
 * Lets you click to keep listening
 */
function mousePressed() {
    // Checks to see where we are in the dialogue
    if (dialogueIndex < dialogue.length - 1) {
        // Advance the line
        dialogueIndex++;
    }

    // Checks to see which Kyle pic we're at
    if (kyleIndex < kylepics.length - 1) {
        kyleIndex++;
    }

}




