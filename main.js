function preload()
{

}

 function setup()
{
canvas= createCanvas(550,400);
video = createCapture(VIDEO);
video.hide()
video.center()

}
 
function take_snapshot()
{
save("frame_selfie.png");
}

function draw()
{
image(video,120,80,300,250);
fill(108, 120, 168);
stroke(108, 120, 168);
circle(50,50,60);

fill(108, 120, 168);
stroke(108, 120, 168);
circle(500,50,60);

fill(108, 120, 168);
stroke(108, 120, 168);
circle(500,360,60);

fill(108, 120, 168);
stroke(108, 120, 168);
circle(50,360,60);


fill(146, 224, 211);
stroke(146, 224, 211);
rect(80,40,390,20);

fill(146, 224, 211);
stroke(146, 224, 211);
rect(80,355,390,20);

fill(146, 224, 211);
stroke(146, 224, 211);
rect(490,75,25,255);

fill(146, 224, 211);
stroke(146, 224, 211);
rect(34,75,25,255);


}
