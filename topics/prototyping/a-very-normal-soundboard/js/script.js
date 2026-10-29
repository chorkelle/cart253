/** A Very Normal Soundboard
 * 
 * Charlotte Walsh
 * 
 * A soundboard that tries to run away when you click the buttons.
 */

"use strict";

// The dog barking sound effect
const dogBark = {
    // Position and size
    x: 150,
    y: 150,
    size: 100,
    // Colours
    fill: {
        notclicked: "#d0284f",
        clicked: "#7a1630"
    },
    soundEffect: undefined
}

// The applause sound effect
const applause = {
    // Position and size
    x: 300,
    y: 150,
    size: 100,
    // Colours
    fill: {
        notclicked: "#5c8cec",
        clicked: "#2e1aaf"
    },
    soundEffect: undefined
}

// The boing sound effect
const boing = {
    // Position and size
    x: 450,
    y: 150,
    size: 100,
    // Colours
    fill: {
        notclicked: "#53ec30",
        clicked: "#085720"
    },
    soundEffect: undefined
}

// The cat meowing sound effect
const catMeow = {
    // Position and size
    x: 450,
    y: 300,
    size: 100,
    // Colours
    fill: {
        notclicked: "#ec307e",
        clicked: "#570808"
    },
    soundEffect: undefined
}

// The vine boom sound effect
const vineBoom = {
    // Position and size
    x: 150,
    y: 300,
    size: 100,
    // Colours
    fill: {
        notclicked: "#3930ec",
        clicked: "#260857"
    },
    soundEffect: undefined
}

// The trumpet fanfare sound effect
const trumpets = {
    // Position and size
    x: 300,
    y: 300,
    size: 100,
    // Colours
    fill: {
        notclicked: "#ec6f30",
        clicked: "#571608"
    },
    soundEffect: undefined
}

// The dolphin sound effect
const dolphin = {
    // Position and size
    x: 150,
    y: 450,
    size: 100,
    // Colours
    fill: {
        notclicked: "#30ec8b",
        clicked: "#08573f"
    },
    soundEffect: undefined
}

// The minecraft villager sound effect
const villager = {
    // Position and size
    x: 300,
    y: 450,
    size: 100,
    // Colours
    fill: {
        notclicked: "#9730ec",
        clicked: "#2a0857"
    },
    soundEffect: undefined
}

// The metal pipe falling sound effect
const metalPipe = {
    // Position and size
    x: 450,
    y: 450,
    size: 100,
    // Colours
    fill: {
        notclicked: "#ecc930",
        clicked: "#573608"
    },
    soundEffect: undefined
}


/**
 * Loads the sound effects
 */
async function preload() {
    // Dog bark
    dogBark.soundEffect = await loadSound("assets/sounds/bark.wav");
    // Applause 
    applause.soundEffect = await loadSound("assets/sounds/applause.wav");
    // Boing
    boing.soundEffect = await loadSound("assets/sounds/boing.wav");

    // Cat meow
    catMeow.soundEffect = await loadSound("assets/sounds/cat-meow.wav");
    // Trumpet fanfare
    trumpets.soundEffect = await loadSound("assets/sounds/trumpets.wav");
    // Vine boom
    vineBoom.soundEffect = await loadSound("assets/sounds/vine-boom.wav");

    // Dolphin squeaks
    dolphin.soundEffect = await loadSound("assets/sounds/dolphin.wav");
    // Minecraft villager "hrmm"
    villager.soundEffect = await loadSound("assets/sounds/villager.wav");
    // Metal pipe falling sound effect
    metalPipe.soundEffect = await loadSound("assets/sounds/metal-pipe.wav");
}

/**
 * Creates the canvas
*/
async function setup() {

    createCanvas(600, 600);

    await preload();

    // Lets me change the speed at which the sound effects are played
    // Row 1
    dogBark.soundEffect.rate(0.5);
    applause.soundEffect.rate(0.9);
    boing.soundEffect.rate(0.9);

    // Row 2
    catMeow.soundEffect.rate(0.9);
    trumpets.soundEffect.rate(0.9);
    vineBoom.soundEffect.rate(0.9);

    // Row 3
    dolphin.soundEffect.rate(0.9);
    villager.soundEffect.rate(0.9);
    metalPipe.soundEffect.rate(0.5);

}

/**
 * Draws the program
*/
function draw() {

    // Draws the background
    background("lightgrey");

    // DRAWS THE BUTTONS

    // row 1
    drawButton(dogBark);
    drawButton(applause);
    drawButton(boing);
    // row 2
    drawButton(catMeow);
    drawButton(trumpets);
    drawButton(vineBoom);
    // row 3
    drawButton(dolphin);
    drawButton(villager);
    drawButton(metalPipe);

    // ALLOWS YOU TO CLICK THE BUTTONS (MOVES THEM AND PLAYS THE SOUND EFFECTS)

    // row 1
    pushButton(dogBark);
    pushButton(applause);
    pushButton(boing);
    // row 2
    pushButton(catMeow);
    pushButton(trumpets);
    pushButton(vineBoom);
    // row3
    pushButton(dolphin);
    pushButton(villager);
    pushButton(metalPipe);

}

/**
 * Draws the buttons
*/
function drawButton(button) {
    // Draws the button
    push();
    noStroke();
    fill(button.fill.notclicked);
    ellipse(button.x, button.y, button.size);
    pop();

}

/**
 * Draws the buttons
*/
function pushButton(button) {
    // Calculates the distance between mouse and button (aka lets you push the button)
    const d = dist(mouseX, mouseY, button.x, button.y);
    const overlap = (d < button.size / 2);

    if (overlap && mouseIsPressed) {

        try {

            // Plays the sound effect when the button is clicked
            button.soundEffect.play();
        } catch (error) {
            console.log(error)
            userStartAudio()
        }

        // Moves the buttons around at random
        button.x += random(1, 7);
        button.y += random(1, 8);
        button.x -= random(1, 8);
        button.y -= random(1, 7);

        // Changes button colour
        button.fill.notclicked = button.fill.clicked;

        // Makes the buttons change size randomly when clicked
        button.size += random(0, 5);
        button.size -= random(0, 5);
    }

    // Makes the buttons run away from you
    if (!overlap && mouseIsPressed) {

        // Moves the buttons around at random
        button.x += random(1, 2);
        button.y += random(1, 2);
        button.x -= random(1, 2);
        button.y -= random(1, 2);
    }

}

