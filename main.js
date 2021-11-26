 noseX = 0;
 noseY = 0;

 difference = 0;

 rightWristX = 0;
 leftWristX = 0;

 difference_color = 0;
 leftWristY = 0;
 headY = 0;


 function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of a square will be =" + difference + "px";
    fill(difference_color);
    stroke(difference_color);
    square(noseX, noseY, difference);
    }

    function gotPoses(results)
    {
      if(results.length > 0)
      {
        console.log(results);
        noseX = results[0].poseNet.nose.x;
        noseY = results[0].poseNet.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;   
        rightWristX = results[0].pose.rightWrist.x;   
        difference = floor(rightWristX - leftWristX);

        leftWristY = results[0].pose.leftWrist.y;
        headY = results[0].pose.head.y;
        difference_color = floor(leftWristY - headY);
        if(difference_color > 255) {
          difference_color = 255;
        console.log("Square shade number = " + difference_color);
        document.getElementById("square_color").innerHTML = "Square shade number = " + difference_color;
        } else {
          console.log("Square shade number = " + difference_color);
          document.getElementById("square_color").innerHTML = "Square shade number = " + difference_color;
        }
        
        

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "Difference = " +difference );


      }
    }  
