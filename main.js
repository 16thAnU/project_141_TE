song1 = "";
song2 = "";

function preload() {
song1 = loadSound("deep-cinematic-ballad_60sec-178308.mp3");
song2 = loadSound("Imagine_Dragons_-_Believer.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}