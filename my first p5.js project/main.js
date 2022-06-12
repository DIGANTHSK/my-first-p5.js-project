function preload() {
}

function setup() {
canavas = createcanavas(500, 400);
canavas = position(70,200);
video = createcapture(VIDEO)
video.hide();
}

function draw() {
Image(video,100,80,300,250);

stroke(168, 10, 10);
Fill(168, 10, 10)

circle(40,40,50);
circle(460,40,50);
circle(40,360,40);
circle(460,360,50);
}

function take_snapshot() {
Save("frame.png");
}