function preload() {
mustache=loadImage("https://i.postimg.cc/B6DCgYwP/mustache-student-math-favorite-for-friday-the-the-1.png")
}
nosex=0;nosey=0;
function setup() {
  canvas=createCanvas(400,400);
  canvas.position(420,150);
  video=createCapture(VIDEO);
  video.hide()
  posenet=ml5.poseNet(video,modelloaded)
posenet.on('pose',gotposes)
}
function draw() {
  image(video,0,0,400,400)
  fill("red");
  stroke("black")
  // circle(nosex,nosey,30)
  image(mustache,nosex-160,nosey-70,50,50)
}
function modelloaded() {
  console.log("modelisloaded")

}
function gotposes(results) {
console.log(results.length)
if(results.length>0)
{
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log(nosex,nosey);
}
}