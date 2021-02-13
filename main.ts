let degrees = 0
let difference = 0
let goal = 0
let img: Image = null

function getRandomDegrees() {
    return Math.floor(Math.random() * 1000) % 360;
}

basic.forever(() => {
    degrees = input.compassHeading();
    difference = Math.abs(goal - degrees);
    pins.digitalWritePin(DigitalPin.P0, 1);
    basic.pause(difference * 5);
    pins.digitalWritePin(DigitalPin.P0, 0);
    basic.pause(difference * 5);
});

input.onButtonPressed(Button.A, () => {
    if (difference < 15) {
        basic.clearScreen();
        basic.showString("Winner");
        goal = getRandomDegrees();
    } else {
        basic.clearScreen();
        basic.showString("Try Again");
        goal = getRandomDegrees();
    }
});

input.calibrate();
img = images.createImage(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);
img.showImage(0);
goal = getRandomDegrees();

