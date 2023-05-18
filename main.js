song1="";
song2="";
status="";
function preload(){
    song1=loadSound("avengers.mp3");
    song2=loadSound("disney.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet (video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    stroke('#FF0000');
    fill('#FF0000');
    status=song1.isPlaying();

if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,20);
song2.stop();
if(status=false){
    song1.play();
    document.getElementById("song-name").innerHTML="Playing Avengers Song";
}

}


}

scoreRightWrist = 0;
scoreLeftWrist=0;

rightWristX =0;
rightWristY =0;

leftWristX =0;
leftWristY =0;
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = "+scoreRightWrist+"scoreLeftWrist = "+scoreLeftWrist);
    
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist X = "+rightWristX+"rightWrist Y = "+rightWristY);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.x;
        console.log("leftWrist X = "+leftWristX+"leftWrist Y = "+leftWristY);
    }
}
