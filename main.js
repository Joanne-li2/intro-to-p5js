function preload() {
}

function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("blue")
    stroke("red")
    circle(50,50,70)
    circle(600,50,70)
    circle(600,450,70)
    circle(50,450,70)

    fill("pink")
    stroke("orange")
    rect(90,40,470,20)
    rect(90,450,470,20)
    rect(40,90,20,320)
    rect(600,90,20,320)
}


function take_snapshot(){
    save('student_name.png');
}